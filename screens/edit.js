
import React, { Component } from 'react';
import {
   StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  Linking
} from 'react-native';

var Add_ads = require('./add_ads');

//var Ads_detial = require('./ads_detial');
var Picker = require('./modalPicker');

//var Ads_detial = require('./ads_detial');
import SideMenu from 'react-native-side-menu';
import Menu from './MenuTest';
var deviceWidth = Dimensions.get('window').width;
var deviceHight = Dimensions.get('window').height;


import Popup from 'react-native-popup';



export default class Detial extends Component {

  constructor(props) {
    super(props);

}

 static navigationOptions = {
    title: 'Welcome',
header: null
  };

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


twitterPopup() {
        this.popup.confirm({
            title: 'اضف حسابك',
            content:[<View style={styles.form}>
            <TextInput style={styles.latitude} placeholder="اضف حساب تويتر الخاص بك" placeholderTextColor="gray" />
            </View>],
            ok: {
                text: 'حفظ',
                style: {
                    color: 'green',
                    fontWeight: 'bold'
                },
                callback: () => {
                   // this.popup.alert('Belal u 😬');
                }
            },
         cancel: {
                text: 'الغاء',
                style: {
                    color: 'red'
                },
                callback: () => {
                   // this.popup.alert('bad man 👿');
                }
            }
        });
    }
    facebookPopup() {
        this.popup.confirm({
            title: 'اضف حسابك',
            content:[<View style={styles.form}>
            <TextInput style={styles.latitude} placeholder="اضف حساب فيسبوك الخاص بك" placeholderTextColor="gray" />
            </View>],
            ok: {
                text: 'حفظ',
                style: {
                    color: 'green',
                    fontWeight: 'bold'
                },
                callback: () => {
                   // this.popup.alert('Belal u 😬');
                }
            },
         cancel: {
                text: 'الغاء',
                style: {
                    color: 'red'
                },
                callback: () => {
                   // this.popup.alert('bad man 👿');
                }
            }
        });
    }


     youtubePopup() {
        this.popup.confirm({
            title: 'اضف حسابك',
            content:[<View style={styles.form}>
            <TextInput style={styles.latitude} placeholder="اضف حساب اليوتيوب الخاص بك" placeholderTextColor="gray" />
            </View>],
            ok: {
                text: 'حفظ',
                style: {
                    color: 'green',
                    fontWeight: 'bold'
                },
                callback: () => {
                   // this.popup.alert('Belal u 😬');
                }
            },
         cancel: {
                text: 'الغاء',
                style: {
                    color: 'red'
                },
                callback: () => {
                   // this.popup.alert('bad man 👿');
                }
            }
        });
    }

    instgramPopup() {
        this.popup.confirm({
            title: 'اضف حسابك',
            content:[<View style={styles.form}>
            <TextInput style={styles.latitude} placeholder="اضف حساب الانستجرام الخاص بك" placeholderTextColor="gray" />
            </View>],
            ok: {
                text: 'حفظ',
                style: {
                    color: 'green',
                    fontWeight: 'bold'
                },
                callback: () => {
                   // this.popup.alert('Belal u 😬');
                }
            },
         cancel: {
                text: 'الغاء',
                style: {
                    color: 'red'
                },
                callback: () => {
                   // this.popup.alert('bad man 👿');
                }
            }
        });
    }


   back(){
     this.props.navigator.pop();
      return true;
  }
   _confirmTest() {
        this.popup.confirm({
            title: 'hello confirm',
            content: [<Text>asssss</Text>],
            ok: {
                text: 'yes',
                style: {
                    color: 'green',
                    fontWeight: 'bold'
                },
                callback: () => {
                    this.popup.alert('thank u 😬');
                }
            },
            cancel: {
                text: 'no',
                style: {
                    color: 'red'
                },
                callback: () => {
                    this.popup.alert('bad man 👿');
                }
            }
        });
    }


    render() {

    const menu = <Menu navigation={this.props.navigation} onItemSelected={this.onMenuItemSelected}/>;

    return (
<View style={styles.bigContainer}>
  <View  style={styles.welcome}>

          <TouchableOpacity 
                    activeOpacity={ 0.75 }
                     onPress={() => this.toggle()}
                     style={styles.image}
                 >
             <Image
            source={{uri: 'menu_icn'}} style={{width: 32, height: 32}} />

</TouchableOpacity>

     <Text
          style={styles.navTitle}>
          تعديل البيانات
        </Text>


<TouchableOpacity 
                    activeOpacity={ 0.75 }
                    //navigator={this.props.navigator}
                     onPress={() => this.props.navigation.goBack()}
                     style={styles.back}

                 > 
                 
                 <Text
          style={styles.Done}>
          حفظ
        </Text>

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
       <ScrollView style={styles.scroll}>


 <Picker/>
         <View style={styles.bigDiv} >
            <TextInput style={styles.name} underlineColorAndroid="transparent" placeholder="احمد محمد" placeholderTextColor="gray" />

        <TextInput multiline={true} style={styles.description} underlineColorAndroid="transparent" placeholder="احمد محمد" placeholderTextColor="gray"/>
          <Text style={styles.account}>حساباتي </Text>
          <View style={styles.social}>

                  <TouchableOpacity 
                    activeOpacity={ 0.75 }
                    onPress={this.twitterPopup.bind(this)}                   
                    style={ styles.item }>
             <Image
             style={styles.thumbnail}
             resizeMode='contain'
        source={{uri: 'layer798'}}
      />
</TouchableOpacity>

    <TouchableOpacity 
                    activeOpacity={ 0.75 }
                    onPress={this.facebookPopup.bind(this)}
                    style={ styles.item }>
                    
             <Image
             style={styles.thumbnail}
             resizeMode='contain'
        source={{uri: 'layer799i'}}
      />
</TouchableOpacity>

    <TouchableOpacity 
                    activeOpacity={ 0.75 }
                    onPress={this.instgramPopup.bind(this)}
                    style={ styles.item }>
             <Image
             style={styles.thumbnail}
             resizeMode='contain'
         source={{uri: 'layer800'}}
      />
</TouchableOpacity>

    <TouchableOpacity 
                    activeOpacity={ 0.75 }
                    onPress={this.youtubePopup.bind(this)}
                    style={ styles.item }>
             <Image
             style={styles.thumbnail}
             resizeMode='contain'
       source={{uri: 'youtubeicon'}}
      />
</TouchableOpacity>

          </View>

 </View>
</ScrollView>

      </View> 
      </SideMenu> 
          <Popup   ref={popup => this.popup = popup }/>
      </View>  
        );
  }

}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#ffffff',
   padding:10
  },

     thumbnail: {
        width: deviceWidth*.1,
        height:deviceWidth*.1,
      marginRight: deviceWidth*.05,
      marginTop: 10,
    },
    account:{
      fontSize: deviceWidth*.05,
      marginLeft:deviceWidth*.52,
      color: '#656565',
      paddingTop:10
    },
    social:{
        flexDirection: 'row',
        paddingTop:10        

    },
    name:
    {
        width:deviceWidth/1.1,
        height:deviceHight*.06,
        alignItems: 'center',
        padding:10,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#656565',
        marginTop:20,
        textAlign :'right',
        fontSize:deviceWidth*.04
    },
    description:
    {
        width:deviceWidth/1.1,
        height:deviceWidth*.25,
        alignItems: 'center',
        padding:10,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#656565',
        marginTop:30,
        textAlign :'right',
        fontSize:deviceWidth*.05
    },
        bigContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  //  paddingTop:20
  },
  welcome: {
    width:deviceWidth,
    height:50,
     backgroundColor:'#FF5B1B',
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
},
  latitude:{

    width:deviceWidth*.7,
    height:30,
    borderWidth:1,
    borderRadius:3,
    textAlign:'center'
  },
  form:{
   // flex:1,
    alignItems:'center',
    justifyContent:'center',
  width:deviceWidth*.7,
   height:30,
  },
    bigDiv:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:deviceWidth*.02
  },
  scroll:
  {
   flex:1,
    top: 20,
    paddingTop:70
    },
      back:
  {
    width:deviceWidth*.2,
     position: 'absolute',
    left:0,
    top:-10,
  alignItems:'center',
    padding: 10,
    
  },
  Done:
  {
    fontSize:18,
    color:'#333',
    paddingTop:15,
    paddingLeft:5
  
  },

});

//AppRegistry.registerComponent('Demo', () => Demo);
module.exports = Detial;