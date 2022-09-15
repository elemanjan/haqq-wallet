import React from 'react';
import {
  Image,
  ImageProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import Svg, {G, Path, Rect} from 'react-native-svg';
import {SvgProps} from 'react-native-svg/src/elements/Svg';
import {WalletCardStyle} from '../../models/wallet';

export type CardProps = {
  children?: React.ReactNode;
  width: number;
  style?: StyleProp<ViewStyle> | undefined;
  variant?: WalletCardStyle;
  borderRadius?: number;
};

const cards = {
  [WalletCardStyle.defaultGreen]: require('../../../assets/images/card-green.png'),
  [WalletCardStyle.defaultBlack]: require('../../../assets/images/card-black.png'),
  [WalletCardStyle.defaultBlue]: require('../../../assets/images/card-blue.png'),
  [WalletCardStyle.defaultYellow]: require('../../../assets/images/card-yellow.png'),
};

export const Card = ({
  children,
  width,
  style,
  variant = WalletCardStyle.defaultGreen,
  borderRadius = 16,
}: CardProps) => {
  return (
    <View
      style={[
        {
          width: width,
          height: width * 0.632835821,
          padding: 16,
          borderRadius,
          overflow: 'hidden',
        },
        style,
      ]}>
      <Image
        source={cards[variant]}
        style={[
          {width: width, height: width * 0.632835821},
          StyleSheet.absoluteFillObject,
        ]}
      />
      {children}
    </View>
  );
};

export const CardMask = ({style}: ImageProps) => (
  <Image
    source={require('../../../assets/images/card-maks.png')}
    style={style}
  />
);