import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CartLogo from "./CartLogo.js";
import CartLogoImg from "./CartLogoImg.js";
import CartBadge from "./CartBadge.js";
import { changeSearchRequest } from "../actions/index.js";

const mapStateToProps = (state, ownProps) => ({
  cartItemsCount: state.cart.length,
  searchRequest: state.items.searchRequest
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ changeSearchRequest }, dispatch);

const Head = ( {cartItemsCount, changeSearchRequest, searchRequest} ) =>
  <div className="uk-navbar-container" data-uk-navbar>
    <div className="uk-navbar-left">
      <Link to="/" className="uk-navbar-item uk-logo">
        ToeShop
      </Link>
    </div>
    <div className="uk-navbar-right">
      <form className="uk-search uk-search-default uk-background-default">
        <span data-uk-search-icon data-uk-icon="icon: search"/>
        <input className="uk-search-input"
                type="search"
                placeholder="Search..."
                value={searchRequest}
                onChange={(event) =>
                  changeSearchRequest(event.target.value)
                } />
        <Link to={"/search/" + searchRequest}>
          <button type="submit" hidden/>
        </Link>
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
