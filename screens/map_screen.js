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
  Button,
  NavigatorIOS
} from 'react-native';
//import BookDetail from './Detial';
import MapView from 'react-native-maps';
var deviceWidth = Dimensions.get('window').width;
import SideMenu from 'react-native-side-menu';
import Menu from './MenuTest';
export default class CityDetial extends Component {

 constructor(props) {
        super(props); 
       //this.showBookDetail = this.showBookDetail.bind(this);
       arrayMarkers=[{
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0,
            longitudeDelta: 0,

       }];

       this.state={
        region:{
            latitude: 0,
            longitude: 0,
            //latitudeDelta: 0.01,
            //longitudeDelta: 0.01,
              latitudeDelta: 0,
            longitudeDelta: 0,
            
        },
        markers:arrayMarkers,
          isOpen: false,
       };
    }

     static navigationOptions = {
    title: 'Welcome',
header: null
  };

    back(){
     this.props.navigator.pop();
     return true;
  }

 componentDidMount() {
   navigator.geolocation.getCurrentPosition((position) => {
      // Create the object to update this.state.mapRegion through the onRegionChange function

      var lat=parseFloat(position.coords.latitude);
      var long=parseFloat(position.coords.longitude);
      var intialRegion = {
        latitude:lat,
        longitude:long,
       latitudeDelta:  0.00922*1.5,
        longitudeDelta: 0.00421*1.5
      }

      this.setState({region:intialRegion});
      this.setState({markers:intialRegion});
    })

    this.watchID=navigator.geolocation.watchPosition((position) => {
      
      var lat=parseFloat(position.coords.latitude);
      var long=parseFloat(position.coords.longitude);
      var lastRegion = {
        latitude:lat,
        longitude:long,
      latitudeDelta:  0.00922*1.5,
        longitudeDelta: 0.00421*1.5
      }

      this.setState({region:lastRegion});
      this.setState({markers:lastRegion});
   })
    

      //this.onRegionChange(region, region.latitude, region.longitude);
  }

    componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

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


   onRegionChange(data) {
   this.setState({
    region:{
            latitude:data.latitude,
            longitude:data.longitude,
             latitudeDelta:  0.00922*1.5,
        longitudeDelta: 0.00421*1.5
           // latitudeDelta:0.01,
            //longitudeDelta:0.01,
    }
    });
  }


 onMapPress(data) {
   
      let latitude= data.nativeEvent.coordinate.latitude;
      let longitude= data.nativeEvent.coordinate.longitude;
      arrayMarkers.push({
        latitude:latitude,
        longitude:longitude
      });
      this.setState({markers:arrayMarkers});

      //latitudeDelta:  0.00922*1.5,
      //longitudeDelta: 0.00421*1.5
    
   // this.state.lastLat=region.latitude;
   // this.state.lastLong=region.longitude;
   // this.onRegionChange(region, region.latitude, region.longitude);
  }

  renderMarkers()
  {
   markers=[];
   var i=0;
      /*for(marker of this.state.markers)
      {
        markers.push(
                 <MapView.Marker title={'asd asd'+marker.latitude}  coordinate={marker}/>
                 )
      }
      return markers;*/
        markers.push(
                 <MapView.Marker title={'lat'+this.state.region.latitude +'long'+this.state.region.longitude} key={i++} draggable coordinate={this.state.region}/>
                 )
                
        return markers;

  }

  render() {

        const menu = <Menu navigation={this.props.navigation}  onItemSelected={this.onMenuItemSelected}/>;

         return (
           <View style={styles.bigContainer}>
         <View  style={styles.welcome}>

          <TouchableOpacity 
                    activeOpacity={ 0.75 }
                     onPress={() => this.toggle()}
                     style={styles.imageNav}
                 >
             <Image
             source={{uri: 'menu_icn'}} style={{width: 32, height: 32}} />

          

</TouchableOpacity>

   <Text
          style={styles.navTitle}>
          تحديد موقع
        </Text>


       <TouchableOpacity 
                    activeOpacity={ 0.75 }
                    navigator={this.props.navigator}
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
       
  
                     <MapView 
                style={styles.map}
          initialRegion={this.state.region}
          showsUserLocation={true}
          followUserLocation={true}
          showsMyLocationButton={true}
          showsScale={true}
          onRegionChange={this.onRegionChange.bind(this)}
           onPress={this.onMapPress.bind(this)}>
           
                           {this.renderMarkers()}

 
   </MapView>   
 
    </View>
    </SideMenu>
    </View>
        );



  }
}

var styles = StyleSheet.create({
    container: {
          flex: 1,
    //justifyContent: 'flex-end',
    //alignItems: 'flex-end',
    backgroundColor: '#ffffff',
    //flexDirection: 'row',
   // paddingTop: 10,
    padding:10,
     // paddingTop: 120
        
    },

  
    map:
    {
       flex:1,
      zIndex:-1,
      left:0,
        right:0,
        top:50,
        bottom:-150,
        position: 'absolute',
      },

 bigContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    //paddingTop:20
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
 
   imageNav:
  {
    position: 'absolute',
    zIndex: 10,
    top: 0,
    right:20,
    padding: 10,
  },
  back:
  {
    width:deviceWidth*.2,
     position: 'absolute',
   // zIndex: 20,
    left:0,
    top:-10,
  alignItems:'center',
    padding: 10,
    
  },
     scroll:
  {

    // position: 'absolute',
   flex:1,
    top: 20,
    paddingTop:100
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
  Done:
  {
    fontSize:18,
    color:'#333',
    paddingTop:15,
    paddingLeft:5
  },

});

//AppRegistry.registerComponent('Hello', () => CityDetial);
module.exports = CityDetial;