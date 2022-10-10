/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import PhotoEditor from 'react-native-photo-editor';

const App = () => {
  const edit = () => {
    PhotoEditor.Edit({
      path: RNFS.DocumentDirectoryPath + '/photo.jpg',
    });
  };
  return (
    <View style={{flex: 1}}>
      <Button title="Edit" onPress={() => edit()} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
