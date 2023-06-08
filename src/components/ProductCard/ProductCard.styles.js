import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 10
    },
    image: {
        height: height / 5,
        width: width / 1.02,
        resizeMode: 'cover',
        borderRadius: 30,
    },
    inner_container: {
        padding: 10,
        position: 'absolute',
        top: height / 6.6,
        width: width / 1.02,
        height: height / 20,
        backgroundColor: "rgba(0,0,0,0.3)",
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        alignItems: "flex-end"
    },
    title: {
        color: 'white',
        fontWeight: '400',
        fontSize: 18,
    }
})