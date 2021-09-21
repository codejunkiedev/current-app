import React, {useState,useEffect} from 'react';
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
import CameraRoll from "@react-native-community/cameraroll";
import moment from "moment";
import ImageCard from '../../components/ImageCard';
import AppButton from '../../components/AppButton';

const {height, width} = Dimensions.get('window');
const IMAGE_DATA = [
  {id: 1, image: 'https://picsum.photos/200/300'},
  {id: 2, image: 'https://picsum.photos/200/300'},
];
const GalleryScreen = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [refreshData, setRefreshData] = useState(false);
  const [dateSelected, setDateSelected] = useState(new Date());
  const [allImages, setAllImages] = useState([]);
  const [currentId, setCurrentId] = useState('');

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
  useEffect(() => {
    getImagesFromCameraRoll()
  }, [dateSelected])
  useEffect(() => {
    getImagesFromCameraRoll()
  }, [])
  const getImagesFromCameraRoll=()=>{
    console.log("dateSelected",dateSelected)
    var start = new Date(dateSelected);
    start = start.setUTCHours(0,0,0,0);

    var end = new Date(dateSelected);
    end = end.setUTCHours(23,59,59,999);
    CameraRoll.getPhotos({first:50,assetType:'Photos',fromTime:start,toTime:end}).then(
      (data) =>{
        const assets = data.edges;
        let id = 0;
        const images = assets.map((asset) => {
          id++;
          return {...asset.node.image,id:id++,selected:false} 
          
        });
        console.log("Images",images,images.length)
        setAllImages(images)
      },
      (error) => {
        console.warn(error);
      }
    );
  }
  const addImage = (id)=>{
    let temp = allImages;
    temp.map((val)=>{
      if(val.id == id)
      {
        val.selected =true
      }
    })
    setAllImages(temp)
    setRefreshData(!refreshData)
    setCurrentId(id)
    console.log("selected")
  }
  const removeImage = ()=>{
    let temp = allImages;
    temp.map((val)=>{
      if(val.id == currentId)
      {
        val.selected =false
      }
    })
    setAllImages(temp)
    setRefreshData(!refreshData)
    console.log("selected")
  }

  const renderItem = ({item}) => (
    <ImageCard selected={item.selected} imageLink={item.uri} onPress={()=>addImage(item.id)} />
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
          data={allImages}
          renderItem={renderItem}
          keyExtractor={index => index.id}
          extraData={refreshData}
        />
      </View>

      <View
        style={{
          width: '90%',
          alignSelf: 'center',
        //   marginVertical: height * 0.2,
        }}>
        <AppButton onPress={removeImage} title="Delete" />
      </View>
    </SafeAreaView>
  );
};

export default GalleryScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
});
