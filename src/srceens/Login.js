import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import  { Component, useState } from 'react';



export const Login = ({navigation}) => {


  const [Uname, setUsername] = useState('');
  const [Upass, setPassword] = useState('');


  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  // };


  const showMyCredentials =() =>{
    alert('Hy! ' + Uname  + '\n Your Password is' + Upass  );
  }


  const forgotPass = () => {
    alert('Oh! You have fogoted  Please Check your mail' );
  }
  // const Counter = ({ countercatchhere }) => {
  //   return <Text>Counter: {countercatchhere}</Text>;
  // };



  return (
    <View >
      {/* <Text style={{  fontSize: 25, height:"30%",width:"100%", backgroundColor:'red' }}> LOGIN </Text>
      <Text style={{fontSize: 15}}>PLEASE FIRST SIGN UP TO CONTINUE</Text>
      <View style={{ width: '80%', margin: 20, height: "70%", width: "100%"}}>
        <TextInput placeholder="Email"  placeholderTextColor="#000"style={{  backgroundColor: '#eaeaea',paddingHorizontal: 20, }} />
        <TextInput placeholder="Password" placeholderTextColor="#000" style={{ backgroundColor: '#eaeaea',paddingHorizontal: 20, marginTop: 20,
          }} />
        <View style={{ marginTop: 20, height: "20%", width: "100%", backgroundColor: 'gray'}} />
        <Button title="Login" color="#fF0000" onPress={() => { navigation.navigate('Register'); }} />
      </View> */}

      <View style={{ width: '100%', height: '25%', backgroundColor: '#3e3e3e', flexDirection: "row", }}>
       
       
        <View style={{
          backgroundColor: "#ff647c", flex: 0.8, borderWidth: 0,
          borderBottomLeftRadius: 200,
          borderBottomRightRadius: 200, shadowOffset: { width: 10, height: 10, },
          shadowColor: '#f5f5f5',
          shadowOpacity: 1.0, }} >
          

          <Text style={{
            backgroundColor: '#f84e69', marginTop: 70, marginLeft: 90,   height: 30,
            width: 30,
            borderRadius: 30,
}}> </Text>

          <Text style={{
            backgroundColor: '#f84e69', marginTop: -50, marginLeft: 150, height: 70,
            width: 70,
            borderRadius: 70,
          }}>
            {/* <Counter countercatchhere={count} /> */}
             </Text>
 </View>






        <View style={{ flex: 0.2 }} >
          <View style={{ height: 50, width: '100%', backgroundColor: '#f94f6a', borderBottomRightRadius: 400, borderBottomLeftRadius: 200}}></View>
        </View>
      
      
      
      
      </View>





      <View style={{ width: '100%', height: '50%', backgroundColor:'#3e3e3e'  }}>


        <View style={{ flexDirection: 'row', marginTop: 10 }} >
          <Text onPress={() => { navigation.navigate('Login'); }} style={{ flex: 0.2, marginLeft: 20, color: 'white', fontSize: 18 }}>LOGIN</Text>
      
          <Text onPress={() =>{ navigation.navigate('Register') }} style={{ flex: 0.2, color: 'gray' , fontSize: 16 }}>REGISTER</Text>
        </View>



        <View style={{
          backgroundColor: '#2e2c2c', color: 'white', height: 25, marginTop: 40, width: '90%', alignSelf: 'center'
        }}><Text style={{ color:'#f84e69', fontSize:20, paddingTop: 4, paddingLeft: 10 }}>User Name</Text></View>

        <TextInput onChangeText={(text) => setUsername(text)}   style={{
          backgroundColor: '#2e2c2c'  , color:'white' , height: 40 , width:'90%', alignSelf:'center' }} />



        <View style={{
          backgroundColor: '#2e2c2c', color: 'white', height: 25, marginTop: 40, width: '90%', alignSelf: 'center'
        }}><Text style={{ color: '#f84e69', fontSize: 20, paddingTop: 4, paddingLeft: 10 }}>Password</Text></View>

        <TextInput onChangeText={(text) => setPassword(text)} secureTextEntry={true} style={{
          backgroundColor: '#2e2c2c', color: 'white', height: 40, width: '90%', alignSelf: 'center'
        }} />









        <View style={{
         color: 'white', height: 40 ,width: '90%', alignSelf: 'center', marginTop: 9
        }}><Text onPress={forgotPass} style={{ color: '#f84e69', fontSize: 20, alignSelf:'flex-end'}}>Forgot Password?</Text></View>




        <View   style={{  width:'90%' , height: 50  , alignSelf:'center' , borderRadius: 100, backgroundColor:'#fa526c'}}>
          <Text  onPress={showMyCredentials}
         
           style={{ fontSize: 22, marginTop: 5, alignSelf: 'center' , color:'white' }}> Login</Text>
        </View> 
  
      




        <View style={{
          color: 'white', height: 40, width: '90%', alignSelf: 'center', marginTop: 12
        }}><Text onPress={() => { navigation.navigate('Register') }} style={{ color: 'white', fontSize: 15, alignSelf: 'center' }}>Don't have an account? Creat</Text></View>



      </View>





   





      <View style={{ width: '100%', height: '25%', backgroundColor:'#3e3e3e' }}>
       


      
        <View style={{ height: 100, marginTop:90, marginRight:40  ,  alignSelf:'flex-end' ,width: '22%',backgroundColor: '#f94f6a', borderTopRightRadius: 400, borderTopLeftRadius: 400 }}>
          <Text style={{
            backgroundColor: '#ed2d4b', marginTop: 30, height: 30, marginLeft: 20  ,
            width: 30,
            borderRadius: 30,
          }}></Text>

          <Text style={{
            backgroundColor: '#ed2d4b', marginTop: 10, height: 10, marginLeft: 60, marginTop: -20,
            width: 10,
            borderRadius: 10,
          }}> </Text>
          
        </View>
     
      </View>
       </View>
  );
};
