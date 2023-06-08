import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
    container: {

    },
    image: {
        width: width,
        height: height / 4
    },
    titleContainer: {
        marginVertical: 5,
        padding: 5
    },
    titleText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'darkred'
    },
    titleSubtext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'darkred'
    },
    contentContainer: {
        padding: 5
    },
    contentText: {
        fontSize: 18
    },
    seperator: {
        borderWidth: 1,
        borderColor: '#333',
        height: 1,
        opacity: 0.3
    }
})