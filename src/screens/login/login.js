/* 
  * Name: {Login}
  * Author: {Jhon Lucas}
  * Creation Date: (07/03/2019)
  * Version: {1.0.0}
  * @patch-notes - (Change Log) 
*/

import React,{useState,useEffect} from 'react'
import {View,Text,Image,StyleSheet,Keyboard,Animated,TextInput,TouchableOpacity,KeyboardAvoidingView} from 'react-native'
import Styles from './styles'
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin, GoogleSigninButton,statusCodes } from '@react-native-community/google-signin';

GoogleSignin.configure();

function Login(){
    
    const navigation = useNavigation();

    const[offset] = useState(new Animated.ValueXY({x:0,y:95}));
    const[opacity] = useState(new Animated.Value(0));
    const[logo] = useState(new Animated.ValueXY({x:150,y:150}));

   
    useEffect(()=>{
        keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',keyboardDidShow);
        keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',keyboardDidHide);
        
        Animated.parallel([
            Animated.spring(offset.y,{
                toValue:0,
                speed:4,
                bounciness:20
            }),
            Animated.timing(opacity,{
                toValue:1,
                duration:200,
            })
        ]).start();
    },[]);

    useEffect(()=>{
        isSignedIn
    },[]);

    const isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        if(isSignedIn==true){navigation.navigate('Home')};
      };

    function keyboardDidShow(){
        Animated.parallel([
            Animated.timing(logo.x,{
                toValue:100,
                duration:150
            }),
            Animated.timing(logo.y,{
                toValue:100,
                duration:150
            })
        ]).start();
    }

    function keyboardDidHide(){
        Animated.parallel([
            Animated.timing(logo.x,{
                toValue:150,
                duration:150
            }),
            Animated.timing(logo.y,{
                toValue:150,
                duration:150
            })
        ]).start();

    }

    const _signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
         // this.setState({ userInfo });
         console.log(userInfo)
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
          console.log(error)
        }
      };

      return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
                <Animated.Image 
                style={{
                    width:logo.x,
                    height:logo.y
                }}
                source={require('../../assets/images/logo_light.png')}/>
            </View>
            <Animated.View 
            style={[styles.container, 
                {
                    opacity:opacity,
                    transform:[
                        { translateY:offset.y }
                ]
            }]}>
                <TextInput
                style={styles.input}
                placeholder="Email"
                autoCorrect={false}
                onChangeText={()=>{}}
                />
                 <TextInput
                style={styles.input}
                placeholder="Senha"
                autoCorrect={false}
                onChangeText={()=>{}}
                />
                <TouchableOpacity style={styles.btnSubmit} 
                onPress={() => {
                    navigation.navigate('Home');
                  }}>
                    <Text style={{color:'white'}}>Acessar</Text>
                </TouchableOpacity>
                <View style={{flex:1,paddingTop:10,paddingBottom:20}}>
                    <GoogleSigninButton
                        style={{ width: 192, height: 48 }}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={_signIn}
                        />
                </View>             
            </Animated.View>
        </KeyboardAvoidingView>
      )
    }
  
  
  export default Login;

  const styles = StyleSheet.create({
    background:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#191919'
    },
    containerLogo:{
        flex:1,
        justifyContent:'center',
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
        paddingBottom:50
    },
    input:{
        backgroundColor:'#FFF',
        width:'90%',
        marginBottom:15,
        color:'#222',
        fontSize:17,
        borderRadius:7,
        padding:10
    },
    btnSubmit:{
        backgroundColor:'#653D6B',
        width:'90%',
        height:45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7
    },
    submitText:{
        color:'#FFF',
        fontSize:18
    },
    btnRegister:{
        marginTop:5
    },
    registerText:{
        color:'#FFF'
    }
  })