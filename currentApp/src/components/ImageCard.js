import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import AppButton from './AppButton'
const { width, height } = Dimensions.get("window")
const ImageCard = (props) => {
    const [selectImage, setSelectImage] = useState(props.selected)
    console.log(selectImage)
    return (
        <View styles={styles.container}>

            <View style={{ overflow: "hidden", marginHorizontal: 10 }}>
                <Image resizeMode="cover" style={styles.image} source={{ uri: props.imageLink}} />

                <TouchableOpacity
                activeOpacity={0.8}
                 style={styles.pressable} onPress={props.onPress}>
                    <Text style={styles.title}>{props.selected?"ADDED":"ADD  +"}</Text>
                </TouchableOpacity>


            </View>
            <View
                style={{
                    width: '90%',
                    alignSelf: 'center',
                    marginVertical: height * 0.2,
                }}>
               
            </View>


        </View>
    )
}

export default ImageCard

const styles = StyleSheet.create({
    container: {
        // width: 200,
        // height: 250,

        // borderRadius: 10,


    },
    image: {
        width: width / 2,
        height: 250,
        borderRadius: 10,
        overflow: "hidden",

    },
    pressable: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: '-6%',
        justifyContent: 'center',
        alignItems: 'center',
        width: 130,
        height: 50,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    title: { bottom: 8, fontWeight: 'bold', textAlign: "center" }
})
