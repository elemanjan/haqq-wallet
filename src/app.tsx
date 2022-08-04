/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './screens/home';
import {wallets, WalletsContext} from './contexts/wallets';
import {DetailsScreen} from './screens/details';
import {SplashScreen} from './screens/splash';
import {LoginScreen} from './screens/login';
import {PasswordScreen} from './screens/password';
import {Create1Screen} from './screens/create-1';
import {Create2Screen} from './screens/create-2';
import {Create3Screen} from './screens/create-3';
import {RestoreScreen} from './screens/restore';
import {ImportWalletScreen} from './screens/import-wallet';
import {SendTransactionScreen} from './screens/send-transaction';

const Stack = createNativeStackNavigator();

export const App = () => {
  const navigator = useNavigationContainerRef();

  useEffect(() => {
    wallets.init().then(next => {
      navigator.navigate(next);
    });
  }, [navigator]);

  return (
    <WalletsContext.Provider value={wallets}>
      <NavigationContainer ref={navigator}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="splash" component={SplashScreen} />
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Group screenOptions={{presentation: 'modal'}}>
            <Stack.Screen name="details" component={DetailsScreen} />
            <Stack.Screen name="import-wallet" component={ImportWalletScreen} />
            <Stack.Screen
              name="send-transaction"
              component={SendTransactionScreen}
            />
          </Stack.Group>
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="restore" component={RestoreScreen} />
          <Stack.Screen name="create-1" component={Create1Screen} />
          <Stack.Screen name="create-2" component={Create2Screen} />
          <Stack.Screen name="create-3" component={Create3Screen} />
          <Stack.Screen name="password" component={PasswordScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </WalletsContext.Provider>
  );
};
