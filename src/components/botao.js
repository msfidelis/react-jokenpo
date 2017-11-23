import React, { Component } from "react";
import { Platform, View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

class Botao extends Component {

    render() {
        return(
            <View>
                <TouchableOpacity onPress={this.props.acao} >
                    <Text style = {styles.button}>
                        {this.props.titulo}
                    </Text>
                </TouchableOpacity> 
            </View>
        )
    }

}

const styles = StyleSheet.create({
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
});

export default Botao;