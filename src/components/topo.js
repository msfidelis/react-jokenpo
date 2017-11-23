import React, { Component } from "react";
import { Platform, View, Image } from "react-native";

class Topo extends Component {
    render() {
      return (
        <View>
          <Image source={require('../../img/joken-raj.png')} />
        </View>
      );
    }
}

export default Topo;