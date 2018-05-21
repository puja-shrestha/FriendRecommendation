import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Icon } from "native-base";

class ChatTab extends Component {

    static navigationOptions = {


        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{ color: tintColor }} />
        )
    }

    render() {
        return (
          <View>
            
            <Text>Puja Shrestha</Text>
            <Text>Luckey Sherpa</Text>
            <Text>Thinley Sherpa</Text>
            <Text>Pasang Lhamu Sherpa</Text>
            <Text>Speakers</Text>
          </View>
        );
    }
}

export default ChatTab;

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
 });