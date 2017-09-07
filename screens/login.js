
      /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//var BookDetail = require('./Detial');
import React, { Component } from 'react';
import {
 AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

//var Login = require('./login');
var Edit = require('./edit');
//var Main = require('./main');
//var Add_ads = require('./add_ads');
//var My_ads = require('./my_ads');
//import ModalDropdown from 'react-native-modal-dropdown';
/*
const DropDown = require('react-native-dropdown');
const {
  Select,
  Option,
  OptionList,
  updatePosition
} = DropDown;*/
//var Ads_detial = require('./ads_detial');
import SideMenu from 'react-native-side-menu';
import Menu from './MenuTest';
var deviceWidth = Dimensions.get('window').width;
 
const {
  LoginButton,
  AccessToken,
    GraphRequest,
  GraphRequestManager,
} = FBSDK; 

import FBSDK ,{LoginManager,} from 'react-native-fbsdk';


export default class Detial extends Component {

  constructor(props) {
    super(props);

  //this.showBookDetail = this.showBookDetail.bind(this);
}
 static navigationOptions = {
    title: 'Welcome',
header: null
  };

 /*  componentDidMount() {
    updatePosition(this.refs['SELECT1']);
    updatePosition(this.refs['OPTIONLIST']);
  }

  _getOptionList() {
    return this.refs['OPTIONLIST'];
  }

  
  _canada(province) {

	this.setState({
      ...this.state,
      canada: province
    });
  }*/
state = {
    isOpen: false,
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

  onMenuItemSelected = () => {
    this.setState({
      isOpen: false,
    });
  }



   back(){
     this.props.navigator.pop();
     return true;
  }

  handleFacebookLogin () {
    LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends']).then(
      function (result) {
        if (result.isCancelled) {
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
      },
      function (error) {
        console.log('Login fail with error: ' + error)
      }
      
    )
  }


    render() {

    const menu = <Menu navigation={this.props.navigation}  onItemSelected={this.onMenuItemSelected}/>;

    return (

<View style={styles.bigContainer}>
        <View  style={styles.welcome}>

          <TouchableOpacity 
                    activeOpacity={ 0.75 }
                     onPress={() => this.toggle()}
                     style={styles.image}
                 >
             <Image  source={{uri: "menu_icn"}}
            //source={require('../images/menu_icn.png')} 
            style={{width: 32, height: 32}} />

           
</TouchableOpacity>

       <Text
          style={styles.navTitle}>
          دخول
        </Text>

<TouchableOpacity 
                    activeOpacity={ 0.75 }
                    //navigator={this.props.navigator}
                     onPress={() => this.props.navigation.goBack()}
                     style={styles.back}

                 >
             <Image  source={{uri: "backicon"}}
            //source={require('../images/backIcon.png')}
             style={{width: deviceWidth*.08, height: 50}} />

</TouchableOpacity>
        
      </View>
      <SideMenu
      navigator={this.props.navigator}
        menu={menu}
        openMenuOffset={deviceWidth/2}
        isOpen={this.state.isOpen}
        menuPosition='right'
        onChange={(isOpen) => this.updateMenuState(isOpen)}>

   <View style={styles.container}>
          <Text style={styles.login}>تسجيل دخول عن طريق</Text>



          <TouchableOpacity 
         onPress={() => this.handleFacebookLogin()} 
  activeOpacity={ 0.75 }
  //style={ styles.item }
>
           <Image
             style={styles.thumbnail}
             resizeMode='contain'
             source={{uri: "fbhdpi"}}
        //source={require('../images/fbhdpi.png')}
      />



</TouchableOpacity>
      <TouchableOpacity 
  activeOpacity={ 0.75 }
 // style={ styles.item }
>
         <Image
             style={styles.thumbnail}
             resizeMode='contain'
             source={{uri: "twhdpi"}}
        //source={require('../images/twhdpi.png')}
      />
</TouchableOpacity>
      <TouchableOpacity 
  activeOpacity={ 0.75 }
 // style={ styles.item }
>
         <Image
             style={styles.thumbnail}
             resizeMode='contain'
             source={{uri: "gohdpi"}}
       // source={require('../images/gohdpi.png')}
      />
</TouchableOpacity>
      </View>     
      </SideMenu>
      </View> 
        );
  }


}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    //flexDirection: 'row',
    paddingTop: 10,
    padding:10
  },
     thumbnail: {
        width: deviceWidth/1.5,
        height: deviceWidth/5,
      marginRight: 10,
      marginBottom: 10,
      marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
     //  borderRadius:deviceWidth/10,
    },
    thumbnailFacebook:
    {
     width: deviceWidth/1.5,
     height: deviceWidth/7,
      marginRight: 10,
      marginBottom: 10,
      marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    },
    login:{
      fontSize: 30,
      padding:10
    },
     bigContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  //  paddingTop:20
  },
  welcome: {
    //fontSize: 20,
    //textAlign: 'center',
    width:deviceWidth,
    height:50,
     backgroundColor:'#FF5B1B',
    //margin: 10,
    position: 'absolute',
    zIndex: 10,
    top: 0,
    left:0,

  },
 
  image:
  {
     position: 'absolute',
    zIndex: 10,
    top: 0,
    right:20,
    padding: 10,
  },
    navTitle:
{
   width:deviceWidth*.4,
    position: 'absolute',
    zIndex: 10,
    top: 10,
    right:deviceWidth*.3,
    fontSize:20,
    color:'#ffffff',
    textAlign:'center',

//padding: 20,
},

  back:
  {
    width:deviceWidth*.2,
     position: 'absolute',
   // zIndex: 20,
    left:0,
    top:-10,
 // alignItems:'flex-end',
    padding: 10,
    
  },
});

//AppRegistry.registerComponent('Demo', () => Demo);
module.exports = Detial;