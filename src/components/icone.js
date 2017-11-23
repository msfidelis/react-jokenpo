
import React, { Component } from "react";
import { Platform, View, Image, Text, StyleSheet } from "react-native";


class Icone extends Component {
    render() {
  
      var image = '';
  
      if (this.props.escolha == 'PEDRA') {
        return (
          <View style={styles.icone}>
            <Text style={styles.txtJogador}> {this.props.jogador}: </Text>
            <Image source={require('../../img/pedra.png')} />
          </View>
        );
      } else if (this.props.escolha == 'PAPEL') {
        return (
          <View style={styles.icone}>
            <Text style={styles.txtJogador}> {this.props.jogador}: </Text>
            <Image source={require('../..//img/papel.png')} />
          </View>
        );
      } else if (this.props.escolha == 'TESOURA') {
        return (
          <View style={styles.icone}>
            <Text style={styles.txtJogador}> {this.props.jogador}: </Text>
            <Image source={require('../../img/tesoura.png')} />
          </View>
        );
      } else {
        return false;
      }
    }
  
  }

const styles = StyleSheet.create({
    icone: {
        alignItems: 'center',
        marginBottom: 20
      },
    txtJogador: {
        fontSize: 18
    }
});

export default Icone;