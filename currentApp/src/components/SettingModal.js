import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, Pressable, Dimensions, Switch } from 'react-native'
import Dash from 'react-native-dash';
import AppButton from './AppButton';

const { width, height } = Dimensions.get("window")

const SettingModal = () => {
    const [modalVisible, setModalVisible] = useState(true);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.modalText}>Settings</Text>
                            <Text style={styles.modalText}>+</Text>
                        </View>
                        <Dash dashThickness={1} dashColor='#d8dade' style={styles.dottedLine} />

                        <View style={styles.toggleContainer}>
                            <Text style={{ fontSize: 14, }}>
                                Notifications
                            </Text>
                            <Switch
                                trackColor={{ false: "#e9e9eb", true: "#42c758" }}
                                thumbColor="#fff"
                                ios_backgroundColor="#e9e9eb"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                        <AppButton title="Save" />
                        {/* <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable> */}
                    </View>
                </View>
            </Modal>
            <AppButton title="Save" />
            {/* <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable> */}
        </View>
    )
}

export default SettingModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        width
    },
    modalView: {
        width: width - 30,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        fontSize: 18,
        fontWeight: "bold",
        // textAlign: "center"
    },
    dottedLine: {
        alignSelf: 'center',
        width: width - 40,
        height: 1,
        marginBottom: 10,

    },
    toggleContainer:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    }

})
