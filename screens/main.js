
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  ListView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

var Picker = require('./modalPicker');
var Login = require('./login');

//var Ads_detial = require('./ads_detial'); 
import SideMenu from 'react-native-side-menu';
import Menu from './MenuTest';
var deviceWidth = Dimensions.get('window').width;
var deviceHight = Dimensions.get('window').height;

import moment from 'moment';
var REQUEST_URL = 'https://www.internetplus.biz/hazem/linkAPI.php?id=31/';

export default class Detial extends Component {

  constructor(props) {
    super(props);
       this.state = {
         page:1,
           isLoading: true,
           dataSource: new ListView.DataSource({
               rowHasChanged: (row1, row2) => row1 !== row2
           })
       };

}
       static navigationOptions = {
    title: 'Welcome',
header: null
  };


componentDidMount() {
  
    this.fetchData();
   }
 
   fetchData() {
       fetch('https://www.internetplus.biz/hazem/linkAPI.php?id=31/'+this.state.page)
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
    isOpen: true,
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

  _onEndReached()
  {
        fetch('https://www.internetplus.biz/hazem/linkAPI.php?id=31/'+(this.state.page+1))
       .then((response) => response.json())
       .then((responseData) => {
         if(responseData.ads.length!=0)
          {
        // mang = mang.concat(responseData.ads);
           this.setState({
               dataSource: this.state.dataSource.cloneWithRows(responseData.ads.concat(responseData.ads)),
               //isLoading: false,
               page:this.state.page+1
           })
          }
          else{
            alert(asd)
          }
     
       })

  }

  
    render() {
      
    const menu = <Menu navigation={this.props.navigation} onItemSelected={this.onMenuItemSelected} />;

    return (

<View style={styles.bigContainer}>
        <View  style={styles.welcome}>

          <TouchableOpacity 
                    activeOpacity={ 0.75 }
                     onPress={() => this.toggle()}
                     style={styles.image} >
             <Image
             source={{uri: 'menu_icn'}} style={{width: 32, height: 32}} />
</TouchableOpacity>

   <Text style={styles.navTitle}>
           الرئيسية
        </Text>
        
      </View>
      <SideMenu
      navigator={this.props.navigator}
        menu={menu}
        openMenuOffset={deviceWidth/2}
        isOpen={this.state.isOpen}
        menuPosition='right'
        onChange={(isOpen) => this.updateMenuState(isOpen)}>

  <View style={styles.top}>
   
      <Picker />
        
          <ListView
              ref={(listView) => { _listView = listView; }}

          onEndReached={this._onEndReached.bind(this)}
          onEndReachedThreshold={5}
                dataSource={this.state.dataSource}
                 initialListSize={2}
                 pageSize={3}
                renderRow={this.renderBook.bind(this)}
                style={styles.listView}
                />

      </View>  
      </SideMenu>
      </View> 
        );
  }




renderBook(book) {
  const start=book.start_date*1000;
  const end=book.end_date*1000;
  const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

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
         source={{uri:book.image}}/>
      
           </View>
           <View style={styles.separator} />
           </View>
           
                      </TouchableHighlight >

 );
   }
   

 

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
        height: deviceHight*.15,
       marginRight: 10,
        marginBottom: 5,
        //borderRadius:5,
        borderWidth:3,
        borderColor:'#eeeeee',
    },
    viewimage:{
        width: deviceWidth*.05,
        height: deviceHight*.025,
        alignSelf:'stretch'
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
     view_date:
    {
      fontSize:deviceWidth*.038
    },
    viewNumber:
    {
      fontSize:deviceWidth*.025 
    },

    greenText:{
        color: 'green',
        fontSize: deviceWidth*.038,
    },
    viewContainer:{
         flex: 1,
    flexDirection: 'row',
    },
    title: {
        fontSize: deviceWidth*.05,
    },
    separator: {
       height: deviceHight*.002,
       backgroundColor: '#dddddd'
   },
   top:
   {
    flex: 1,
    backgroundColor: '#ffffff',
    padding:10,
    paddingTop:70
   },

 bigContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    //paddingTop:20,
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
    paddingTop:50,    
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
    textAlign:'center'
},
  add_date:
    {
          flex: 1,
          flexDirection: 'row',
 },
      listView: {
       backgroundColor: '#F5FCFF',
       paddingBottom:deviceHight*.17,
   },
});

//AppRegistry.registerComponent('Demo', () => Demo);
module.exports = Detial;