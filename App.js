/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, Image, TouchableOpacity } from "react-native";

import Topo from './src/components/topo';
import Icone from './src/components/icone';
import Botao from './src/components/botao';

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
          resultado = "SE FODEU";
        }

        if (escolhaUsuario === "PAPEL") {
          resultado = "BOA MLK!";
        }
      }

      if (escolhaComputador === "PAPEL") {
        if (escolhaUsuario === "PEDRA") {
          resultado = "SE FODEU";
        }

        if (escolhaUsuario === "TESOURA") {
          resultado = "BOA MLK!";
        }
      }

      if (escolhaComputador === "TESOURA") {
        if (escolhaUsuario === "PEDRA") {
          resultado = "BOA MLK!";
        }

        if (escolhaUsuario === "PAPEL") {
          resultado = "SE FODEU";
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
            <Botao titulo='PEDRA' acao={() => this.jokenpo("PEDRA")} ></Botao>
          </View>
          <View style = {styles.btnEscolha} >
            <Botao titulo='PAPEL' acao={() => this.jokenpo("PAPEL")} ></Botao>
          </View>
          <View style={styles.btnEscolha} >
            <Botao titulo='TESOURA' acao={() => this.jokenpo("TESOURA")} ></Botao>
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
    color: '#703216',
    height: 60
  },
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
});
