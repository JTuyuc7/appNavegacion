import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'yellow',
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    title: {
        fontSize: 30,
        marginBottom: 15
    },
    botonStyle: {
        width: 120,
        height: 45,
        backgroundColor: 'orange',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
    textButton: {
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})