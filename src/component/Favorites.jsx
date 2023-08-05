import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { data } from '../../backend/data';
import Discussions from './Discussions';

const Favorites = () => {
    return(
        <>


            <View style={favoriteStyle.container}>
                <View style={favoriteStyle.header} >
                    <Text style={{ color:'white', fontWeight: 'bold', marginLeft:0  }}>Favorites Contacts</Text>
                    <TouchableOpacity>
                        <Ionicons name='menu-outline' style={{ color:'white', fontWeight: 'bold',marginRight:20 }}></Ionicons>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal>
                    {data && data.map((item, index) => (
                    <View key={index} style={favoriteStyle.itemContainer}>
                        <View style={favoriteStyle.imageContainer}>
                        <Image
                            source={item.image}
                            style={favoriteStyle.image}
                        />
                        </View>
                        <Text style={favoriteStyle.name}>{item.name}</Text>
                    </View>
                    ))}
                </ScrollView>
                <View style={{ marginTop:10 }}>
                    <Discussions/>
                </View>
        </View>
        </>
    )
}

const favoriteStyle= StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20,
        marginLeft:30,
        marginTop:20,
        
    },

    container:{
        backgroundColor: '#5f9ea0',
        padding:6,
        marginTop:30,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
    },
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10, 
      },
      imageContainer: {
        width: 55, 
        height: 55, 
        borderRadius: 30,
        borderWidth: 10,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
      },
      image: {
        width: 50,
        height: 50,
        borderRadius: 30,
      },
      name: {
        color: 'white',
        textAlign: 'center',
      },
  
})

export default Favorites