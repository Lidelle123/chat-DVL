import { StyleSheet, View, Text} from "react-native"


const SndHeader = () => {
    return(
        <View style={sndHeaderStyle.container}>
           <Text style={sndHeaderStyle.text}>Messages</Text>
           <Text style={sndHeaderStyle.text}>Groups</Text>
           <Text style={sndHeaderStyle.text}>Story</Text>
           <Text style={sndHeaderStyle.text}>calls</Text>
        </View>
    )
}

const sndHeaderStyle= StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin:10,
    },
    text:{
        color:'white',
    },
})

export default SndHeader