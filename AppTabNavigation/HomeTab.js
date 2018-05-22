import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator,
} from "react-native";


import { List, ListItem, SearchBar } from "react-native-elements";
import { Icon } from "native-base";

class HomeTab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            error: null,
            refreshing: false,
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }


    makeRemoteRequest = () => {
        var ngrokVar = 'cdf827de.ngrok.io';
        const url = 'http://'+ ngrokVar +'/FriendRecommendBranch/FriendRecommendation/api/public/api/customers';
        this.setState({ loading: true });

        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res,
                    error: res.error || null,
                    loading: false,
                    refreshing: false,
                });
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    };


    handleRefresh = () => {
        this.setState(
            {
                page: 1,
                seed: this.state.seed + 1,
                refreshing: true
            },
            () => {
                this.makeRemoteRequest();
            }
        );
    };

    handleLoadMore = () => {
        this.setState(
            {
                page: this.state.page + 1
            },
            () => {
                this.makeRemoteRequest();
            }
        );
    };

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "14%"
                }}
            />
        );
    };

    renderHeader = () => {
        return <SearchBar placeholder="Type Here..." lightTheme round />;
    };

    renderFooter = () => {
        if (!this.state.loading) return null;

        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}
            >
                <ActivityIndicator animating size="large" />
            </View>
        );
    };



    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{ color: tintColor }} />
        )
    }

    render() {
        return (
                <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
                <FlatList
                  data={this.state.data}
                  renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.email}</Text>
                        <Text>{item.description}</Text>
                        <Text>{item.dob}</Text>
                    </View>
                    // <ListItem
                    //   //roundAvatar
                    //   title={item.name}
                    //   subtitle={item.email}
                    //  // avatar={{ uri: item.picture.thumbnail }}
                    //   containerStyle={{ borderBottomWidth: 0 }}
                    // />
                  )}
                  keyExtractor={item => item.email}
                  ItemSeparatorComponent={this.renderSeparator}
                //   ListHeaderComponent={this.renderHeader}
                //   ListFooterComponent={this.renderFooter}
                //   onRefresh={this.handleRefresh}        
                //   refreshing={this.state.refreshing}
                //   onEndReached={this.handleLoadMore}
                //   onEndReachedThreshold={50}
                />
              </List>
        );
    }
}

export default HomeTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});