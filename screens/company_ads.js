
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
  TouchableOpacity,
  TouchableHighlight,
  ListView,
  NavigatorIOS,
  Dimensions,
} from 'react-native';
import {CirclesLoader, PulseLoader, TextLoader, DotsLoader,LineDotsLoader,EatBeanLoader,BubblesLoader} from 'react-native-indicator';
//var Ads_detial = require('./ads_detial');

import SideMenu from 'react-native-side-menu';
import Menu from './MenuTest';
var deviceWidth = Dimensions.get('window').width;
var deviceHight = Dimensions.get('window').height;

var REQUEST_URL = 'https://www.internetplus.biz/hazem/linkAPI.php?id=31';

import moment from 'moment';




export default class Detial extends Component {

  constructor(props) {
    super(props);
    this.state = {
           isLoading: true,
           dataSource: new ListView.DataSource({
           rowHasChanged: (row1, row2) => row1 !== row2
           })
       };

 // this.showBookDetail = this.showBookDetail.bind(this);
}
 static navigationOptions = {
    title: 'Welcome',
header: null
  };

componentDidMount() {
  
       this.fetchData();

   }
 
   fetchData() {
       fetch(REQUEST_URL)
       .then((response) => response.json())
       .then((responseData) => {
           this.setState({
               dataSource: this.state.dataSource.cloneWithRows(responseData.ads),
               isLoading: false
           });
       })
       .done();
   }



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
     this.props.navigator.pop();
     return true;
  }


   showBookDetail(book) {
      
       this.props.navigator.push({
          // title: book.title,
           component: Ads_detial,
          // passProps: {book}
       });
   }

renderBook(book) {
  const start=book.start_date*1000;
  const end=book.end_date*1000;
  
  var date = new Date(start);
  var date_finish = new Date(end);
   //date.toString("MMM dd");
       return (

<TouchableHighlight onPress={() => this.props.navigation.navigate('Ads_detial',{ book: book})} underlayColor='#dddddd'>
<View>
       <View style={styles.container}>
        
      <View style={styles.rightContainer}>
           <Text style={styles.title}>{book.title}</Text>
              <View style={styles.add_date}>
                <Text style={styles.view_date}>{moment(date).format('DD-MM-YYYY')}:</Text>
                <Text style={styles.greenText}>تاريخ الاضافة</Text>
                </View>
                <View style={styles.add_date}>
                <Text style={styles.view_date}>{moment(date_finish).format('DD-MM-YYYY')}:</Text>
                <Text style={styles.redText}>تاريخ الانتهاء</Text>
                </View>
             <View style={styles.viewContainer}>

      
        
               <Text style={styles.viewNumber}>{book.views} </Text>

               <Image
             style={styles.viewimage}
             resizeMode='contain'
             //source={{uri: "images"}}
         source={{uri: 'view'}}/>
        
      </View>
           </View>
               <Image
             style={styles.thumbnail}
             resizeMode='contain'
             //source={{uri: "images"}}
        source={{uri: book.image}}
      />
           </View>
           <View style={styles.separator} />
           </View>
                      </TouchableHighlight >


);
   }


    render() {

        var ref=this.props.ref;

          const menu = <Menu navigation={this.props.navigation} onItemSelected={this.onMenuItemSelected} />;

          if(this.state.isLoading){
     return (
        <View style={styles.loader}>
            <CirclesLoader/>
            <TextLoader text="جار التحميل" textStyle={{fontSize:deviceWidth*.08,paddingTop:deviceWidth*.05}}  />
        </View>     )}

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
          اعلاناتي
        </Text>

<TouchableOpacity 
                    activeOpacity={ 0.75 }
                  //  navigator={this.props.navigator}
                    onPress={() => this.props.navigation.goBack()}
                     style={styles.back}

                 >
             <Image
             source={{uri: 'backicon'}} style={{width: deviceWidth*.08, height: 50}} />

</TouchableOpacity>
        
      </View>
      <SideMenu
        menu={menu}
        navigator={this.props.navigator}
        openMenuOffset={deviceWidth/2}
        isOpen={this.state.isOpen}
        menuPosition='right'
        onChange={(isOpen) => this.updateMenuState(isOpen)}>
  <View style={styles.top}>
    
              
       <ScrollView  style={styles.scroll} >

       <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderBook.bind(this)}
                style={styles.listView}
                />


        </ScrollView>

      </View> 
      
      </SideMenu>
      </View>   );
  }

/*asd(){

 this.props.navigator.push({
           title: 'الدخول',
           component: Login,
           });

}*/

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    paddingTop: 10,
    padding:10
  },
     thumbnail: {
         width: deviceWidth*.4,
        height: deviceWidth*.25,
        marginRight: 10,
        marginBottom: 5,
       // borderRadius:5,
        borderWidth:5,
        borderColor:'#eeeeee'
    },
    viewimage:{
         width: deviceWidth*.05,
        height: deviceHight*.025,
        marginRight: 5,
        marginBottom: 5,
        marginLeft: 5,
    },
    rightContainer: {
        flex: 1,
         justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 10,
    },
    redText:{
        color: 'red',
         fontSize: deviceWidth*.038,
    },

    greenText:{
        color: 'green',
         fontSize: deviceWidth*.038,

    },
    view_date:
    {
      fontSize:deviceWidth*.038
    },
        viewNumber:
    {
      fontSize:deviceWidth*.025 
    },
    viewContainer:{
         flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
   // backgroundColor: '#aaaaaa',
    flexDirection: 'row',
    paddingTop:10 ,
   // padding:10  
    },
    Delete:{
  flexDirection: 'row',
  //alignItems:'flex-start',
  //paddingRight:5,
  marginRight:deviceWidth*.25,


    },
    Deleteimage:
    {
        width:deviceWidth*.035,
        height:deviceHight*.035,
        marginLeft:deviceWidth*.02
    },
    add_date:
    {
          flex: 1,
          flexDirection: 'row',
          paddingTop:5,
         

    },
    title: {
        
        fontSize: deviceWidth*.05,
        //marginBottom: 5
    },
    separator: {
       height:deviceHight*.002,
       backgroundColor: '#dddddd'
   },
   dropdown:
   {
     flex:1,
     width:50,
     height:120,
    borderWidth: 3,
    borderRadius: 3,
   },
   top:
   {
      //paddingTop: 10
        flex: 1,
  //  justifyContent: 'center',
   // alignItems: 'center',
    backgroundColor: '#ffffff',
    //flexDirection: 'row',
    paddingTop: 10,
    //padding:10
   },
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
   scroll:
  {

    // position: 'absolute',
   flex:1,
    top: 20,
    paddingTop:50,
  //  left:50,
    
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
  loader:
{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
 // width:400,
 // height:200,
 backgroundColor:rgb(0,0,0,0.3),
},

      listView: {
       backgroundColor: '#F5FCFF',
       paddingBottom:deviceHight*.17
   },
});

//AppRegistry.registerComponent('Demo', () => Demo);
module.exports = Detial;