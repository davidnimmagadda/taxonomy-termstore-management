import React from "react";
import { connect } from "react-redux";
import TermDetail from "../terms/TermDetail";
import "./TreeControl.css";
import PropTypes from "prop-types";
import TreeNode from "./TreeNode";
import TreeComponent from "./TreeComponent";
import {  ChoiceGroup } from "office-ui-fabric-react";


import { getNode } from "../../api/termApi";

let handleOnSelect = (terms) => {
  let termString = ""
  Array.from(terms).forEach((term) => {
    let parsedTerm = JSON.parse(term)
    termString += parsedTerm.label + "(" + parsedTerm.id + ")";
  });
  document.getElementById("selectedTermsInTree").innerText = termString;

}

let onLoadMore = function() {
  return getNode("termGroups/ai/termSets")

}

let getURI = function(nodeId, parents) {
  const baseURI = "termGroups"
  switch (parents.length) {
    case 0:
      return baseURI;
    case 1:
      return baseURI + "/" + nodeId + "/termSets";
    case 2:
      return baseURI + "/" + parents[1] + "/termSets/" + nodeId + "/terms";
    default:
      return "terms/" + nodeId + "/terms";
  }
}

let onLoadNode = function(nodeId, parents) {
  let uri = getURI(nodeId, parents);
  console.log("uri = " + uri)
  return getNode(uri)
}


export class TreeControl extends React.Component {
constructor(props){
  super(props);
  this.state = {
    selectionMode: 1
  }
}

onSelectionModeChange(ev, checkedValue){
  // console.log(checkedValue)
  this.setState((prevState) => {
    return {selectionMode: checkedValue.key};
  })
}
render(){
  return (
    <div
      style={{
        width: "1000px",
        maxWidth: "100%",
        margin: "0 auto",
        display: "flex"
      }}
    >
      <div
        style={{
          width: "250px",
          borderWidth: "1px",
          borderColor: "#e0dfda",
          borderStyle: "solid"
        }}
      >

        <div>
        Selection Mode
        <ChoiceGroup
        className="defaultChoiceGroup"
        options={[
          {
            key: 0,
             text: "None"
          },
          {
            key: 1,
             text: "Single Select"
          },
          {
            key: 2,
             text: "Multi Select"
          }
        ]}
        selectedKey = {this.state.selectionMode}
        onChange = {(ev, checkedValue) => this.onSelectionModeChange(ev,checkedValue)}
      />
        </div>
        <div id="selectedTermsInTree">
        </div>
        <TreeComponent
          onGetNode = {onLoadNode.bind(this)}
          selectionMode = {this.state.selectionMode}
          currNode = {{
            name: "term store",
            type: "folder",
            id: "1"
          }}


          onSelect = {handleOnSelect.bind(this)}
          height={300}
          width={400}
          onLoadMore = {onLoadMore.bind(this)}

        />




      </div>
      <div className="details-edit">
        <TermDetail termDetails={this.props.currentItem} />
      </div>
    </div>
  );
}
}

TreeControl.propTypes = {
  currentItem: PropTypes.object.isRequired
};

function mapStateToProps({ currentItem }) {
  return { currentItem };
}

export default connect(mapStateToProps)(TreeControl);
