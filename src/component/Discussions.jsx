import {StyleSheet, View, Text, ScrollView, Image, Dimensions} from 'react-native';

import {data} from '../../backend/data';

const Discussions = () => {
    return(
        <View style={discussionStyle.container}>
            <View style={{ marginTop:10, width:Dimensions.get("window").width,}}>
                <ScrollView >
                    {data && data.map((item, index) => (
                        <View key={index}>
                                <View style={discussionStyle.itemContainer}>
                                    <Image 
                                        source={item.image}
                                        style={discussionStyle.image}
                                    />
                                    <View style={{ flex:1, justifyContent:'center', marginLeft:15 ,}}>
                                        <Text>{item.name}</Text>
                                        <Text>{item.messages[item.messages.length - 1].text}</Text>
                                    </View>
                                    <View style={{flex:1, alignItems:'flex-end', justifyContent:'space-evenly'}}>
                                        <Text style={{ fontSize:10 }}>{item.messages[item.messages.length - 1].date}</Text>
                                        {item.hasNewMessages && item.hasNewMessages.map((item, index)=>(
                                            <View  key={index} style={{ borderRadius:50, width:10, height:10, backgroundColor: 'green', marginRight:12,alignItems:'center'}}><Text style={{ color:'white', fontSize:6 }}>{
                                                item.number}</Text></View>
                                        ))}
                                            
                                        
                                    </View>
                                </View>
                            </View>
                        
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}

const discussionStyle= StyleSheet.create({
    container:{
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        backgroundColor: '#faf0e6',
        marginTop:15,
        width:Dimensions.get("window").width,
      },
      itemContainer:{
        flexDirection:'row',
        marginLeft:15, 
        marginRight:20,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        
      },
      image:{
        width:50,
        height:50,
        borderRadius:30,
      },
})

export default Discussions;