import React from 'react'

import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native'

import Slider from '@react-native-community/slider'

import { HelloWave } from '@/components/HelloWave'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          resizeMode="center"
          style={styles.reactLogo}
        />
      }
    >
      <Image
        source={require('@/assets/images/padlock.png')}
        style={styles.padlock}
      />

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">20 cararters</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* <ThemedView style={styles.titleContainer}> */}
      <View
        style={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Slider
          style={{ height: 50, width: '80%', display: 'flex' }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#b50000"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Generate password</Text>
        </TouchableOpacity>
      </View>
      {/* </ThemedView> */}

      {/* <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView> */}
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    gap: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  padlock: {
    width: 300,
    height: 300,
    marginBottom: 60,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#3692BC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 12,
    marginBottom: 30
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  },
})
