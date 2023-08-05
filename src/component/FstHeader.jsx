import { StyleSheet, Text, TouchableOpacity, View, Dimensions, StatusBar } from "react-native"
import {Ionicons} from '@expo/vector-icons'; 
import SndHeader from "./SndHeader";

const FstHeader = () => {

    return(
        <>
            

            <View style={fstHeaderStyle.container}>
                <View style={fstHeaderStyle.iconsContainer}>
                    <TouchableOpacity>
                        <Ionicons name='menu-outline' style={fstHeaderStyle.icons}></Ionicons>
                    </TouchableOpacity>
                    <Text style={fstHeaderStyle.text}>On Djoss</Text>
                    <TouchableOpacity>
                        <Ionicons name='search-outline' style={fstHeaderStyle.text}></Ionicons>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <SndHeader/>
            </View>
        </>
    );
}

const fstHeaderStyle = StyleSheet.create({
    container: {
        //flexDirection: 'row',
        //alignItems: 'center',
        width: Dimensions.get("window").width,
        padding: 20,
    },
    iconsContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icons: {
        fontSize:20,
        color:'white',
    },
    text: {
        color: 'white',
        fontSize:20,
    },

});

export default FstHeader