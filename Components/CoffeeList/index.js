import React, { Component } from "react";
import { ImageBackground, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
// NativeBase Components
import {
  List,
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Content
} from "native-base";

// Style
import styles from "./styles";

class CoffeeList extends Component {
  handlePress() {
    alert("Pressed");
  }
  renderItem(shop) {
    return (
      <TouchableOpacity key={shop.id} onPress={() => this.handlePress(shop)}>
        <ImageBackground
          source={{ uri: shop.background }}
          style={styles.background}
        >
          <View style={styles.overlay} />
          <ListItem style={styles.transparent}>
            <Card style={styles.transparent}>
              <CardItem style={styles.transparent}>
                <Left>
                  <Thumbnail
                    bordered
                    source={{ uri: shop.img }}
                    style={styles.thumbnail}
                  />
                  <Text style={styles.text}>{shop.name}</Text>
                  <Text note style={styles.text}>
                    {shop.distance}
                  </Text>
                </Left>
              </CardItem>
            </Card>
          </ListItem>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
  render() {
    if (this.props.coffeeShops) {
      let ListItems = this.props.coffeeShops.map(shop => this.renderItem(shop));
      return (
        <Content>
          <List>{ListItems}</List>
        </Content>
      );
    } else {
      return (
        <Content>
          <Text>There is no coffee for you today!</Text>
        </Content>
      );
    }
  }
}
const mapStateToProps = state => ({
  coffeeShops: state.rootCoffee.coffeeShops
});

export default connect(
  mapStateToProps,
  null
)(CoffeeList);
