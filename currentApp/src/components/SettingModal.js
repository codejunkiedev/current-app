import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, Pressable, Dimensions, Switch, Image, TouchableOpacity } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from "moment";
import Dash from 'react-native-dash';
import AppButton from './AppButton';

const { width, height } = Dimensions.get("window")

const SettingModal = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [dateSelected, setDateSelected] = useState(new Date());
    const [allImages, setAllImages] = useState([]);
    const [currentId, setCurrentId] = useState('');
    const [modalVisible, setModalVisible] = useState(true);
    const [isEnabled, setIsEnabled] = useState(false);
    const [amAndPmSelected, setAmAndPmSelected] = useState(moment().format('h:mm') == "am" ? false : true)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    console.log("switch button", isEnabled)


    // var today = new Date();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var time = moment().format('h:mm');
    // var dateWithouthSecond = new Date();
    // var time = dateWithouthSecond.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    console.log("time", time)
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = date => {
        console.warn('A date has been picked: ', date);
        setDateSelected(moment(date).format("yyyy-MM-DD"));
        hideDatePicker();
    };


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
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <Text style={styles.modalText}>Settings</Text>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                <Image style={{ width: 15, height: 15 }} source={require("../assets/Images/cross.png")} />
                            </TouchableOpacity>

                        </View>
                        <Dash dashThickness={1} dashColor='#d8dade' style={styles.dottedLine} />

                        <View style={styles.toggleContainer}>
                            <Text style={styles.fontStyle}>
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
                        {isEnabled &&




                            <View style={{
                                marginVertical: 20,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: 30,
                            }}>
                                <TouchableOpacity style={styles.timeButton} onPress={showDatePicker}>
                                    <Text style={styles.fontStyle}>{moment().format('h:mm')}</Text>
                                </TouchableOpacity>

                                <View style={styles.amAndPm}>
                                    <TouchableOpacity
                                        onPress={() => setAmAndPmSelected(!amAndPmSelected)}
                                        style={[styles.AmAndPmSelected, { backgroundColor: amAndPmSelected ? null : "#fff" }]}>
                                        <Text style={styles.fontStyle}>AM</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => setAmAndPmSelected(!amAndPmSelected)}
                                        style={[styles.AmAndPmSelected,
                                        { backgroundColor: amAndPmSelected ? "#fff" : null }]}>
                                        <Text style={styles.fontStyle}>PM</Text>
                                    </TouchableOpacity>
                                </View>


                            </View>
                        }
                        <AppButton title="Save" />

                    </View>
                </View>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="time"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
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
    fontStyle: { fontSize: 14, fontWeight: 'bold' },
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
    },
    timeButton: {
        backgroundColor: "#EEEEEF",
        paddingHorizontal: 10,
        paddingVertical: 8,
        width: width * 0.45,
        height: 40,
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#031433",

    },
    amAndPm: {
        flexDirection: 'row',
        // width: width * 0.15,
        height: 40,
        alignItems: 'center',
        backgroundColor: '#EEEEEF',
        paddingHorizontal: 5,
        borderRadius: 10,

    },
    AmAndPmSelected: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
        marginHorizontal: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 5,
    }

})
