import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/index.js";

const mapStateToProps = (state, ownProps) => ({
  item: state.items.data.filter(item => item.id === ownProps.id)[0]
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onButtonClick: () => dispatch(addToCart(ownProps.id))
});
const Item = ({ item, onButtonClick }) => {
  return (
    <div>
      <div className="uk-card uk-card-default uk-grid uk-grid-collapse uk-child-width-1-2@s uk-margin">
        <div className="uk-card-media-left uk-cover-container">
          <img src={require("../../" + item.imgsrc)} alt={item.name}
          className="uk-cover"/>
          <canvas width="" height=""></canvas>
        </div>
        <div>
          <div className="uk-card-body">
            <h3 className="uk-card-title">{item.name}</h3>
            <p className="uk-text-muted">{item.price} $</p>
            <button onClick={onButtonClick} className="uk-button uk-button-primary uk-align-right">to&nbsp;Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
