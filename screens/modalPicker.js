import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Dimensions,
  ListView,
  AlertIOS,
  TouchableOpacity,
  TouchableHighlight,
  //NavigatorIOS
} from 'react-native';
import {CirclesLoader, PulseLoader, TextLoader, DotsLoader,LineDotsLoader,EatBeanLoader,BubblesLoader} from 'react-native-indicator';
import ModalPicker from 'react-native-modal-picker';
var REQUEST_URL2 = 'https://www.internetplus.biz/hazem/linkAPI.php?id=29';
var index=0;
var deviceWidth = Dimensions.get('window').width;
var deviceHight = Dimensions.get('window').height;
export default class Detial extends Component {

  constructor(props) {
    super(props);
       this.state = {
          textInputValue: '',
          countrydrop:[],
          citydrop:[],
           textInputValueCity: '',
           isLoading: true,
         
       };

  //this.showBookDetail = this.showBookDetail.bind(this);
}


componentDidMount() {
  
       this.fetchData2();
   }
 
  
  fetchData2() {
       fetch(REQUEST_URL2)
       .then((response) => response.json())
       .then((responseData) => {
           this.setState({
              countrydrop:responseData.countries,
               isLoading: false
           });
        //   alert(this.state.cityname);
        // alert(this.state.citydrop[0])
  //alert(this.state.citydrop)
         
       })
       .done();
   }

     setcities(optionkey)
  {
this.setState({
  textInputValueCity:'',
    citydrop:this.state.countrydrop[optionkey-1].cities,

    });
//alert(this.state.citydrop)
  }



    render() {

  countrylist= this.state.countrydrop.map(function(item) {

    return {
      key:item.id,
      label: item.name,

    };
  });
  

  citylist= this.state.citydrop.map(function(item) {

    return {
      key:index++,
      label:item,

    }
  });

  if(this.state.isLoading){
     return (
        <View style={styles.loader}>
            <CirclesLoader  />
            <TextLoader text="جار التحميل" textStyle={{fontSize:deviceWidth*.08,paddingTop:deviceWidth*.05}} />
        </View>     )}

           return (

 <View style={styles.row}>
      <View style={styles.modal}>

               <ModalPicker
                 data={countrylist}
                    initValue="الدولة"
                    cancelTextStyle={{color:'red'}}
                    onChange={(option)=>{ this.setState({textInputValue:option.label}),this.setcities(option.key)}}>

                    <TextInput
                        style={{borderWidth:1,fontSize:deviceWidth*.045, borderColor:'#FF5B1B', padding:10, height:deviceHight*.07,textAlign:'right'}}
                        editable={false}
                        placeholder="الدولة"
                        underlineColorAndroid="transparent"
                        value={this.state.textInputValue} />

                </ModalPicker>
</View>
      <View style={styles.modal}>

                   <ModalPicker
                    data={citylist}
                    initValue="المدينة"
                    cancelTextStyle={{color:'red'}}
                    selectTextStyle={{color:'red'}}
                    onChange={(option)=>{ this.setState({textInputValueCity:option.label})}}>

                    <TextInput
                        style={{borderWidth:1,fontSize:deviceWidth*.045, borderColor:'#FF5B1B', padding:10, height:deviceHight*.07,textAlign:'right'}}
                        editable={false}
                        placeholder="المدينة"
                        underlineColorAndroid="transparent"
                        value={this.state.textInputValueCity} />

                </ModalPicker>
                </View>

                </View>

           );
    }
}


const styles = StyleSheet.create({
loader:
{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  width:deviceWidth,
  height:deviceHight,
 // top:100,
  //position:'absolute'
 //backgroundColor:rgb(100,100,100,100.3),
},
modal:
{
    padding:10
},
  row: {
   // flex: 1,
  //  justifyContent: 'flex-start',
  //  alignItems: 'center',
    //flexDirection: 'row',
     
        },
});


module.exports = Detial;