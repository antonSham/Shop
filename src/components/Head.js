import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CartLogo from "./CartLogo.js";
import CartLogoImg from "./CartLogoImg.js";
import CartBadge from "./CartBadge.js";
import { changeSearchRequest, search } from "../actions/index.js";

const mapStateToProps = (state, ownProps) => ({
  cartItemsCount: state.cart.length,
  searchRequest: state.items.search.request
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ changeSearchRequest, search }, dispatch);

class Head extends React.Component{
  constructor () {
    super();
    this.state = {
      searchRedirect: false
    }
  }

  submitForm = (event) => {
    event.preventDefault();
    this.setState({searchRedirect: true})
    this.props.search()
  }

  render = () => {
    var {cartItemsCount,
      changeSearchRequest,
      searchRequest
    } = this.props;
    return (
      <div className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <Link to="/" className="uk-navbar-item uk-logo">
            ToeShop
          </Link>
        </div>
        <div className="uk-navbar-right">
          <form className="uk-search uk-search-default uk-background-default"
            onSubmit={this.submitForm}
          >
            <span data-uk-search-icon data-uk-icon="icon: search"/>
            <input className="uk-search-input"
                    type="search"
                    name="search"
                    placeholder="Search..."
                    value={searchRequest || ""}
                    onChange={(event) =>
                      changeSearchRequest(event.target.value)
                    }
            />
          </form>
          {this.state.searchRedirect && (
            <Redirect to={'/SpecialPage?search=' + searchRequest} />
          )}
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
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Head);
