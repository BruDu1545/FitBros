import { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ImageBackground, TextInput, TouchableOpacity, SafeAreaView } from "react-native";

import PopUp from "../components/PopUp";
import loginAuth from "../config/Login";
import About from "./About";
import Register from "./Register";
import { getLoggedUser } from '../config/auth'

export default function Login({ navigation }) {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [isTrue, setIsTrue] = useState(false)
    const [isText, setIsText] = useState('')

    useEffect(() => {
        const checkUser = async () => {
            const user = await getLoggedUser();
            if (user) {
                navigation.replace("Home");
            }
        };
        checkUser();
    }, [])

    const headleLogin = async () => {
        const results = await loginAuth(login, password);

        if (results && results.success) {
            setIsTrue(true)
            setIsText('Aprovado')

            setTimeout(() => {
                navigation.navigate("Home")
            }, 3000)
        } else {
            setIsTrue(false)
            setIsText('NAO')
        }
        console.log(results)

    }
    const headleAbout = () => {
        navigation.navigate("About")
    }
    const headleRegister = () => {
        navigation.navigate("Register")
    }

    return <>
        <ImageBackground source={require('../assets/bg.jpg')} style={{ position: 'absolute', width: '100%', height: '100%', }} resizeMode="cover">
            <SafeAreaView style={style.main}>
                <View style={style.hero}>
                    <Image style={{ width: 250, height: 250, }} source={require('../assets/favicon.png')}></Image>

                    <View style={style.form}>
                        <TextInput style={style.input} onChangeText={setLogin} placeholder="Login" placeholderTextColor="#000"></TextInput>

                        <TextInput style={style.input} onChangeText={setPassword} secureTextEntry placeholder="Senha" placeholderTextColor="#000"></TextInput>

                        <TouchableOpacity onPress={headleLogin} style={style.btn}>
                            <Text style={style.btnText}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.down}>
                    <TouchableOpacity onPress={headleAbout} style={style.link}>
                        <Text style={style.linkTx}>Quem Somos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={headleRegister} style={style.link}>
                        <Text style={style.linkTx}>Não tenho conta</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
            <PopUp status={isTrue} text={isText} />
        </ImageBackground>
    </>
}

let style = StyleSheet.create({
    main: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    hero: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 15,
        marginTop: '20%'
    },
    form: {
        width: '80%',
        display: 'flex',
        gap: 15,
        marginTop: '20%'
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingTop: 15,
        paddingBottom: 15,
    },
    btn: {
        backgroundColor: '#fe9d19',
        borderRadius: 15,
        paddingTop: 10,
        paddingBottom: 10,
        display: 'flex',
        alignItems: 'center'
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    down: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        paddingHorizontal: 35
    },
    link: {
        borderRadius: 15,
        paddingTop: 10,
        paddingBottom: 10,
        display: 'flex',
        alignItems: 'center'
    },
    linkTx: {
        fontSize: 15,
        fontWeight: 800,
        color: '#fe9d19'
    }
})