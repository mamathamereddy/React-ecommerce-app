import React, { useEffect } from "react";
//import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { addToBasket } from "../actions/addAction";
import { getProducts } from "../actions/getProducts";
import Fade from "react-reveal";
import Button from "../components/Button"
import Card from "../components/Card";
import "../App.css";

const Home = ({ productsProps, getProducts, addToBasket }) => {
  //console.log(productsProps);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Fade left cascade>
    <div className="container">
      {productsProps.productsList
        ? productsProps.productsList.map((product) => {
            return (
              
              <div className="products_container">
              <Card products={product} />
              <Button type="button" onClick={addToBasket} text="Add to cart" className="cart"/>

            </div>
                
            );
          })
        : null}
    </div>
    </Fade>
  );
};

const mapStateToProps = (state) => ({
  productsProps: state.productsState,
});
export default connect(mapStateToProps, { addToBasket, getProducts })(Home);
