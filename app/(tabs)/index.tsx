import React, { useState } from 'react'

import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Clipboard,
} from 'react-native'

import Slider from '@react-native-community/slider'

import { HelloWave } from '@/components/HelloWave'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'

const charset = 'abcdefghijklmnopqrstuvwxyz0123456789'

const copyToClipboard = (textToBeCopied: string) => {
  Clipboard.setString(textToBeCopied)
}

export default function HomeScreen() {
  const [carartersSize, setCarartersSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState('')

  const generatePassword = () => {
    let password = ''
    for (let i = 0, n = charset.length; i < carartersSize; i++) {
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password)
    copyToClipboard(password)
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/padlock.png')}
          resizeMode="center"
          style={styles.reactLogo}
        />
      }
    >

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{carartersSize} cararters</ThemedText>
        <HelloWave />
      </ThemedView>

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
          value={carartersSize}
          onValueChange={(value) =>
            setCarartersSize(parseInt(value).toFixed(0))
          }
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() => generatePassword()}>
            Generate and copy password
          </Text>
        </TouchableOpacity>
      </View>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">{passwordValue}</ThemedText>
      </ThemedView>
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
    height: 200,
    width: '100%',
    top: 25,
    left: 0,
    position: 'absolute',
  },
  padlock: {
    width: 300,
    height: 300,
    marginBottom: 60,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#3692BC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 12,
    marginBottom: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
})
