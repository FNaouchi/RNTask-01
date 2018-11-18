import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/coffee";
// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";

// Components
import CoffeeList from "../CoffeeList";
import CoffeeCart from "../CoffeeCart";
import CoffeeDetail from "../CoffeeDetail";
import Login from "../Login";

class HomePage extends Component {
  componentDidMount() {
    this.props.getCoffeeShops();
  }
  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <Header style={styles.transparent} />
        <CoffeeList />
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  coffeeShops: state.rootCoffee.coffeeShops
});
const mapDispatchToProps = dispatch => ({
  getCoffeeShops: () => dispatch(actionCreators.getCoffeeShops())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
