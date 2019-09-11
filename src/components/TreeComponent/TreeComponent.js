import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setCurrentTerm } from "../../redux/actions/termActions";
import TreeNodeHelper from "./TreeNodeHelper";
import { Spinner, IconButton, Icon, Checkbox } from "office-ui-fabric-react";
import { tsConstructorType } from "@babel/types";
import TreeNode from "./TreeNode";


class TreeComponent extends React.Component{
  constructor(props){
    super(props);
    let rootNodeID = props.currNode.id;
    console.log('rootNodeID is' + rootNodeID);
    let treeState = {};
    treeState[rootNodeID] = {
      node: props.currNode,
      children: [],
      loading: false,
      highlighted: false
    }
    treeState["selectedNodes"] = new Set([]);
    console.log("tree component constructrer")
    this.state = treeState;

    this.onToggle = this.onToggle.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onDeselect = this.onDeselect.bind(this);
    this.onSingleSelect = this.onSingleSelect.bind(this);
    // this.addNodeInState = this.addNodeInState.bind(this);
  }

  onToggle(nodeId, uri) {

          let prevState = this.state;

          let isOpen = false;

          if (!prevState[nodeId].node.isOpen) {
            // call load children
            console.log(" node is not open")
            const res = this.loadChildren(nodeId, uri);
            // set node isOpen true

            isOpen = true;
          } else {
            isOpen = false;
          }
          this.setState((prevState) => {
            let treeStateChanges = {
            };

            treeStateChanges[nodeId] = {
              ...prevState[nodeId], node: { ...prevState[nodeId].node, isOpen: isOpen }
            };


            return treeStateChanges
          });



  }

  onSelect(nodeLabel, nodeId){
    let selectedNodes = new Set([]);
    this.setState((prevState) =>{

      selectedNodes = prevState.selectedNodes;
      selectedNodes.add(JSON.stringify({label: nodeLabel, id: nodeId}));
      this.props.onSelect(selectedNodes);
      return {selectedNodes : selectedNodes};
    }
    )
    //this.props.onSelect(selectedNodes);
  }

  onSingleSelect(nodeLabel, nodeId){
    this.setState((prevState) =>{

      let selectedNodes = new Set([]);
      selectedNodes.add(JSON.stringify({label: nodeLabel, id: nodeId}));
      this.props.onSelect(selectedNodes);
      return {selectedNodes : selectedNodes};
    }
    )
  }

  onDeselect(nodeLabel, nodeId){
    let selectedNodes = new Set([]);
    this.setState((prevState) =>{

      selectedNodes = prevState.selectedNodes;
      selectedNodes.delete(JSON.stringify({label: nodeLabel, id: nodeId}));
      this.props.onSelect(selectedNodes);
      return {selectedNodes : selectedNodes};
    }
    )
    //this.props.onSelect(selectedNodes);
  }
  // addNodeInState(currNode){
  //   let nodeState = {};
  //   nodeState[currNode.id] = {
  //     node: currNode,
  //     children: [],
  //     loading: false,
  //     highlighted: false
  //   }

  //   this.setState((prevState) => { return nodeState})
  // }

  async loadChildren(nodeId, uri) {
    if (this.state[nodeId].children.length === 0 && this.state[nodeId].node.type === "folder") {

      this.setState((prevState) => {
        let treeStateChanges = {
        };
        treeStateChanges[nodeId] = {
          ...prevState[nodeId], loading: true
        };

        return treeStateChanges;
      })

      const response = await this.props.onGetNode(uri);
      console.log("got response = ")
      console.log(JSON.stringify(response))
      this.setState((prevState) =>{
        let treeStateChanges = {
        };
        treeStateChanges[nodeId] = {
          ...prevState[nodeId], loading: false
        };
        return treeStateChanges;
      })
      this.setState((prevState) =>{
        let treeStateChanges = {
        };
        treeStateChanges[nodeId] = {
          ...prevState[nodeId], children: response
        };
        response.forEach((currNode) => {

          treeStateChanges[currNode.id] = {
            node: currNode,
            children: [],
            loading: false,
            highlighted: false
          }
        })

        return treeStateChanges;
      })
      console.log("state is " + JSON.stringify(this.state))



    }
  }

  render(){


    return <div>
    <TreeNode {...this.props} nodeState = {this.state[this.props.currNode.id]} onToggle={this.onToggle}
    treeState = {this.state} onSelect={this.onSelect} onDeselect={this.onDeselect} selectedNodes = {this.state.selectedNodes}
    onSingleSelect= {this.onSingleSelect}
     />      <span>{JSON.stringify(Array.from(this.state.selectedNodes))}</span>
     </div>;
  }
}

export default TreeComponent;