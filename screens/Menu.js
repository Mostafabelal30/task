
      /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//var BookDetail = require('./Detial');
import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  AlertIOS,
  TouchableOpacity,
} from 'react-native';
//var Main = require('./main');
const SideMenu = require('react-native-side-menu');

var Ads_detial = require('./ads_detial');

var Login = require('./login');
var Edit = require('./edit');
var Main = require('./main');
var Add_ads = require('./add_ads');
var My_ads = require('./my_ads');
var Follow = require('./follow');


const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';


var deviceWidth = Dimensions.get('window').width;




export default class Menu extends Component {

 constructor(props) {
        super(props); 
      this.showBookDetail = this.showBookDetail.bind(this);
    }





  render() {
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
          <Image
            style={styles.avatar}
            source={{ uri, }}/>
          <Text style={styles.name}>محمد احمد</Text>
        </View>
          <TouchableOpacity 
          onPress={() => this.showBookDetail()} 
         
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
          onPress={() => this.gotoEditScreen()} 
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
          onPress={() => this.gotoAddScreen()} 
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
          onPress={() => this.gotoMyAdScreen()} 
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
          onPress={() => this.close()} 
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
           onPress={this.close.bind(this)}
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
          onPress={() => this.gotoFollowScreen()} 
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


  static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
  };




showBookDetail() {
   this.props.navigator.push({
          // title: 'اعلان',
           component: Login,
//rightButtonTitle: 'الدخول',
  //         onRightButtonPress: () => { this.asd() }
           });
   }

gotoLoginScreen() {

       
this.props.navigator.push({
          title: 'تسجيل الدخول',
           component: Login,
           //rightButtonIcon:require('../images/menu_icn.png'),
             // onRightButtonPress: () => {this.asd()} 

           });
   }


gotoEditScreen() {
       this.props.navigator.push({
           title: 'تعديل البيانات',
           component: Edit,
         //  rightButtonIcon:require('../images/menu_icn.png'),
           //   onRightButtonPress: () => {this.asd()} 

           });
   }



   gotoAddScreen() {
       this.props.navigator.push({
           title: 'اضافة اعلان',
           component: Add_ads,
            //  rightButtonIcon:require('../images/menu_icn.png'),
            //  onRightButtonPress: () => {this.asd()} 
           });
   }


   gotoMyAdScreen() {
       this.props.navigator.push({
           title: 'اعلاناتي',
           component: My_ads,
              //rightButtonIcon:require('../images/menu_icn.png'),
             // onRightButtonPress: () => {this.asd()} 
           });
          
   }


  gotoFollowScreen() {
       this.props.navigator.push({
           title: 'تابعونا',
           component: Follow,
              //rightButtonIcon:require('../images/menu_icn.png'),
             //onRightButtonPress: () => {this.asd()} 
           });
   }

      close() {
       this.props.navigator.push({
           title: 'اعلاناتي',
           component: My_ads,
             // rightButtonIcon:require('../images/menu_icn.png'),
             // onRightButtonPress: () => {this.asd()} 
           });
   }

   asd(){
     this.props.navigator.push({
          //  title: "asd",
            component: Menu,
            
        });

}



}

const styles = StyleSheet.create({
menu: {
    flex: 1,
    width: window.width/2,
    height: window.height,
    backgroundColor: '#DDD',
   // paddingRight: 100,
    paddingLeft:80,
    marginLeft:50,
    marginTop:70
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,

  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginLeft:60,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: -10,
    top: 20,
  },
  item: {
    width:80,
    fontSize: 16,
    textAlign:'right',
    fontWeight: '300',
    paddingTop: 5,
    
  },
   container: {
    flex: 1,
 width: window.width/2,
  },
});



//AppRegistry.registerComponent('Menu', () => Menu);
module.exports = Menu;
