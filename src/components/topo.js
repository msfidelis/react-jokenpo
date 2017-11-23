import React, { Component } from "react";
import { Platform, View, Image } from "react-native";

const image = require('../../img/joken-raj.png');

class Topo extends Component {
    render() {
      return (
        <View>
          <Image source={image} />
        </View>
      );
    }
}

export default Topo;