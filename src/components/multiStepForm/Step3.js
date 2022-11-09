import React, {Component} from 'react';
import {StyleSheet, TextInput, View, Text, Alert} from 'react-native';

export default class Step3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TextInputName: '',
      TextInputEmail: '',
      TextInputPassword: '',
      TextInputConfirmPassword: '',
      passwordError: '',
      emptyFields: '',
      nameValidationError: '',
      emailValidationError: '',
    };
  }

  //   emptyFieldsError() {
  //     if (
  //       this.state.TextInputName == '' ||
  //       this.state.TextInputEmail == '' ||
  //       this.state.TextInputPassword == '' ||
  //       this.state.TextInputConfirmPassword == ''
  //     ) {
  //       {
  //         this.setState({emptyFields: 'Fields cannot be empty'});
  //       }
  //     } else {
  //       {
  //         this.emailValidation();
  //       }
  //       {
  //         this.setState({emptyFields: ''});
  //       }
  //     }
  //   }

  //   emailValidation() {
  //     const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //     if (email.test(this.state.TextInputEmail)) {
  //       {
  //         this.setState({emailValidationError: ''});
  //       }
  //       {
  //         this.nameValidateMethod();
  //       }
  //     } else {
  //       {
  //         this.setState({emailValidationError: 'Email format is invalid'});
  //       }
  //     }
  //   }

  //   nameValidateMethod() {
  //     const alph = /^[a-zA-Z]+$/;

  //     if (alph.test(this.state.TextInputName)) {
  //       {
  //         this.setState({nameValidationError: ''});
  //       }
  //       {
  //         this.checkPassword();
  //       }
  //     } else {
  //       {
  //         this.setState({
  //           nameValidationError: 'Name must contain only alphabets',
  //         });
  //       }
  //     }
  //   }

  //   checkPassword() {
  //     if (this.state.TextInputPassword == this.state.TextInputConfirmPassword) {
  //       {
  //         this.InsertDataToServer();
  //       }
  //       {
  //         this.setState({passwordError: ''});
  //       }
  //     } else {
  //       this.setState({passwordError: 'Password must be same'});
  //     }
  //   }

  //   InsertDataToServer() {
  //     const {TextInputName} = this.state;
  //     const {TextInputEmail} = this.state;
  //     const {TextInputPassword} = this.state;
  //     const {TextInputConfirmPassword} = this.state;

  //     fetch('http://192.168.2.104:8000/api/signup/user', {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         name: TextInputName,
  //         email: TextInputEmail,
  //         password: TextInputPassword,
  //         confirm_password: TextInputConfirmPassword,
  //       }),
  //     })
  //       .then(response => response.json())
  //       .then(responseJson => {
  //         // Showing response message coming from server after inserting records.
  //         Alert.alert(responseJson);
  //         {
  //           this.login();
  //         }
  //       })

  //       .catch(error => {
  //         console.error(error);
  //       });
  //   }

  //   login() {
  //     Actions.login();
  //   }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'red'}}>{this.state.emptyFields}</Text>

        <TextInput
          style={styles.inputBox}
          placeholder="Address Line 1"
          onSubmitEditing={() => this.emailAddress.focus()}
          onChangeText={text => {
            this.setState({TextInputName: text});
          }}
          //   onBlur={name => this.nameValidateMethod(name, 'username')}
        />

        <Text style={{color: 'red'}}>{this.state.nameValidationError}</Text>

        <TextInput
          style={styles.inputBox}
          placeholder="Address Line 2"
          keyboardType="email-address"
          ref={input => (this.emailAddress = input)}
          onSubmitEditing={() => this.password.focus()}
          onChangeText={text => {
            this.setState({TextInputEmail: text});
          }}
        />

        <Text style={{color: 'red'}}>{this.state.emailValidationError}</Text>

        <TextInput
          style={styles.inputBox}
          placeholder="City"
          secureTextEntry={true}
          ref={input => (this.password = input)}
          onSubmitEditing={() => this.confirmPassword.focus()}
          onChangeText={text => {
            this.setState({TextInputPassword: text});
          }}
        />

        <Text></Text>

        <TextInput
          style={styles.inputBox}
          placeholder="Postcode"
          secureTextEntry={true}
          ref={input => (this.confirmPassword = input)}
          onChangeText={text => {
            this.setState({TextInputConfirmPassword: text});
          }}
          //   onBlur={() => this.checkPassword()}
        />

        <Text style={{color: 'red'}}>{this.state.passwordError}</Text>

        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => this.emptyFieldsError()}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity> */}

        {/* <View style={styles.login}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <TouchableOpacity onPress={this.login}>
            <Text style={styles.loginTextButton}>Login</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dcf2f2',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputBox: {
    width: 300,
    backgroundColor: '#80CBC4',
    margin: 12,
    padding: 10,
    borderRadius: 12,
  },

  button: {
    width: 300,
    backgroundColor: '#80CBC4',
    margin: 12,
    padding: 10,
    borderRadius: 12,
  },

  buttonText: {
    color: 'blue',
    marginLeft: 105,
    fontSize: 20,
    fontWeight: '500',
  },

  login: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  loginText: {
    fontSize: 14,
    marginRight: 7,
  },
  loginTextButton: {
    fontSize: 18,
    color: '#C51162',
  },
});
