import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 5,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        backgroundColor: 'transparent'
    },
    title: {
        fontSize: 24,
        marginLeft: 20,
        color: 'black',
        flex: 1
    }
})