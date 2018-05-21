import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { StackNavigator } from 'react-navigation';
import CheckBox from 'react-native-checkbox';


class personalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
    this.state = { date: "2016-05-15" }
  }

  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <View style={{ padding: 10}}>
            <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ color: 'purple', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 'bold'}}>Registration Form</Text>
            </View>
            <Text style={styles.inputLabels}>First Name</Text>
            <TextInput placeholder="Enter first name here"
            style={styles.inputTextStyle}
            onChangeText={(text) => this.setState({ text })}
            />
            <Text style={styles.inputLabels}>Last Name</Text>
            <TextInput placeholder="Enter last name"
            style={styles.inputTextStyle}
            onChangeText={(text) => this.setState({ text })}
            />
             <Text style={styles.inputLabels}>Username</Text>
            <TextInput placeholder="Enter username"
            style={styles.inputTextStyle}
            onChangeText={(text) => this.setState({ text })}
            />
            <Text style={styles.inputLabels}>Password</Text>
            <TextInput placeholder="Enter password"
            style={styles.inputTextStyle}
            onChangeText={(text) => this.setState({ text })}
            />

            <Text style={styles.inputLabels}>Confirm Password</Text>
            <TextInput placeholder="Enter confirm password"
            style={styles.inputTextStyle}
            onChangeText={(text) => this.setState({ text })}
            />

            <Text style={styles.inputLabels}>Email</Text>
            <TextInput placeholder="Enter email"
            style={styles.inputTextStyle}
            onChangeText={(text) => this.setState({ text })}
            />
            <Text style={styles.inputLabels}>Address</Text>
            <TextInput placeholder="Enter address"
            style={styles.inputTextStyle}
            onChangeText={(text) => this.setState({ text })}
            />

            <Text style={styles.inputLabels}>DOB</Text>
            <DatePicker
            style={{ width: 200 }}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="1990-05-01"
            maxDate="2018-04-09"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
                dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
                },
                dateInput: {
                marginLeft: 36
                }
                // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => { this.setState({ date: date }) }}
            />

            <Text style={styles.inputLabels}>Your Description</Text>
            <TextInput
            style = {styles.inputTextStyle}
            multiline={true}
            numberOfLines={4}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text} />

            <Text style={styles.inputLabels}>Interest</Text> 
            <CheckBox
            label='Java'
            onChange={(checked) => console.log('I am checked', checked)}
            />
            <CheckBox
            label='JavaScript'
            onChange={(checked) => console.log('I am checked', checked)}
            />
            <CheckBox
            label='Php'
            onChange={(checked) => console.log('I am checked', checked)}
            />
            <CheckBox
            label='Android'
            onChange={(checked) => console.log('I am checked', checked)}
            />

            <Button
            onPress = {() => this.props.navigation.navigate('HomeScreen')}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />
        </View>
        </ScrollView>
      </View>
    )
  }
}

export default personalInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputLabels: {
    color: 'purple',
    alignItems: 'flex-start',
  },

  inputTextStyle: {
    height: 40,
    width: 250,
//     justifyContent: 'center',
// alignItems: 'center',
  }
});



