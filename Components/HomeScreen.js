import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform
} from "react-native";

import ProfileTab from '../AppTabNavigation/ProfileTab'; 
import HomeTab from '../AppTabNavigation/HomeTab';
import ChatTab from '../AppTabNavigation/ChatTab';

import {TabNavigator} from 'react-navigation';
import { Icon } from "native-base";

class MainScreen extends Component {

    render() {
        return(
                <AppTabNavigation/>
        );
    }
}

export default MainScreen;

const AppTabNavigation = TabNavigator ({
    ProfileTab: {
        screen: ProfileTab
    },
    HomeTab: {
        screen: HomeTab
    },
    
    ChatTab: {
        screen: ChatTab
    }
  
},{
    animationEnabled:true,
    swipeEnabled:true,
    tabBarPosition:"bottom",

    tabBarOptions: {
        style: {
            ...Platform.select({
                android:{
                    backgroundColor: "white"
                }
            })
        },
        activeTintColor: "#ff69b4",
        inactiveTintColor: '#d1cece',
        showLabel: false,
        showIcon: true
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});