import React, {useEffect, useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

import PhotoEditor from 'react-native-photo-editor';
import MyButton from './Components/Button/Button';
import {Center} from './config/Alignment';
var RNFS = require('react-native-fs');
var ImagePicker = require('react-native-image-picker');
const App = () => {
  const [downloadPath, setDownloadPath] = useState('');
  const [documentPath, setDocumentPath] = useState('');
  const [externalPath, setExternalPath] = useState('');
  const [editedImage, setEditedImage] = useState('');

  useEffect(() => {
    setDocumentPath(RNFS.DocumentDirectoryPath);
    setDownloadPath(RNFS.DownloadDirectoryPath);
    setExternalPath(RNFS.ExternalStorageDirectoryPath);
  }, []);

  const getDocumentContent = async () => {
    const reader = await RNFS.readDir(documentPath);
    console.log('Document files', reader);
  };

  const getDownlaodContent = async () => {
    const reader = await RNFS.readDir(downloadPath);
    console.log('Download files', reader);
  };

  const makeDirectory = async () => {
    const mkdir = await RNFS.mkdir(downloadPath + '/newpath');
    console.log('New directory added', mkdir);
  };

  const makeFile = async () => {
    try {
      //create a file at filePath. Write the content data to it
      await RNFS.writeFile(
        downloadPath + '/newtext.txt',
        'Hey this is Muralitharan',
        'utf8',
      );
      console.log('written to file');
    } catch (error) {
      //if the function throws an error, log it out.
      console.log(error);
    }
  };

  const readFile = async () => {
    const file = await RNFS.readFile(downloadPath + '/newtext.txt');
    console.log('Readed file', file);
  };

  const deleteFile = async () => {
    try {
      await RNFS.unlink(downloadPath + '/newtext.txt'); //delete the item present at 'path'
      console.log('file deleted');
    } catch (error) {
      console.log(error);
    }
  };

  const openCamera = () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      cropping: true,
    };

    ImagePicker.launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let path = response.assets[0].uri.slice(6);
        console.log(path, 'Image path');
        PhotoEditor.Edit({
          path: path,
          onDone: async res => {
            console.log('On Done image edited', res);
            let path = res.slice(1);
            setEditedImage(path);
          },
          onCancel: res => {
            console.log('On cancel ', res);
          },
        });
      }
    });
  };

  const pickImage = async () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      cropping: true,
    };
    await ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let path = response.assets[0].uri.slice(6);
        console.log(path, 'Image path');

        PhotoEditor.Edit({
          path: path,
          onDone: async res => {
            console.log('On Done image edited', res);

            setEditedImage(path);
          },
          onCancel: res => {
            console.log('On cancel ', res);
          },
        });
      }
    });
  };
  return (
    <View style={{flex: 1, ...Center}}>
      <View style={{flex: 1.5, ...Center, flexDirection: 'row'}}>
        <View style={{flex: 0.9}}>
          <View style={{flex: 0.99}}>
            {editedImage && (
              <Image
                source={{uri: 'file://' + editedImage}}
                resizeMode="contain"
                style={{
                  flex: 1,
                  borderRadius:10
                }}
              />
            )}
          </View>
        </View>
      </View>
      <View style={{flex: 1, ...Center, flexDirection: 'row'}}>
        <View style={{flex: 0.8}}>
          <MyButton
            title="Take Photo"
            style={{
              flex: 0.15,
              flexDirection: 'row',
              marginBottom: 10,
            }}
            color={['#30cfd0', '#330867']}
            onPress={() => openCamera()}
          />
          <MyButton
            title="Pick Image"
            style={{
              flex: 0.15,
              flexDirection: 'row',
            }}
            color={['#30cfd0', '#330867']}
            onPress={() => pickImage()}
          />
        </View>
      </View>
      {/* <Text>Document path={documentPath}</Text>
      <Text>Download path={downloadPath}</Text>
      <Text>External Path={externalPath}</Text>
      {editedImage && (
        <Image
          source={{uri: 'file://' + editedImage}}
          style={{
            width: 300,
            height: 300,
            borderRadius: 10,
            alignSelf: 'center',
          }}
        />
      )}
      <Button
        title="get download content"
        onPress={() => getDownlaodContent()}
      />
      <Button
        title="get document content"
        onPress={() => getDocumentContent()}
      />
      <Button title="Make directory" onPress={() => makeDirectory()} />
      <Button title="Make File" onPress={() => makeFile()} />
      <Button title="Read a File" onPress={() => readFile()} />
      <Button title="Delete File" onPress={() => deleteFile()} />
      <Button title="Open Camera" onPress={() => openCamera()} color="red" />
      <Button title="Open Gallery" onPress={() => pickImage()} color="red" /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
