import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput

} from "react-native";

import { Button } from 'react-native-elements';


class MainScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerOne}></View>
            
                <View style={styles.container}>
                    <Image style={styles.logo} source={require('../assets/3.jpg')} />
                    <Text style={{ paddingTop: 20, color: 'purple', fontSize: 20, fontWeight: 'bold' }}>Friend Recommendation</Text>
                </View>
               
                <View style={styles.containerThree}>
                    <Text style={styles.text}>Username</Text>
                    <TextInput style={ styles.textInput } placeholder="Enter username" onChangeText={(text) => this.setState({ text })}
                    />
                    <Text style={styles.text}>Password</Text>
                    <TextInput style={ styles.textInput } placeholder="Enter password" onChangeText={(text) => this.setState({ text })}
                    />
                </View>

                <View>
                    <Button buttonStyle={{ width: 300, height: 45, opacity: 9, backgroundColor: "#841584", borderColor: "transparent", borderWidth: 0, borderRadius: 10 }} title="Login" onPress={() => this.props.navigation.navigate('InterestScreen')} />
                    <Button buttonStyle={{ width: 300, height: 45, opacity: 9, backgroundColor: "#0000ff", borderColor: "transparent", borderWidth: 0, borderRadius: 10 }} title="register" onPress={() => this.props.navigation.navigate('InterestScreen')} />

                </View>
            </View>
        );
    }
}
export default MainScreen;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerOne: {
        height: 50
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 800,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerThree: {
        height: 200,
        marginTop: 30
    },
    textInput: {
        width: 300,
        height:40
    },
    text: {
        color: "purple"
    }

});






