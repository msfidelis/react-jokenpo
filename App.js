/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, Image } from "react-native";

class Topo extends Component {
  render() {
    return (
      <View>
        <Image source={require('./img/jokenpo.png')} />
      </View>
    );
  }
}

class Icone extends Component {
  render() {

    var image = '';

    if (this.props.escolha == 'PEDRA') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}> {this.props.jogador}: </Text>
          <Image source={require('./img/pedra.png')} />
        </View>
      );
    } else if (this.props.escolha == 'PAPEL') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}> {this.props.jogador}: </Text>
          <Image source={require('./img/papel.png')} />
        </View>
      );
    } else if (this.props.escolha == 'TESOURA') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}> {this.props.jogador}: </Text>
          <Image source={require('./img/tesoura.png')} />
        </View>
      );
    } else {
      return false;
    }
  }

}


export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { escolhaUsuario: "", escolhaComputador: "" };
  }

  jokenpo(escolhaUsuario) {
    let numeroAleatorio = Math.floor(Math.random() * 3);
    let escolhaComputador = "";
    let resultado = "";

    switch (numeroAleatorio) {
      case 0:
        escolhaComputador = "PEDRA";
        break;
      case 1:
        escolhaComputador = "PAPEL";
        break;
      case 2:
        escolhaComputador = "TESOURA";
        break;
    }

    if (escolhaComputador === escolhaUsuario) {
      resultado = "EMPATE";
    } else {

      if (escolhaComputador === "PEDRA") {
        if (escolhaUsuario === "TESOURA") {
          resultado = "COMPUTADOR GANHOU";
        }

        if (escolhaUsuario === "PAPEL") {
          resultado = "VOCÊ GANHOU";
        }
      }

      if (escolhaComputador === "PAPEL") {
        if (escolhaUsuario === "PEDRA") {
          resultado = "COMPUTADOR GANHOU";
        }

        if (escolhaUsuario === "TESOURA") {
          resultado = "VOCÊ GANHOU";
        }
      }

      if (escolhaComputador === "TESOURA") {
        if (escolhaUsuario === "PEDRA") {
          resultado = "VOCÊ GANHOU";
        }

        if (escolhaUsuario === "PAPEL") {
          resultado = "COMPUTADOR GANHOU";
        }
      }
    }

    this.setState({
      escolhaUsuario: escolhaUsuario,
      escolhaComputador: escolhaComputador,
      resultado: resultado
    });
  }

  render() {
    return (
      <View>

        <Topo></Topo>

        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha} >
            <Button title="PEDRA" onPress={() => this.jokenpo("PEDRA")} />
          </View>
          <View style={styles.btnEscolha} >
            <Button title="PAPEL" onPress={() => this.jokenpo("PAPEL")} />
          </View>
          <View style={styles.btnEscolha} >
            <Button title="TESOURA" onPress={() => this.jokenpo("TESOURA")} />
          </View>
        </View>

        <View style={styles.palco}>
          <Text style={styles.txtResultados}>{this.state.resultado}</Text>
          <Icone escolha={this.state.escolhaUsuario} jogador='Você'></Icone>
          <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 100
  },
  painelAcoes: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultados: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'blue',
    height: 60
  },
  icone: {
    alignItems: 'center',
    marginBottom: 20
  },
  txtJogador: {
    fontSize: 18
  }
});
