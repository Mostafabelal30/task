import React, { Component } from 'react';



import {
   Dimensions,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

/*
var Login = require('./login');
var Follow = require('./follow');
//var My_ads = require('./my_ads');
var Edit = require('./edit');
var Add = require('./add_ads');
//var Detial = require('./ads_detial');*/

/* import Login from './login';
//import my_ads from './my_ads';
import Follow from './follow';
import Edit from './edit';
import Add_ads from './add_ads';
import Basic from './Basic';
import Main from './main';  */
//var Basic = require('./Basic');
//var Login = require('./login');
//var Add_ads = require('./add_ads');
//var My_ads = require('./my_ads');
//var Follow = require('./follow');
//var Navigate=require('./navigate');
import { StackNavigator } from 'react-navigation';

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';
var deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
 menu: {
    flex: 1,
    width: window.width/2,
    height: window.height,
    backgroundColor: '#DDD',
   // paddingRight: 100,
    paddingLeft:60,
    //marginLeft:30,
    marginTop:40
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
     flexDirection: 'row',

  },
  avatar: {
    width: deviceWidth*.1,
    height: deviceWidth*.1,
    borderRadius:  deviceWidth*.05,
   // marginLeft:deviceWidth*.13,
    //flex: 1,
  },
  name: {
    fontSize: deviceWidth*.025,
    paddingTop:10,
    paddingRight:10
    
  },
  item: {
    width:deviceWidth*.25,
    fontSize: deviceWidth*.04,
    textAlign:'right',
    fontWeight: '300',
    paddingTop: 5,
    
  },
   container: {
    flex: 1,
 width: window.width/2,
  },
});

export default class Menu extends Component  {


    constructor(props){
    super(props);
  }


  render() {
      //    const { navigate } = this.props.navigation;

    return (
     <View style={styles.container}  >

{/*          <TouchableOpacity 
          onPress={() => this.showBookDetail()} 
  activeOpacity={ 0.75 }
  style={ styles.item }
>
             <Image
             style={styles.thumbnail}
             resizeMode='contain'
             //source={{uri: "images"}}
        source={require('../images/fbhdpi.png')}
      />
</TouchableOpacity>*/}




      <ScrollView scrollsToTop={false} style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Text style={styles.name}>محمد احمد</Text>
          <Image
            style={styles.avatar}
            source={{ uri, }}/>
          
        </View>

            <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('Main')} 
         
  activeOpacity={ 0.75 }
  //style={ styles.item }
>
        <Text
         // onPress={() => this.props.onItemSelected('تعديل البيانات')}
         // onPress={() => this.showBookDetail()} 
          style={styles.item}>
           الرئيسية
        </Text>
        </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('Login')} 
         
  activeOpacity={ 0.75 }
  //style={ styles.item }
>
        <Text
         // onPress={() => this.props.onItemSelected('تعديل البيانات')}
         // onPress={() => this.showBookDetail()} 
          style={styles.item}>
          دخول
        </Text>
        </TouchableOpacity>

             <TouchableOpacity 
            // onPress={this.gotoEditScreen.bind(this)}
         onPress={() => this.props.navigation.navigate('Edit')} 
  activeOpacity={ 0.75 }
  //style={ styles.item }
>
        <Text
         // onPress={() => this.props.onItemSelected('تعديل البيانات')}
         // onPress={() => this.showBookDetail()} 
          style={styles.item}>
          تعديل البيانات
        </Text>
        </TouchableOpacity>
                <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('Add')} 
  activeOpacity={ 0.75 }
  //style={ styles.item }
>
        <Text
         // onPress={() => this.props.onItemSelected('اضافة اعلان')}
          style={styles.item}>
          اضافة اعلان
        </Text>
        </TouchableOpacity>

                <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('Basic')} 
  activeOpacity={ 0.75 }
  //style={ styles.item }
>
          <Text
          //onPress={() => this.props.onItemSelected('اعلاناتي')}
          style={styles.item}>
          اعلاناتي
        </Text>
                </TouchableOpacity>


                <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('Basic')} 
  activeOpacity={ 0.75 }
  //style={ styles.item }
>
          <Text
         // onPress={() => this.props.onItemSelected('خروج')}
          style={styles.item}>
          خروج
        </Text>
        </TouchableOpacity>

                <TouchableOpacity 
           onPress={() => this.props.navigation.navigate('Basic')}
  activeOpacity={ 0.75 }
  //style={ styles.item }
>
          <Text
         // onPress={() => this.props.onItemSelected('قيم التطبيق')}
          style={styles.item}>
          قيم التطبيق
        </Text>
        </TouchableOpacity>

                <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('Follow')} 
  activeOpacity={ 0.75 }
  //style={ styles.item }
>
          <Text
         // onPress={() => this.props.onItemSelected('تابعونا')}
          style={styles.item}>
          تابعونا
        </Text>
                </TouchableOpacity>

      </ScrollView>
      </View>   
    );
  }

  

};
module.exports = Menu;
//AppRegistry.registerComponent('Menu', () => Menu);