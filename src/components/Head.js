import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CartLogo from "./CartLogo.js";
import CartLogoImg from "./CartLogoImg.js";
import CartBadge from "./CartBadge.js";
import { search } from "../actions/index.js";

const mapStateToProps = (state, ownProps) => ({
  cartItemsCount: state.cart.length,
  searchRequest: state.items.search.request
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ search }, dispatch);

const Head = ( {cartItemsCount, search, searchRequest} ) =>
  <div className="uk-navbar-container" data-uk-navbar>
    <div className="uk-navbar-left">
      <Link to="/" className="uk-navbar-item uk-logo">
        ToeShop
      </Link>
    </div>
    <div className="uk-navbar-right">
      <form className="uk-search uk-search-default uk-background-default"
        onSubmit={ (event) => {
          event.preventDefault();
        }}
      >
        <span data-uk-search-icon data-uk-icon="icon: search"/>
        <input className="uk-search-input"
                type="search"
                onChange={ (event) => {
                  event.preventDefault();
                  search(event.target.value);
                }}
                value={searchRequest}
                placeholder="Search..." />
        <Link to="/"><button type="submit" hidden/></Link>
      </form>
      <Link to="/Cart" className="uk-navbar-item uk-logo">
        <CartLogo>
          <CartLogoImg src={require("../../data/img/cart.gif")} alt="cart" />
          <CartBadge
            className={"uk-badge " + (cartItemsCount!==0 ? "" : "uk-invisible")}>
              {cartItemsCount}
          </CartBadge>
        </CartLogo>
      </Link>
    </div>
  </div>;

export default connect(mapStateToProps, mapDispatchToProps)(Head);
