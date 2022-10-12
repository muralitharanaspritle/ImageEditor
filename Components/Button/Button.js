import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Center} from '../../config/Alignment';
const MyButton = props => {
  return (
    <TouchableOpacity {...props}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          flex: 1,
          borderRadius: props.borderRadius ? props.borderRadius : 10,
          ...Center,
        }}
        colors={props.color}>
        <Text
          style={{
            color: 'white',
            fontSize: props.titleSize ? props.titleSize : 15,
            fontWeight: 'bold',
          }}>
          {props.title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({});
