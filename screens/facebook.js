/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
const {
  LoginButton,
  AccessToken,
    GraphRequest,
  GraphRequestManager,
} = FBSDK;

import FBSDK ,{LoginManager,} from 'react-native-fbsdk';
/*
login(){
  LoginManager.logInWithReadPermissions


}*/


export default class Hello extends Component {
  render() {
    return (
   /*   <View style={styles.container}>
      <TouchableOpacity onPress={this.login}>
        <Text>
      login to facebook
      </Text>
      </TouchableOpacity>
      </View>*/
 <View style={styles.container}>
        <LoginButton
        publishPermissions={["publish_actions"]}
          //permissions={["email","user_friends"]}
         // readPermissions={["email","public_profile"]}
          onLoginFinished={
            (error, result) => {
              
              if (error) {
                alert("Login failed with error: " + result.error);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {

                 AccessToken.getCurrentAccessToken().then((data) => {
                     const { accessToken } = data;
                        alert("Login was successful with permissions: "+accessToken  )
                        console.log(accessToken)

                              const responseInfoCallback = (error, result) => {
                if (error) {
                  console.log(error)
                  alert('Error fetching data: ' + error.toString());
                } else {
                  console.log(result)
                  alert('Success fetching data: ' + result.name

                  );
                }
              }


                        let req = new GraphRequest('/me', {
                                                        accessToken: accessToken,
                                                           httpMethod: 'GET',
                                                            version: 'v2.5',
                                                            parameters: {
                                                            fields: {
                                                          string: 'name,first_name,middle_name,last_name'
                                                                        }
                                                                   }
                                                      }, responseInfoCallback);


                                 new GraphRequestManager().addRequest(req).start();


                          //  alert("Login was successful with permissions: "+  )

                          console.log(req);

                    // initUser(accessToken)
                      //alert("Login was successful with permissions: "+accessToken  )
                     })
             
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>

      </View>


    );
  }

  initUser(token) {
  fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
  .then((response) => response.json())
  .then((json) => {
    console.log("asd")
    // Some user object has been set up somewhere, build that user here
    user.name = json.name
    user.id = json.id
    user.user_friends = json.friends
    user.email = json.email
    user.username = json.name
    user.loading = false
    user.loggedIn = true
    user.avatar = setAvatar(json.id)

    

  },
  alert("Login was successful with permissions: "+ user.name   )
  )
  .catch(() => {
    alert("Login was successful with permissions: "  )
  })
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Hello', () => Hello);
