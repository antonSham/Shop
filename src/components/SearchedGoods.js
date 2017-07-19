import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Item from "../components/Item.js";
import { getItems, changeSearchRequest } from "../actions/index.js";
import Load from "./Load.js";
import search from "../Api/search.js";

const mapStateToProps = (state, ownProps) => ({
  items: state.items,
  loaded: state.items.data.length !== 0,
  loading: state.items.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getItems, changeSearchRequest }, dispatch);

class SearchedGoods extends React.Component {
  componentDidMount = () => {
    this.props.changeSearchRequest(this.props.searchRequest);
    if (!this.props.loaded && !this.props.loading) {
      this.props.getItems();
    }
  };

  render = () => {
    let searchedItems = search(this.props.items.data, this.props.searchRequest);
    return (
      <div className="uk-margin-left uk-margin-right uk-margin-bottom">
        {this.props.items.loading
          ? <Load />
          : this.props.searchRequest === undefined ||
            this.props.searchRequest === ""
            ? "Your search request is empty"
            : searchedItems.length === 0
              ? "Your search request did not match any items"
              : null}
        <div
          className="uk-child-width-1-2@m uk-child-width-1-3@l uk-child-width-1-4@xl"
          data-uk-grid
        >
          {this.props.items.data
            .filter(item => searchedItems.indexOf(item.id) !== -1)
            .map(item => <Item key={item.id} id={item.id} />)}
        </div>
      </div>
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchedGoods);
