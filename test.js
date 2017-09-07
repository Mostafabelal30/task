
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
  //NavigatorIOS
} from 'react-native';

var Login = require('./login');
var Edit = require('./edit');
var Main = require('./main');
var Add_ads = require('./add_ads');
import ModalDropdown from 'react-native-modal-dropdown';
/*
const DropDown = require('react-native-dropdown');
const {
  Select,
  Option,
  OptionList,
  updatePosition
} = DropDown;*/
var Ads_detial = require('./ads_detial');
const SideMenu = require('react-native-side-menu');
const Menu = require('./MenuTest');
var deviceWidth = Dimensions.get('window').width;

const DEMO_OPTIONS_1 = ['القاهرة ', 'الجيزة ', 'القليوبية', 'الفيوم', 'الإسكندرية ', 'السويس ', ' الإسماعيلية ', 'الغربية', 'سوهاج '];
const DEMO_OPTIONS_2 = [
  {"name": "Rex", "age": 30},
  {"name": "Mary", "age": 25},
  {"name": "John", "age": 41},
  {"name": "Jim", "age": 22},
  {"name": "Susan", "age": 52},
  {"name": "Brent", "age": 33},
  {"name": "Alex", "age": 16},
  {"name": "Ian", "age": 20},
  {"name": "Phil", "age": 24},
];

export default class Detial extends Component {

  constructor(props) {
    super(props);

  //this.showBookDetail = this.showBookDetail.bind(this);
}


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

  onMenuItemSelected = (item) => {
    this.setState({
      isOpen: false,
    });
  }






    render() {

    const menu = <Menu navigator={this.props.navigator} onItemSelected={this.onMenuItemSelected}  />;

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

</TouchableOpacity>
        
      </View>
      <SideMenu
      navigator={this.props.navigator}
        menu={menu}
        isOpen={this.state.isOpen}
        menuPosition='right'
        onChange={(isOpen) => this.updateMenuState(isOpen)}>

  <View style={styles.top}>

         
    
       {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Select
            width={250}
            ref="SELECT1"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="Select a Province in Canada ..."
            onSelect={this._canada.bind(this)}>
            <Option>Alberta</Option>
            <Option>British Columbia</Option>
            <Option>Manitoba</Option>
            <Option>New Brunswick</Option>
            <Option>Newfoundland and Labrador</Option>
            <Option>Northwest Territories</Option>
            <Option>Nova Scotia</Option>
            <Option>Nunavut</Option>
            <Option>Ontario</Option>
            <Option>Prince Edward Island</Option>
            <Option>Quebec</Option>
            <Option>Saskatchewan</Option>
            <Option>Yukon</Option>
          </Select>

          <Text>Selected provicne of Canada: {this.state.canada}</Text>
          
          <OptionList ref="OPTIONLIST"/>
      </View>*/}
              
       <ScrollView style={styles.scroll}>

       <View style={styles.row}>
          <ScrollView ref={el => this._scrollView = el}
                      style={styles.scrollView}
                      contentContainerStyle={styles.contentContainer}
                      showsVerticalScrollIndicator={true}
                      scrollEventThrottle={1}>
            
            <ModalDropdown ref={el => this._dropdown_3 = el}
                           style={styles.dropdown_3}
                           textStyle={styles.dropdown_3_text}
                           defaultValue={'المدينة ... '}
                           dropdownStyle={styles.dropdown_3_dropdown}
                           options={DEMO_OPTIONS_1}
                           adjustFrame={style => this._dropdown_3_adjustFrame(style)}
                           dropdownTextStyle={styles.dropdown_3_dropdownTextStyle}
                           dropdownTextHighlightStyle={styles.dropdown_3_dropdownTextHighlightStyle}
            />
          </ScrollView >
        </View>

       {/*<ModalDropdown style={styles.dropdown} options={['option 1', 'option 2']}/>*/}
       <TouchableHighlight onPress={() => this.showBookDetail()} underlayColor='#dddddd'>

       <View style={styles.container}>
        
      <View style={styles.rightContainer}>
           <Text style={styles.title}>خصم 70% بجميع فروعنا</Text>
           <Text style={styles.greenText}>اضيف منذ يومان</Text>
           <Text style={styles.redText}>ينتهي خلال ثلاثة ايام</Text>
           <View style={styles.viewContainer}>
               <Text>435 </Text>
               <Image
             style={styles.viewimage}
            resizeMode='contain'
             
             //source={{uri: "images"}}
        source={require('../images/VIEWxxhdpi.png')}/>
      </View>
           </View>
               <Image
             style={styles.thumbnail}
             resizeMode='cover'
             //source={{uri: "images"}}
        source={require('../images/Layer 782mdpi.png')}
      />
           </View>
                      </TouchableHighlight >

             <View style={styles.separator} />
                  <TouchableHighlight onPress={() => this.showBookDetail()} underlayColor='#dddddd'>

       <View style={styles.container}>
        
      <View style={styles.rightContainer}>
           <Text style={styles.title}>خصم 70% بجميع فروعنا</Text>
           <Text style={styles.greenText}>اضيف منذ يومان</Text>
           <Text style={styles.redText}>ينتهي خلال ثلاثة ايام</Text>
           <View style={styles.viewContainer}>
               <Text>435 </Text>
               <Image
             style={styles.viewimage}
             resizeMode='contain'
             //source={{uri: "images"}}
        source={require('../images/VIEWxxhdpi.png')}/>
      </View>
           </View>
               <Image
             style={styles.thumbnail}
             resizeMode='cover'
              //alignSelf='stretch'
             //source={{uri: "images"}}
        source={require('../images/Layer 783mdpi.png')}
      />
           </View>
                      </TouchableHighlight >

             <View style={styles.separator} />
                 <TouchableHighlight onPress={() => this.showBookDetail()} underlayColor='#dddddd'>

       <View style={styles.container}>
        
      <View style={styles.rightContainer}>
           <Text style={styles.title}>خصم 70% بجميع فروعنا</Text>
           <Text style={styles.greenText}>اضيف منذ يومان</Text>
           <Text style={styles.redText}>ينتهي خلال ثلاثة ايام</Text>
           <View style={styles.viewContainer}>
               <Text>435 </Text>
               <Image
             style={styles.viewimage}
             resizeMode='contain'
             //source={{uri: "images"}}
        source={require('../images/VIEWxxhdpi.png')}/>
      </View>
           </View>
               <Image
             style={styles.thumbnail}
             resizeMode='cover'
             //source={{uri: "images"}}
        source={require('../images/Layer 784mdpi.png')}
      />
           </View>
                      </TouchableHighlight >

             <View style={styles.separator} />

                  <TouchableHighlight onPress={() => this.showBookDetail()} underlayColor='#dddddd'>

       <View style={styles.container}>
        
      <View style={styles.rightContainer}>
           <Text style={styles.title}>خصم 70% بجميع فروعنا</Text>
           <Text style={styles.greenText}>اضيف منذ يومان</Text>
           <Text style={styles.redText}>ينتهي خلال ثلاثة ايام</Text>
           <View style={styles.viewContainer}>
               <Text>435 </Text>
               <Image
             style={styles.viewimage}
             resizeMode='contain'
             //source={{uri: "images"}}
        source={require('../images/VIEWxxhdpi.png')}/>
      </View>
           </View>
               <Image
             style={styles.thumbnail}
             resizeMode='cover'
             //source={{uri: "images"}}
        source={require('../images/Layer 785mdpi.png')}
      />
           </View>
                      </TouchableHighlight >

             <View style={styles.separator} />

                  <TouchableHighlight onPress={() => this.showBookDetail()} underlayColor='#dddddd'>

       <View style={styles.container}>
        
      <View style={styles.rightContainer}>
           <Text style={styles.title}>خصم 70% بجميع فروعنا</Text>
           <Text style={styles.greenText}>اضيف منذ يومان</Text>
           <Text style={styles.redText}>ينتهي خلال ثلاثة ايام</Text>
           <View style={styles.viewContainer}>
               <Text>435 </Text>
               <Image
             style={styles.viewimage}
             resizeMode='contain'
             //source={{uri: "images"}}
        source={require('../images/VIEWxxhdpi.png')}/>
      </View>
           </View>
               <Image
             style={styles.thumbnail}
             resizeMode='cover'
             //source={{uri: "images"}}
        source={require('../images/Flag_of_Croatia.png')}
      />
           </View>
                      </TouchableHighlight >

             <View style={styles.separator} />
                  <TouchableHighlight onPress={() => this.showBookDetail()} underlayColor='#dddddd'>

       <View style={styles.container}>
        
      <View style={styles.rightContainer}>
           <Text style={styles.title}>خصم 70% بجميع فروعنا</Text>
           <Text style={styles.greenText}>اضيف منذ يومان</Text>
           <Text style={styles.redText}>ينتهي خلال ثلاثة ايام</Text>
           <View style={styles.viewContainer}>
               <Text>435 </Text>
               <Image
             style={styles.viewimage}
             resizeMode='contain'
             //source={{uri: "images"}}
        source={require('../images/VIEWxxhdpi.png')}/>
      </View>
           </View>
               <Image
             style={styles.thumbnail}
             resizeMode='cover'
             //source={{uri: "images"}}
        source={require('../images/Flag_of_Croatia.png')}
      />
           </View>
                      </TouchableHighlight >

             <View style={styles.separator} />
              <TouchableHighlight onPress={() => this.showBookDetail()} underlayColor='#dddddd'>

       <View style={styles.container}>
        
      <View style={styles.rightContainer}>
           <Text style={styles.title}>خصم 70% بجميع فروعنا</Text>
           <Text style={styles.greenText}>اضيف منذ يومان</Text>
           <Text style={styles.redText}>ينتهي خلال ثلاثة ايام</Text>
           <View style={styles.viewContainer}>
               <Text>435 </Text>
               <Image
             style={styles.viewimage}
             resizeMode='contain'
             //source={{uri: "images"}}
        source={require('../images/VIEWxxhdpi.png')}/>
      </View>
           </View>
               <Image
             style={styles.thumbnail}
             resizeMode='cover'
             //source={{uri: "images"}}
        source={require('../images/Flag_of_Croatia.png')}
      />
           </View>
                      </TouchableHighlight >

             <View style={styles.separator} />
                  <TouchableHighlight onPress={() => this.showBookDetail()} underlayColor='#dddddd'>

       <View style={styles.container}>
        
      <View style={styles.rightContainer}>
           <Text style={styles.title}>خصم 70% بجميع فروعنا</Text>
           <Text style={styles.greenText}>اضيف منذ يومان</Text>
           <Text style={styles.redText}>ينتهي خلال ثلاثة ايام</Text>
           <View style={styles.viewContainer}>
               <Text>435 </Text>
               <Image
             style={styles.viewimage}
             resizeMode='contain'
             //source={{uri: "images"}}
        source={require('../images/VIEWxxhdpi.png')}/>
      </View>
           </View>
               <Image
             style={styles.thumbnail}
             resizeMode='cover'
             //source={{uri: "images"}}
        source={require('../images/Flag_of_Croatia.png')}
      />
           </View>
                      </TouchableHighlight >

             <View style={styles.separator} />

                  <TouchableHighlight onPress={() => this.showBookDetail()} underlayColor='#dddddd'>

       <View style={styles.container}>
        
      <View style={styles.rightContainer}>
           <Text style={styles.title}>خصم 70% بجميع فروعنا</Text>
           <Text style={styles.greenText}>اضيف منذ يومان</Text>
           <Text style={styles.redText}>ينتهي خلال ثلاثة ايام</Text>
           <View style={styles.viewContainer}>
               <Text>435 </Text>
               <Image
             style={styles.viewimage}
             resizeMode='contain'
             //source={{uri: "images"}}
        source={require('../images/VIEWxxhdpi.png')}/>
      </View>
           </View>
               <Image
             style={styles.thumbnail}
             resizeMode='cover'
             //source={{uri: "images"}}
        source={require('../images/Flag_of_Croatia.png')}
      />
           </View>
                      </TouchableHighlight >

             <View style={styles.separator} />
                  <TouchableHighlight onPress={() => this.showBookDetail()} underlayColor='#dddddd'>

       <View style={styles.container}>
        
      <View style={styles.rightContainer}>
           <Text style={styles.title}>خصم 70% بجميع فروعنا</Text>
           <Text style={styles.greenText}>اضيف منذ يومان</Text>
           <Text style={styles.redText}>ينتهي خلال ثلاثة ايام</Text>
           <View style={styles.viewContainer}>
               <Text>435 </Text>
               <Image
             style={styles.viewimage}
             resizeMode='contain'
             //source={{uri: "images"}}
        source={require('../images/VIEWxxhdpi.png')}/>
      </View>
           </View>
               <Image
             style={styles.thumbnail}
             resizeMode='cover'
             //source={{uri: "images"}}
        source={require('../images/Flag_of_Croatia.png')}
      />
           </View>
                      </TouchableHighlight >

             <View style={styles.separator} />
                  <TouchableHighlight onPress={() => this.showBookDetail()} underlayColor='#dddddd'>

       <View style={styles.container}>
        
      <View style={styles.rightContainer}>
           <Text style={styles.title}>خصم 70% بجميع فروعنا</Text>
           <Text style={styles.greenText}>اضيف منذ يومان</Text>
           <Text style={styles.redText}>ينتهي خلال ثلاثة ايام</Text>
           <View style={styles.viewContainer}>
               <Text>435 </Text>
               <Image
             style={styles.viewimage}
             resizeMode='contain'
             //source={{uri: "images"}}
        source={require('../images/VIEWxxhdpi.png')}/>
      </View>
           </View>
               <Image
             style={styles.thumbnail}
             resizeMode='cover'
             //source={{uri: "images"}}
        source={require('../images/Flag_of_Croatia.png')}
      />
           </View>
                      </TouchableHighlight >

             <View style={styles.separator} />
                  <TouchableHighlight onPress={() => this.showBookDetail()} underlayColor='#dddddd'>

       <View style={styles.container}>
        
      <View style={styles.rightContainer}>
           <Text style={styles.title}>خصم 70% بجميع فروعنا</Text>
           <Text style={styles.greenText}>اضيف منذ يومان</Text>
           <Text style={styles.redText}>ينتهي خلال ثلاثة ايام</Text>
           <View style={styles.viewContainer}>
               <Text>435 </Text>
               <Image
             style={styles.viewimage}
             resizeMode='contain'
             //source={{uri: "images"}}
        source={require('../images/VIEWxxhdpi.png')}/>
      </View>
           </View>
               <Image
             style={styles.thumbnail}
             resizeMode='cover'
             //source={{uri: "images"}}
        source={require('../images/Flag_of_Croatia.png')}
      />
           </View>
                      </TouchableHighlight >

             <View style={styles.separator} />
                  <TouchableHighlight onPress={() => this.showBookDetail()} underlayColor='#dddddd'>

       <View style={styles.container}>
        
      <View style={styles.rightContainer}>
           <Text style={styles.title}>خصم 70% بجميع فروعنا</Text>
           <Text style={styles.greenText}>اضيف منذ يومان</Text>
           <Text style={styles.redText}>ينتهي خلال ثلاثة ايام</Text>
           <View style={styles.viewContainer}>
               <Text>435 </Text>
               <Image
             style={styles.viewimage}
             resizeMode='contain'
             //source={{uri: "images"}}
        source={require('../images/VIEWxxhdpi.png')}/>
      </View>
           </View>
               <Image
             style={styles.thumbnail}
             resizeMode='cover'
             //source={{uri: "images"}}
        source={require('../images/Flag_of_Croatia.png')}
      />
           </View>
                      </TouchableHighlight >

             <View style={styles.separator} />
                  <TouchableHighlight onPress={() => this.showBookDetail()} underlayColor='#dddddd'>

       <View style={styles.container}>
        
      <View style={styles.rightContainer}>
           <Text style={styles.title}>خصم 70% بجميع فروعنا</Text>
           <Text style={styles.greenText}>اضيف منذ يومان</Text>
           <Text style={styles.redText}>ينتهي خلال ثلاثة ايام</Text>
           <View style={styles.viewContainer}>
               <Text>435 </Text>
               <Image
             style={styles.viewimage}
             resizeMode='contain'
             //source={{uri: "images"}}
        source={require('../images/VIEWxxhdpi.png')}/>
      </View>
           </View>
               <Image
             style={styles.thumbnail}
             resizeMode='cover'
             //source={{uri: "images"}}
        source={require('../images/Flag_of_Croatia.png')}
      />
           </View>
                      </TouchableHighlight >

             <View style={styles.separator} />
        </ScrollView>

      </View>  
      </SideMenu>
      </View> 
        );
  }



asd(){

 this.props.navigator.push({
           title: 'الدخول',
           component: Login,
           rightButtonTitle: 'تعديل البيانات',
           onRightButtonPress: () => { this.asd2() }
           });

}
asd2(){

 this.props.navigator.push({
           title: 'تعديل البيانات',
           component:Edit,
           rightButtonTitle: ' اضافة اعلان',
           onRightButtonPress: () => { this.asd3() }
    
           });

}

asd3(){

/*const asdddd=( <Image
        source={require('../images/VIEWxxhdpi.png')}/>);*/
 this.props.navigator.push({
           title: ' اضافة اعلان',
           component:Add_ads,
        /*  rightButton:[{
            icon: require('../images/VIEWxxhdpi.png'),
          }] ,*/
    
           });

}

showBookDetail() {
   this.props.navigator.push({
           title: 'اعلان',
           component: Login,
           rightButtonTitle: 'الدخول',
           onRightButtonPress: () => { this.asd() }
           });
   }

   _dropdown_3_adjustFrame(style) {
    console.log(`frameStyle={width:${style.width}, height:${style.height}, top:${style.top}, left:${style.left}, right:${style.right}}`);
    style.top -= 0;
    style.left += 0;
    style.width=300;
    return style;
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

  row: {
    flex: 1,
    flexDirection: 'row',
        left:0,
        right:0,
        top:-50,
        bottom:0,
        position: 'absolute',
       // zIndex:10
        
        },
    dropdown_3: {
    width: 300,
    height:30,
    borderColor: 'lightgray',
   // borderWidth: 1,
    borderBottomWidth:3,
    borderRadius: 1,
  },
  dropdown_3_dropdownTextStyle: {
    backgroundColor: '#000',
    color: '#fff',
    
    
  },
  dropdown_3_dropdownTextHighlightStyle: {
    backgroundColor: '#fff',
    color: '#000',
  },
    dropdown_3_dropdown: {
    width: 150,
    height: 300,
    borderColor: 'cornflowerblue',
    borderWidth: 2,
    borderRadius: 3,
        alignItems: 'flex-end',
    //padding:10
  },
    dropdown_3_text: {
   // marginVertical: 10,
    marginHorizontal: 25,
    fontSize: 18,
    color: 'black',
    textAlign: 'right',
    //marginVertical:50,
  },
  scrollView: {
    flex: 1,

  },
  contentContainer: {
    height: 500,
    paddingVertical: 10,
    paddingLeft: 20,
    
  },
     thumbnail: {
        width: 150,
        height: 100,
        marginRight: 10,
        marginBottom: 5,
        borderRadius:5,
        borderWidth:3,
        borderColor:'#eeeeee',
    },
    viewimage:{
         width: 30,
        height: 20,
        marginRight: 10,
        marginBottom: 5,
        marginLeft: 10,
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
        fontSize: 14,
    },

    greenText:{
        color: 'green',
        fontSize: 14,

    },
    viewContainer:{
         flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
   // backgroundColor: '#aaaaaa',
    flexDirection: 'row',
    paddingTop: 10,
   // padding:10  
    },
    title: {
        fontSize: 18,
        //marginBottom: 5
    },
    separator: {
       height: 1,
       backgroundColor: '#dddddd'
   },
   top:
   {
         flex: 1,
    //justifyContent: 'flex-end',
    //alignItems: 'flex-end',
    backgroundColor: '#ffffff',
    //flexDirection: 'row',
   // paddingTop: 10,
    padding:10,
     // paddingTop: 120
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
     scroll:
  {

    // position: 'absolute',
   flex:1,
    top: 20,
    paddingTop:100
  //  left:50,
    
  },
});

//AppRegistry.registerComponent('Demo', () => Demo);
module.exports = Detial;