import { View, Text, Image, StyleSheet, ImageBackground, TextInput, TouchableOpacity, SafeAreaView } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Header({ navigation }) {
    const headleMenu = () => {

    }

    const headleProfile = () => {

    }

    return <>
        <View style={style.header}>
            <TouchableOpacity onPress={headleMenu} style={style.btn}>
                <Ionicons name="menu-sharp" size={50} color="white" />
            </TouchableOpacity>
            <Text style={style.text}>Bem vindo</Text>
            <TouchableOpacity onPress={headleProfile} style={style.btn}>
                <FontAwesome name="user-circle" size={50} color="white" />
            </TouchableOpacity>
        </View>
    </>
}
let style = StyleSheet.create({
    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    main: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btn:{
        color: '#fff',
    },
    text:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})