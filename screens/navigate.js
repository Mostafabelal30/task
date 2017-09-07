
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
TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

var Main = require('./main');
var Splash = require('./splash');
//var My_ads = require('./my_ads');
var Basic = require('./Basic');
//var Test = require('./test');
var Edit = require('./edit');
var Add = require('./add_ads');
//var Detial = require('./ads_detial');
var Login = require('./login');
var Ads_detial = require('./ads_detial');
var Mapscreen = require('./map_screen');
var Follow = require('./follow');
var Company_ads = require('./company_ads');


//const SideMenu = require('react-native-side-menu');
var deviceWidth = Dimensions.get('window').width;

//var Facebook = require('./facebook');
//const nativeImageSource = require('../images/VIEWxxhdpi.png');
export const Stack=StackNavigator({
Splash:{screen:Splash},
Main:{screen:Main},
Basic:{screen:Basic},
Edit:{screen:Edit},
Add:{screen:Add},
Login:{screen:Login},
Mapscreen:{screen:Mapscreen},
Follow:{screen:Follow},
Ads_detial:{screen:Ads_detial},
Company_ads:{screen:Company_ads},

})

export default class loginIos extends Component {

constructor(props) {
        super(props); 
//       this.showBookDetail = this.showBookDetail.bind(this);
    }


  render() {
            const { navigation } = this.props;

    return (

      <Stack navigation={ navigation }/>
              
        );



  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
     thumbnail: {
        width: 100,
        height: 81,
        marginRight: 10,
        marginBottom: 10
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    separator: {
       height: 1,
       backgroundColor: '#dddddd'
   },
   top:
   {
      paddingTop: 10
   },
    bigContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop:20
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
    top: 20,
    left:0,

  },
 
  image:
  {
     position: 'absolute',
    zIndex: 10,
    top: 0,
    right:50,
    padding: 10,
  },
});

AppRegistry.registerComponent('Demo', () => loginIos);
module.exports = loginIos;