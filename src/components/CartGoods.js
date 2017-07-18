import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getItems } from "../actions/index.js";
import CartItem from "./CartItem.js";
import Load from "./Load.js";

const mapStateToProps = state => ({
  items: state.cart,
  loading: state.items.loading,
  loaded: state.items.data.length !== 0
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getItems }, dispatch);

class CartGoods extends React.Component {
  componentDidMount = () => {
    if (!this.props.loaded && !this.props.loading) {
      this.props.getItems();
    }
  };

  load = () =>
    this.props.loading ? <Load /> : null;

  render = () =>
    <div className="uk-margin-left uk-margin-right uk-margin-bottom">
      {this.load()}
      <div className="uk-child-width-1-2@m uk-child-width-1-3@l uk-child-width-1-4@xl" data-uk-grid={""}>
        {this.props.items.map(item => <CartItem key={item.id} id={item.id} />)}
      </div>
    </div>;
}

export default connect(mapStateToProps, mapDispatchToProps)(CartGoods);
