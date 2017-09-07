
      /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//var BookDetail = require('./Detial');
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Dimensions,
  NativeModules,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import Video from 'react-native-video';
import Popup from 'react-native-popup';
var Basic = require('./Basic');

var Map = require('./map_screen');

import SideMenu from 'react-native-side-menu';
import Menu from './MenuTest';
var deviceWidth = Dimensions.get('window').width;
var deviceHight = Dimensions.get('window').height;
var Picker = require('./modalPicker');


import { DatePickerDialog } from 'react-native-datepicker-dialog';
import moment from 'moment';
var index = 0
var ImagePicker = NativeModules.ImageCropPicker;

export default class Detial extends Component {

constructor(props) {
    super(props);


    this.state = {
    
        
      username: '',
      myArr:[],
      image: null,
      images: null,
      dobText: moment(new Date()).format('DD-MM-YYYY'),
      dobDate: null,
      journeyText: moment(new Date()).format('DD-MM-YYYY'),
      journeyDate: null,
      //password: '',
    }
  }
 static navigationOptions = {
    title: 'Welcome',
header: null
  };

 getInitialState(){
    return { myArr: [] }
  }

  _onPressOut() {
    let temp = this.state.username
    this.state.myArr.push(temp)
    this.setState({
     myArr: this.state.myArr
    })
  }



  pickMultiple() {
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false
    }).then(images => {
      this.setState({
        image: null,
        images: images.map(i => {
          console.log('received image', i);
          return {uri: i.path, width: i.width, height: i.height, mime: i.mime};
        })
      });
    }).catch(e => alert(e));
  }


  renderVideo(video) {
    return (<View style={{height: 300, width: 300}}>
      <Video source={{uri: video.uri, type: video.mime}}
         style={{position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
          }}
         rate={1}
         paused={false}
         volume={1}
         muted={false}
         resizeMode={'cover'}
         onError={e => console.log(e)}
         onLoad={load => console.log(load)}
         repeat={true} />
     </View>);
  }

  renderImage(image) {
    return <Image style={{width: deviceWidth*.2,marginLeft:deviceWidth*.01, justifyContent:'flex-end', height: deviceHight*.1, resizeMode: 'contain'}} source={image} />
  }

  renderAsset(image) {
    if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
      return this.renderVideo(image);
    }

    return this.renderImage(image);
  }





showMap() {
   this.props.navigator.push({
           title: 'اعلان',
           component: Map,
      
           });
   }

  onDOBPress = () => {
    let dobDate = this.state.dobDate;

    if(!dobDate || dobDate == null){
      dobDate = new Date();
      this.setState({
        dobDate: dobDate
      });
    }

    this.refs.dobDialog.open({
      date: dobDate,
      minDate: new Date() 
    });

  }

  onDOBDatePicked = (date) => {
    this.setState({
      dobDate: date,
      dobText: moment(date).format('DD-MM-YYYY')
    });
  }


 
  onJourneyDatePress = () => {
    let journeyDate = this.state.journeyDate;

    if(!journeyDate || journeyDate == null){
      journeyDate = new Date();
      this.setState({
        journeyDate: journeyDate
      });
    }

    //To open the dialog
    this.refs.journeyDialog.open({
      date: journeyDate,
      minDate: new Date() //To restirct past date
    });

  }

  /**
   * Call back for journey date picked event
   *
   */
  onJourneyDatePicked = (date) => {
    this.setState({
      journeyDate: date,
      journeyText: moment(date).format('DD-MM-YYYY')
    });
  }

  setcities(optionkey)
  {
this.setState({
    citydrop:this.state.countrydrop[optionkey-1].cities,

    });  }


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


   back(){
  this.setState({
      isOpen: false,
    });  
       this.props.navigator.pop();
     return true;
  }






    render() {

    const menu = <Menu navigation={this.props.navigation}  onItemSelected={this.onMenuItemSelected}/>;

            const { navigate } = this.props.navigation;

  let Arr = this.state.myArr.map((a, i) => {
      return <View key={i} style={styles.addtextinput}>
      
 <TextInput style={styles.phoneTextInput} placeholder="رقم الهاتف"
                  keyboardType = { "phone-pad" }
                  underlineColorAndroid="transparent"
                    placeholderTextColor="gray" 
                    maxLength = {10} 
                    autoFocus = {true}
                   // ref= {(el) => { this.username = el; }}
                      //onChangeText={(username) => this.setState({username})}
                        //  value={this.state.username}
                        /></View>                            
    }) 

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
          اضافة اعلان
        </Text>

<TouchableOpacity 
                    activeOpacity={ 0.75 }
                  //  navigator={this.props.navigator}
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
                     <KeyboardAvoidingView behavior="position" style={styles.Keyboard} >

<Picker/>
            <View style={styles.bigDiv} >
        <TextInput style={styles.name}  placeholder="عنوان الاعلان"
        underlineColorAndroid="transparent"
        placeholderTextColor="gray"></TextInput>
        <TextInput style={styles.name}  placeholder=" تفاصيل الاعلان"
        underlineColorAndroid="transparent"
  placeholderTextColor="gray"></TextInput>

          <View style={styles.Date}>
          
           <View style={styles.DateTextView}>
          <Text style={styles.DateText}>تاريخ الانتهاء</Text>
          <TouchableOpacity onPress={this.onJourneyDatePress.bind(this)} >
            <View style={styles.datePickerBox}>
              <Text style={styles.datePickerText}>{this.state.journeyText}</Text>
            </View>
          </TouchableOpacity>
          </View>

          <View style={styles.DateTextView}>
       <Text style={styles.DateText}>تاريخ الاضافة</Text>
          <TouchableOpacity onPress={this.onDOBPress.bind(this)} >
            <View style={styles.datePickerBox}>
              <Text style={styles.datePickerText}>{this.state.dobText}</Text>
            </View>
          </TouchableOpacity>
          </View>

       

        {/* Place the dialog component at end of your views*/}
        <DatePickerDialog ref="dobDialog" onDatePicked={this.onDOBDatePicked.bind(this)} />
        <DatePickerDialog ref="journeyDialog" onDatePicked={this.onJourneyDatePicked.bind(this)} />

          </View>

          <View style={styles.Button}>

            <TouchableOpacity 
                    activeOpacity={ 0.75 }
                    onPress={() => navigate('Mapscreen')}
                    style={ styles.item }>
             <Image
             style={styles.thumbnail}
             resizeMode='contain'
             //source={{uri: "images"}}
         source={{uri: 'location'}}
      />
</TouchableOpacity>

    <TouchableOpacity 
                    activeOpacity={ 0.75 }
                     onPress={this.pickMultiple.bind(this)}
                    style={ styles.item }>
             <Image
             style={styles.thumbnail}
             resizeMode='contain'
         source={{uri: 'video'}}
      />
</TouchableOpacity>

    <TouchableOpacity 
                    activeOpacity={ 0.5 }
                    onPress={this.pickMultiple.bind(this)}
                    style={ styles.item }>
             <Image
             style={styles.thumbnail}
             resizeMode='contain'
         source={{uri: 'photo'}}
      />
</TouchableOpacity>


          </View>
                <View style={styles.selectedimage}>
        {this.state.image ? this.renderAsset(this.state.image) : null}
        {this.state.images ? this.state.images.map(i => <View key={i.uri}>{this.renderAsset(i)}</View>) : null}
      </View>
      <Text style={styles.account}>ارقام الهاتف </Text>

<View style={styles.PhoneView}>

 <TouchableOpacity 
                    activeOpacity={ 0.75 }
                    
                    onPress={this._onPressOut.bind(this)}
                    >
            <Image
             style={styles.add_icon}
             resizeMode='contain'
        source={{uri: 'addxhdpi'}}
      />
      </TouchableOpacity>


 <TextInput style={styles.phoneTextInput} underlineColorAndroid="transparent" placeholder="رقم الهاتف"
                  keyboardType = { "phone-pad" }
                    placeholderTextColor="gray" 
                    maxLength = {10} 
                   // ref= {(el) => { this.username = el; }}
                     // onChangeText={(username) => this.setState({username})}
                       //    value={this.state.username}
                       />

     


</View>

{ Arr }
</View>
                 
               <View style={{ height: deviceHight*.2 }} />

                                 </KeyboardAvoidingView>

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
    padding:10,
  },

     thumbnail: {
        width: deviceWidth*.25,
        height:deviceWidth*.25,
      marginRight: deviceWidth*.05,
    },
    account:{
      fontSize:deviceWidth*.05,
       color: '#656565',
      paddingRight:deviceWidth*.04,
      alignSelf: 'flex-end',
    },
    social:{
        flexDirection: 'row',
        width:deviceWidth,
        alignItems:'center',
        justifyContent:'flex-end'
    },
    DynamicPhone:
    {
      width:deviceWidth*.5,
      textAlign:'center',
      fontSize:deviceWidth*.05
    },
    Button:{
      flexDirection: 'row',
       paddingTop:20,
       paddingBottom:20

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
    phoneTextInput:
    {
      fontSize:deviceWidth*.04,
        width:deviceWidth*.8,
        height:deviceHight*.06,
       justifyContent:'flex-end',
        padding:10,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#656565',
        marginTop:10,
        marginLeft:20,
        textAlign :'right',

    },

    add_icon:
    {
         width:deviceWidth*.05,
        height:deviceWidth*.05,
        paddingTop:50
    },
  deleteIcon:{
   width:deviceWidth*.05,
   height:deviceHight*.1,

  },
  bigDiv:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:deviceWidth*.02

  },
  Date:
  {
    justifyContent: 'center',  
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
  },
 DateTextView:
 {
    width:deviceWidth*.4,
     height:deviceWidth*.2,
     alignItems: 'flex-end',
     marginLeft:deviceWidth*.06,
 },

  DateText:
  {
   
padding:10,
    // marginTop:10,
    // marginLeft:10,
     //marginRight:10,
      textAlign :'right',
     fontSize:deviceWidth*.05
  },
  datePickerBox:{
    borderColor: '#ABABAB',
    borderWidth: 2,
    borderRadius: 4,
    height: deviceWidth*.1,
    width:deviceWidth*.43,
  //justifyContent:'center',
  },
  datePickerText: {
    fontSize:deviceWidth*.05,
    color: '#121212',
    textAlign:'right',
    padding:deviceWidth*.01
  },
plusitem:
{
  width:deviceWidth*.4,
  justifyContent:'center'
},
  bigContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  //  paddingTop:20,
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
   scroll:
  {
flex:1,
    top: 20,
    paddingTop:70,    
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
  PhoneView:
  {
    flexDirection:'row',
  },
  selectedimage:
  {
   // flex:1,
    flexDirection:'row',
  },
  addtextinput:
  {
    marginLeft:deviceWidth*.05
  },
  Keyboard:
  {
    flex:1
  }
});

//AppRegistry.registerComponent('Demo', () => Demo);
module.exports = Detial;