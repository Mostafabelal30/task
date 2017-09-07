
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
  Image,
  TouchableHighlight,
  NavigatorIOS,
  TouchableOpacity,
  Linking,
  Dimensions
} from 'react-native';
const SideMenu = require('react-native-side-menu');
const Menu = require('./MenuTest');
var deviceWidth = Dimensions.get('window').width;
//var My_ads = require('./my_ads');
var Main = require('./main');
//var Edit = require('./edit');


/*
const DropDown = require('react-native-dropdown');
const {
  Select,
  Option,
  OptionList,
  updatePosition
} = DropDown;*/

export default class Detial extends Component {

/*   constructor(props) {
    super(props);

    this.state = {
      canada: ''
    };
  }

  componentDidMount() {
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

  onMenuItemSelected = (item) => {
    this.setState({
      isOpen: false,
    });
  }

    render() {

  const menu = <Menu navigator={this.props.navigator}   onItemSelected={this.onMenuItemSelected} />;
//var menu = <Menu navigator={this.props.navigator} onItemSelected={this.onMenuItemSelected}/>
  return (

<View style={styles.bigContainer}>
        <View  style={styles.welcome}>

          <TouchableOpacity 
                    activeOpacity={ 0.75 }
                     onPress={() => this.toggle()}
                     style={styles.image}
                 >
             <Image
            source={require('../images/menu_icn.png')} style={{width: 32, height: 32}} />

             <Text
          style={styles.navTitle}>
          تابعنا
        </Text>

</TouchableOpacity>
        
      </View>
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        openMenuOffset={deviceWidth/2}
        menuPosition='right'
        onChange={(isOpen) => this.updateMenuState(isOpen)}>

      <View style={styles.container}>


              

       <View style={styles.row}>
                  <TouchableHighlight onPress={() => Linking.openURL('https://www.facebook.com')} underlayColor='#dddddd'>
                <Image
             style={styles.thumbnail}
             //source={{uri: "images"}}
        source={require('../images/Layer 64mdpi.png')}
        resizeMode='contain'
      />
                            </TouchableHighlight >

      <View style={styles.rightContainer}>
<Text style={styles.title}>تابعنا علي</Text>
           </View>
       
           </View>

             <View style={styles.separator} >
             </View>


       <View style={styles.row}>
         <TouchableHighlight onPress={() => Linking.openURL('https://twitter.com/twitter?lang=en')} underlayColor='#dddddd'>
            <Image
             style={styles.thumbnail}
             //source={{uri: "images"}}
        source={require('../images/twitter-bird-free-images-at-clker-com-vector-clip-art-online-4M8Z11-clipartmdpi.png')}
        resizeMode='contain'
      />
        </TouchableHighlight >
      <View style={styles.rightContainer}>
<Text style={styles.title}>تابعنا علي</Text>     
      </View>
       
           </View>
                    

             <View style={styles.separator} ></View>



       <View style={styles.row}>
     <TouchableHighlight onPress={() => Linking.openURL('https://www.instagram.com/?hl=en')} underlayColor='#dddddd'>
          <Image
             style={styles.thumbnail}
             //source={{uri: "images"}}
        source={require('../images/Instagram_logo_2016.svgmdpi.png')}
        resizeMode='contain'
      />
        </TouchableHighlight >
      <View style={styles.rightContainer}>
           <Text style={styles.title}>تابعنا علي</Text>
           </View>
       
           </View>
                    

             <View style={styles.separator} ></View>


       <View style={styles.row}>
            <TouchableHighlight onPress={() => Linking.openURL('https://plus.google.com')} underlayColor='#dddddd'>
                <Image
             style={styles.thumbnail}
             //source={{uri: "images"}}
        source={require('../images/google-plus-logo-4mdpi.png')}
        resizeMode='contain'
      />
       </TouchableHighlight >
      <View style={styles.rightContainer}>
<Text style={styles.title}>تابعنا علي</Text>
           </View>
       
           </View>
                     





             <View style={styles.separator} ></View>

                 </View>

                 </SideMenu>
                 </View>

     );
  }



/*  showBookDetail() {
       this.props.navigator.push({
           title: 'Country',
           component: City
           //passProps: {book}
       });
   }*/
}

const styles = StyleSheet.create({
bigcontainer:{
  flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop:20
},
row:{
      flexDirection: 'row',
      marginTop:20,
    },
thumbnail:{
      width: 50,
        height: 70,
        marginRight:50,
},
 rightContainer: {
    //padding:10,
    paddingLeft:50,
    paddingTop:25,
     //marginRight:-100
},
title:{
    fontSize:30,
  
} ,
 separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
       bigContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#F5FCFF',
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
    top: 20,
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
  container:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    //flexDirection: 'row',
    paddingTop: 10,
    padding:10
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
});

//AppRegistry.registerComponent('Demo', () => Demo);
module.exports = Detial;