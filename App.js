/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, Image, TouchableOpacity } from "react-native";

class Topo extends Component {
  render() {
    return (
      <View>
        <Image source={require('./img/joken-raj.png')} />
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
            <TouchableOpacity onPress={() => this.jokenpo("PEDRA")} >
              <Text style = {styles.button}>
                PEDRA
              </Text>
            </TouchableOpacity>    
          </View>
          <View style = {styles.container} >
            <TouchableOpacity onPress={() => this.jokenpo("PAPEL")} >
              <Text style = {styles.button}>
                PAPEL
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnEscolha} >
            <TouchableOpacity onPress={() => this.jokenpo("TESOURA")} >
              <Text style = {styles.button}>
                TESOURA
              </Text>
            </TouchableOpacity>
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
  btnEscolha2: {
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
  icone: {
    alignItems: 'center',
    marginBottom: 20
  },
  txtJogador: {
    fontSize: 18
  },
  button: {
    width: 100,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FBCE5C', 
    color: '#fff',
    fontWeight: 'bold',
    borderColor: '#fff',
    textAlign: 'center'
 },
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
});
