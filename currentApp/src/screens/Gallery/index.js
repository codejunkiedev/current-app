import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  FlatList,
  Dimensions,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import ImageCard from '../../components/ImageCard';
import AppButton from '../../components/AppButton';

const {height, width} = Dimensions.get('window');
const IMAGE_DATA = [
  {id: 1, image: 'https://picsum.photos/200/300'},
  {id: 2, image: 'https://picsum.photos/200/300'},
];
const GalleryScreen = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };
  const renderItem = ({item}) => (
    <ImageCard imageLink={item.image} onPress={item.image} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <View style={{}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={IMAGE_DATA}
          renderItem={renderItem}
          keyExtractor={index => index.id}
        />
      </View>

      <View
        style={{
          width: '90%',
          alignSelf: 'center',
        //   marginVertical: height * 0.2,
        }}>
        <AppButton title="Delete" />
      </View>
    </SafeAreaView>
  );
};

export default GalleryScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
});
