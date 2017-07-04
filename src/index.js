import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Head = () => (
  <div className="head">
    <a href="#">
      <img src={require("../data/img/logo.jpg")} alt="logo" />
    </a>
    <h1 className="title">The best toe shop</h1>
  </div>
);

class Body extends React.Component {
  constructor() {
    super();
    this.catalog = [
      {imgsrc: require("../data/img/1.jpg"), name: "bick", price: 250},
      {imgsrc: require("../data/img/2.jpg"), name: "rocket", price: 200},
      {imgsrc: require("../data/img/3.jpg"), name: "pokemon", price: 300}
    ]
  }
  render () {
    const items = this.catalog.map((item) => {
      return (
        <div className="item">
          <img src={item.imgsrc} alt={item.name}/>
          <div className="name">
            {item.name}
          </div>
          <div className="price">
            {item.price}
          </div>
        </div>
      );
    });

    return (
      <div className="items">
        {items}
      </div>
    );
  }
}

const Footer = () => (
  <div className="footer">
  &copy; 2017
  </div>
);

const Shop = () => (
  <div className="shop">
    <Head />
    <Body />
    <Footer />
  </div>
);

ReactDOM.render(
  <Shop />,
  document.getElementById("root")
);
