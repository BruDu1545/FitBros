import { View, Text, Image, StyleSheet, ImageBackground, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home({ navigation }) {
    return <>
        <ImageBackground source={require('../assets/bg.jpg')} style={{ position: 'absolute', width: '100%', height: '100%', }} resizeMode="cover">
            <SafeAreaView style={style.main}>
                <Header navigation={"Home"} />
                <Text>AAAAAAAAAAAAAAAAA</Text>
                <Footer navigation={"Home"} />
            </SafeAreaView>
        </ImageBackground>
    </>
}
let style = StyleSheet.create({
    main: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 25
    },
})