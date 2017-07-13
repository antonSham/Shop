import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getItems } from "../actions/index.js";
import CartItem from "./CartItem.js";
import Load from "./Load.js";

const mapStateToProps = state => ({
  items: state.cart,
  loading: state.items.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getItems }, dispatch);

class CartGoods extends React.Component {
  componentDidMount = () => {
    this.props.getItems();
  };

  load = () =>
    this.props.loading && this.props.error === "" ? <Load /> : null;

  render = () =>
    <div>
      {this.load()}
      {this.props.items.map(item => <CartItem key={item.id} id={item.id} />)}
    </div>;
}

export default connect(mapStateToProps, mapDispatchToProps)(CartGoods);
