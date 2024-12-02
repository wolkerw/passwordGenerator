import { StyleSheet } from 'react-native'

import { Collapsible } from '@/components/Collapsible'
import { ExternalLink } from '@/components/ExternalLink'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { IconSymbol } from '@/components/ui/IconSymbol'

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#000"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">About the developer</ThemedText>
      </ThemedView>
      <ThemedText>
        This app was made by Wolker Wegner using React Native and other technologies.
      </ThemedText>
      <Collapsible title="Contact">
        <ExternalLink href="https://www.linkedin.com/in/wolker-wegner-7aab6821">
          <ThemedText type="link">Linkedin</ThemedText>
        </ExternalLink>
        <ExternalLink href="mailto:contato@wolker.com.br">
          <ThemedText type="link">contato@wolker.com.br</ThemedText>
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#3692BC',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
})
