import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {Text} from './text';
import {TEXT_BASE_1, TEXT_BASE_2} from '../../variables';

export type DataContentSplittedProps = {
  to: string[];
  title: string;
  style?: ViewStyle;
  reversed?: boolean;
};

export const DataContentSplitted = ({
  to,
  title,
  style,
  reversed = false,
}: DataContentSplittedProps) => {
  return (
    <View style={[reversed && page.reverse, style]}>
      <Text t11 style={page.address}>
        <Text t11 style={page.address}>
          {to[0]}
        </Text>
        <Text t11 style={{color: TEXT_BASE_2}}>
          {to[1]}
        </Text>
        <Text t11>{to[2]}</Text>
      </Text>
      <Text t11 style={{color: TEXT_BASE_2}}>
        {
          <Text t11 style={{color: TEXT_BASE_2}}>
            {title}
          </Text>
        }
      </Text>
    </View>
  );
};
const page = StyleSheet.create({
  address: {
    minHeight: 22,
    marginBottom: 2,
    textAlign: 'left',
    color: TEXT_BASE_1,
    width: '100%',
  },
  reverse: {flexDirection: 'column-reverse'},
});