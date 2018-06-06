import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { StackNavigator } from 'react-navigation';
import CheckBox from 'react-native-checkbox';


class personalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: 'Useless Placeholder',
      firstName: '',
      firstNameValidate: false,
      lastName: '',
      lastNameValidate: false,
      username: '',
      usernameValidate: false,
      password: '',
      passwordValidate: false,
      passwordConfirm: '',
      passwordConfirmValidate: false,
      email: '',
      emailValidate: false,
      address: '',
      addressValidate: false,
      date: '',
      dateValidate: false,
      description: '',
      descriptionValidate: false,

    };
  }

  validateInput(inputValue, type){
    if(type=='firstName'){
      regexalphabet=/^[a-zA-Z]+$/

      if(regexalphabet.test(inputValue)){
        this.setState({
          firstNameValidate: true,
          firstName: inputValue,
        })
      }
      else{
        this.setState({
          firstNameValidate: false,
          firstName: '',
        })
      }
    }
    
    if(type=='lastName'){
      regexalphabet=/^[a-zA-Z]+$/

      if(regexalphabet.test(inputValue)){
        this.setState({
          lastNameValidate: true,
          lastName: inputValue,
        })
      }
      else{
        this.setState({
          lastNameValidate: false,
          lastName: '',
        })
      }
    }
 
    if(type=='username'){
      regexalphabet=/^[a-zA-Z0-9_.-]*$/

      if(regexalphabet.test(inputValue)){
        this.setState({
          usernameValidate: true,
          username: inputValue,
        })
      }
      else{
        this.setState({
          usernameValidate: false,
          username: '',
        })
      }
    }

    if(type=='password'){
      regexalphabet=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

      if(regexalphabet.test(inputValue)){
        this.setState({
          passwordValidate: true,
          password: inputValue,
        })
      }
      else{
        this.setState({
          passwordValidate: false,
          password: '',
        })
      }
    }

    if (type='email'){
      regexemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(regexemail.test(inputValue)){
        this.setState({
          emailValidate: true,
          email: inputValue,
        })
      }
      else(
        this.setState({
          emailValidate: false,
          email: '',
        })
      )
    }

        
    if(type=='address'){
      regexalphabet=/^[a-zA-Z0-9,.!? ]*$/

      if(regexalphabet.test(inputValue)){
        this.setState({
          addressValidate: true,
          address: inputValue,
        })
      }
      else{
        this.setState({
          addressValidate: false,
          address: '',
        })
      }
    }
         
    if(type=='DOB'){
      regexalphabet=/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/

      if(regexalphabet.test(inputValue)){
        this.setState({
          dateValidate: true,
          date: inputValue,
        })
      }
      else{
        this.setState({
          dateValidate: false,
          date: '',
        })
      }
    }
         
    if(type=='description'){
      regexalphabet=/^[a-zA-Z]+$/

      if(regexalphabet.test(inputValue)){
        this.setState({
          descriptionValidate: true,
          description: inputValue,
        })
      }
      else{
        this.setState({
          descriptionValidate: false,
          description: '',
        })
      }
    }
 
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
            onChangeText={(inputValue) => this.validateInput(inputValue, 'firstName')}
            />
            <Text>{this.state.firstName}</Text>

            <Text style={styles.inputLabels}>Last Name</Text>
            <TextInput placeholder="Enter last name"
            style={styles.inputTextStyle}
            onChangeText={(inputValue) => this.validateInput(inputValue, 'lastName')}
            />
            <Text>{this.state.lastName}</Text>

             <Text style={styles.inputLabels}>Username</Text>
            <TextInput placeholder="Enter username"
            style={styles.inputTextStyle}
            onChangeText={(inputValue) => this.validateInput(inputValue, 'username')}
            />
            <Text>{this.state.username}</Text>

            <Text style={styles.inputLabels}>Password</Text>
            <TextInput placeholder="Enter password (Minimum 8 characters, 1 letter and 1 number)"
            secureTextEntry={true}
            style={styles.inputTextStyle}
            onChangeText={(inputValue) => this.validateInput(inputValue, 'password')}
            />
            <Text>{this.state.password}</Text>

            <Text style={styles.inputLabels}>Confirm Password</Text>
            <TextInput placeholder="Enter confirm password"
            secureTextEntry={true}
            style={styles.inputTextStyle}
            onChangeText={(inputValue) => this.validateInput(inputValue, 'password')}
            />
            <Text>{this.state.passwordConfirm}</Text>

            <Text style={styles.inputLabels}>Email</Text>
            <TextInput placeholder="Enter email"
            style={styles.inputTextStyle}
            onChangeText={(inputValue) => this.validateInput(inputValue , 'email')}
            />
            <Text>{this.state.email}</Text>


            <Text style={styles.inputLabels}>Address</Text>
            <TextInput placeholder="Enter address"
            style={styles.inputTextStyle}
            onChangeText={(inputValue) => this.validateInput(inputValue, 'address')}
            />
            <Text>{this.state.address}</Text>

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
            onDateChange={(inputValue) => { this.validateInput(inputValue , 'DOB') }}
            />
            <Text>{this.state.date}</Text>

            <Text style={styles.inputLabels}>Your Description</Text>
            <TextInput
            style = {styles.inputTextStyle}
            multiline={true}
            numberOfLines={4}
            onChangeText={(inputValue) => this.validateInput(inputValue , 'description')}/>
            <Text>{this.state.description}</Text>

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



