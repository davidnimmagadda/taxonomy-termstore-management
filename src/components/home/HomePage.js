import React, { useEffect } from "react";
import { Spinner } from "office-ui-fabric-react";
import TermStoreNav from "../termstorenav/TermStoreNav";
import PropTypes from "prop-types";
import { loadTermChildren } from "../../redux/actions/termStoreActions";
import { connect } from "react-redux";
import TermDetail from "../terms/TermDetail";

function HomePage(props) {
  useEffect(() => {
    if (props.termstore.termTree.length === 0) {
      props
        .loadTermChildren("Taxonomy")
        .catch(error => alert("Loading Terms Failed : " + error));
    }
  }, []);

  function handleLinkClick(ev, item) {
    props.loadTermChildren(item.termpath);
  }

  return (
    <>
      <h2>Terms</h2>
      {props.loading ? (
        <Spinner />
      ) : (
        <div style={{ display: "flex" }}>
          <TermStoreNav
            termstore={props.termstore}
            onLinkClick={handleLinkClick}
          />
          <TermDetail termDetails={props.termstore.currentTerm} />
        </div>
      )}
    </>
  );
}

HomePage.propTypes = {
  termstore: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  loadTermChildren: PropTypes.func.isRequired
};

function mapStateToProps({ termstore, activeApiCalls }) {
  return { termstore, loading: activeApiCalls > 0 };
}

const mapDispatchToProps = {
  loadTermChildren
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
