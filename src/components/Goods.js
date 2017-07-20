import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Item from "../components/Item.js";
import { getItems, changeSearchRequest, search } from "../actions/index.js";
import Load from "./Load.js";

const mapStateToProps = state => ({
  items: state.items,
  loaded: state.items.data.length !== 0,
  loading: state.items.loading,
  searchedItems: state.items.search.searchedItems
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getItems, changeSearchRequest, search }, dispatch);

class Goods extends React.Component {
  componentDidMount = () => {
    this.props.changeSearchRequest(this.props.searchRequest);
    if (!this.props.loaded && !this.props.loading) {
      this.props.getItems();
    }
    this.props.search();
  };

  load = () => (this.props.items.loading ? <Load /> : null);

  filterItems = item => {
    if (
      this.props.searchRequest === "" ||
      this.props.searchRequest === undefined
    ) {
      return true;
    }
    return this.props.searchedItems.filter(id => id === item.id).length > 0;
  };

  render = () =>
    <div className="uk-margin-left uk-margin-right uk-margin-bottom">
      {this.load()}
      <div
        className="uk-child-width-1-2@m uk-child-width-1-3@l uk-child-width-1-4@xl"
        data-uk-grid
      >
        {this.props.items.data
          .filter(this.filterItems)
          .map(item => <Item key={item.id} id={item.id} />)}
      </div>
    </div>;
}

export default connect(mapStateToProps, mapDispatchToProps)(Goods);
