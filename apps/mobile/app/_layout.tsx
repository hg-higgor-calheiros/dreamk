import client from '@/config/GraphQLConfig';
import { ProvedorDrinks } from '@/data/contexts/ContextoDrinks';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { ApolloProvider } from  '@apollo/client'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

return (
    <ApolloProvider client={client}>
      <ThemeProvider value={DarkTheme}>
          {/* <ProvedorDrinks> */}
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
            <StatusBar style="auto" />
          {/* </ProvedorDrinks> */}
      </ThemeProvider>
    </ApolloProvider>
  );
}
