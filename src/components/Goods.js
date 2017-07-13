import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Item from "../components/Item.js";
import { getItems } from "../actions/index.js";
import Load from "./Load.js";

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getItems }, dispatch);

class Goods extends React.Component {
  componentDidMount = () => {
    this.props.getItems();
  };

  load = () =>
    this.props.items.loading && this.props.items.error === "" ? <Load /> : null;

  render = () =>
    <div>
      {this.load()}
      {this.props.items.data.map(item => <Item key={item.id} id={item.id} />)}
    </div>;
}

export default connect(mapStateToProps, mapDispatchToProps)(Goods);
