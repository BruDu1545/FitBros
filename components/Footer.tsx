import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from "react-native";

import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Footer({ select, navigation }) {

    return <>
        <View style={style.footer}>
            <TouchableOpacity style={style.center} onPress={() => navigation.navigate("Home")}>
                <Entypo name="home" size={30} color={select === "Home" ? "#ffbb00ff" : "#1c1c1c"} />
            </TouchableOpacity>

            <TouchableOpacity style={style.center} onPress={() => navigation.navigate("Finance")}>
                <MaterialIcons name="attach-money" size={30} color={select === "Finance" ? "#ffbb00ff" : "#1c1c1c"} />
            </TouchableOpacity>

            {/* Botão central "flutuante" */}
            <View style={style.fabWrapper}>
                <TouchableOpacity style={style.fab} onPress={() => navigation.navigate("Works")}>
                    <AntDesign name="plus" size={28} color="white" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={style.center} onPress={() => navigation.navigate("Works")}>
                <MaterialIcons name="work" size={30} color={select === "Works" ? "#ffbb00ff" : "#1c1c1c"} />
            </TouchableOpacity>

            <TouchableOpacity style={style.center} onPress={() => navigation.navigate("Shopping")}>
                <Fontisto name="shopping-basket" size={30} color={select === "Shopping" ? "#ffbb00ff" : "#1c1c1c"} />
            </TouchableOpacity>
        </View>
    </>
}

const style = StyleSheet.create({
    footer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 12,
        backgroundColor: "white",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingBottom: 10,
    },
    fabWrapper: {
        bottom: 25,          
        alignSelf: "center", 
    },
    fab: {
        backgroundColor: "#ffbb00ff",
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
        shadowColor: "#000", 
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    center: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
})