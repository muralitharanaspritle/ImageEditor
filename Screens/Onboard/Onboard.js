import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Center} from '../../config/Alignment';
import {Colors, GradientColors} from '../../config/Color';
import MyButton from '../../Components/Button/Button';
import {useNavigation} from '@react-navigation/native';

const Onboard = () => {
  const Navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: 'space-around',
      }}>
      <View style={{flex: 0.2, ...Center}}>
        <Image
          source={require('../../assets/photoeditor.png')}
        />
        <Text style={{fontSize: 25, color: 'black', fontWeight: 'bold'}}>
          Image Editor
        </Text>
        <Text style={{fontSize: 18, color: 'black'}}>
          by react-native-photo-editor
        </Text>
      </View>
      <View style={{flex: 0.2, justifyContent: 'center'}}>
        <View
          style={{
            flex: 0.4,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View style={{flex: 0.8}}>
            <MyButton
              style={{
                flex: 1,
                flexDirection: 'row',
              }}
              title="Get Started !"
              color={GradientColors.blue}
              titleSize={18}
              borderRadius={30}
              onPress={() => Navigation.navigate('Home')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Onboard;

const styles = StyleSheet.create({});
