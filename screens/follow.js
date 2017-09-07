
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
  TouchableOpacity,
  Linking
} from 'react-native';

//var Login = require('./login');
//var Edit = require('./edit');
var Main = require('./main');
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
/* 
const {
  LoginButton,
  AccessToken,
    GraphRequest,
  GraphRequestManager,
} = FBSDK; */

//import FBSDK ,{LoginManager,} from 'react-native-fbsdk';


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
          تابعنا
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

                 <View style={styles.row}>
                  <TouchableHighlight onPress={() => Linking.openURL('https://www.facebook.com')} underlayColor='#dddddd'>
                <Image
             style={styles.thumbnail}
             source={{uri: "layer64mdpi"}}
        //source={require('../images/Layer 64mdpi.png')}
        resizeMode='contain'
      />
                            </TouchableHighlight >

      <View style={styles.rightContainer}>
<Text style={styles.title}>تابعنا علي</Text>
           </View>
       
           </View>


       <View style={styles.row}>
         <TouchableHighlight onPress={() => Linking.openURL('https://twitter.com/twitter?lang=en')} underlayColor='#dddddd'>
            <Image
             style={styles.thumbnail}
             source={{uri: "twitter"}}
        //source={require('../images/twitter-bird-free-images-at-clker-com-vector-clip-art-online-4M8Z11-clipartmdpi.png')}
        resizeMode='contain'
      />
        </TouchableHighlight >
      <View style={styles.rightContainer}>
<Text style={styles.title}>تابعنا علي</Text>     
      </View>
       
           </View>



            <View style={styles.row}>
     <TouchableHighlight onPress={() => Linking.openURL('https://www.instagram.com/?hl=en')} underlayColor='#dddddd'>
          <Image
             style={styles.thumbnail}
             source={{uri: "instagram"}}
       // source={require('../images/Instagram_logo_2016.svgmdpi.png')}
        resizeMode='contain'
      />
        </TouchableHighlight >
      <View style={styles.rightContainer}>
           <Text style={styles.title}>تابعنا علي</Text>
           </View>
       
           </View>


            <View style={styles.row}>
            <TouchableHighlight onPress={() => Linking.openURL('https://plus.google.com')} underlayColor='#dddddd'>
                <Image
             style={styles.thumbnail}
             source={{uri: "googleplus"}}
       // source={require('../images/google-plus-logo-4mdpi.png')}
        resizeMode='contain'
      />
       </TouchableHighlight >
      <View style={styles.rightContainer}>
<Text style={styles.title}>تابعنا علي</Text>
           </View>
       
           </View>
                    




           



         
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
    row:{
      flexDirection: 'row',
      marginTop:20,
    },
thumbnail:{
      width: deviceWidth*.25 ,
      height: deviceWidth*.2,
      marginRight:deviceWidth*.1,
},
 rightContainer: {
    //padding:10,
    paddingLeft:deviceWidth*.1,
    paddingTop:deviceWidth*.05,
     //marginRight:-100
},
title:{
    fontSize:deviceWidth*.08,
  
} ,

   bigContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
   // paddingTop:20
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