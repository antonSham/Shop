import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Item from "../components/Item.js";
import { getItems } from "../actions/index.js";
import Load from "./Load.js";

const mapStateToProps = state => ({
  items: state.items,
  loaded: state.items.data.length !== 0
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getItems }, dispatch);

class Goods extends React.Component {
  componentDidMount = () => {
    if (!this.props.loaded) {
      this.props.getItems();
    }
  };

  load = () =>
    this.props.items.loading === "" ? <Load /> : null;

  render = () =>
    <div>
      {this.load()}
      {this.props.items.data.map(item => <Item key={item.id} id={item.id} />)}
    </div>;
}

export default connect(mapStateToProps, mapDispatchToProps)(Goods);
