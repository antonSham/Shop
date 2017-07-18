import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartLogo from "./CartLogo.js";
import CartLogoImg from "./CartLogoImg.js";
import CartBadge from "./CartBadge.js";

const mapStateToProps = (state, ownProps) => ({
  cartItemsCount: state.cart.length
});

const Head = ( {cartItemsCount} ) =>
  <div className="uk-navbar-container" data-uk-navbar>
    <div className="uk-navbar-left">
      <Link to="/" className="uk-navbar-item uk-logo">
        ToeShop
      </Link>
    </div>
    <div className="uk-navbar-right">
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

export default connect(mapStateToProps)(Head);
