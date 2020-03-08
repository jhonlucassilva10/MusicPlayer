
import React,{useState,useEffect} from 'react'
import {View,Text,Keyboard,Animated,TextInput,TouchableOpacity,KeyboardAvoidingView} from 'react-native'
import Styles from './styles'
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin} from '@react-native-community/google-signin';
import {UserSignIn} from '../../components'

GoogleSignin.configure();

function Login(){
    
    const navigation = useNavigation();

    const[offset] = useState(new Animated.ValueXY({x:0,y:95}));
    const[opacity] = useState(new Animated.Value(0));
    const[logo] = useState(new Animated.ValueXY({x:150,y:150}));

    //Checks whether the keyboard is active or not and triggers animations
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

      return (
        <KeyboardAvoidingView style={Styles.background}>
            <View style={Styles.containerLogo}>
                <Animated.Image 
                style={{
                    width:logo.x,
                    height:logo.y
                }}
                source={require('../../assets/images/logo_light.png')}/>
            </View>
            <Animated.View 
            style={[Styles.container, 
                {
                    opacity:opacity,
                    transform:[
                        { translateY:offset.y }
                ]
            }]}>
                <TextInput
                style={Styles.input}
                placeholder="Email"
                autoCorrect={false}
                onChangeText={()=>{}}
                />
                 <TextInput
                style={Styles.input}
                placeholder="Senha"
                autoCorrect={false}
                onChangeText={()=>{}}
                />
                <TouchableOpacity style={Styles.btnSubmit} 
                onPress={() => {
                    navigation.navigate('Home');
                  }}>
                    <Text style={{color:'white'}}>Log in</Text>
                </TouchableOpacity>
                <View style={{flex:1,paddingTop:10,paddingBottom:20}}>
                    <UserSignIn navigation={navigation}/>
                </View>             
            </Animated.View>
        </KeyboardAvoidingView>
      )
    }
  
  
  export default Login