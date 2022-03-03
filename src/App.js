import React, { useState } from "react";
import { StatusBar, image } from 'react-native'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import { ThemeProvider } from "styled-components/native";
import { theme } from "./theme";
import AppLoading from 'expo-app-loading'
import Navigation from './navigations';
import { images } from './utils/images';
import { ProgressProvider, UserProvider } from './contexts';

/* 캐시-이미지 */
const cacheImages = images => {
  return images.map
    (image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      }
      else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
};

/* 캐시-폰트 */
const cacheFonts = fonts => {
  return fonts.map(font => Font.loadAsync(font));
};


/* App */
const App = () => {

  const [isReady, setIsReady] = useState(false);

  const _loadAssets = async () => {
    const imageAssets = cacheImages([require('../assets/splash.png')]);
    const fontAssets = cacheFonts([]);

    await Promise.all([...imageAssets, ...fontAssets]);
  };


  return isReady ? (
    <ThemeProvider theme={theme}>
      <ProgressProvider>
        <StatusBar barStyle="dark-content" />
        <Navigation />
      </ProgressProvider>
    </ThemeProvider>
  ) : (
    <AppLoading
      startAsync={_loadAssets}
      onFinish={() => setIsReady(true)}
      onError={console.warn}
    />
  );

};


/* Export */
export default App;