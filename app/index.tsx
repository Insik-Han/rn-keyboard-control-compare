import { Stack, Link } from 'expo-router';

import { StyleSheet, View, Text, ScrollView } from 'react-native';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

export default function Home() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Keyboard Control Compare' }} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Container>
          <View style={styles.header}>
            <Text style={styles.title}>Keyboard Avoiding Comparison</Text>
            <Text style={styles.description}>
              Compare different approaches to handling keyboard avoidance in React Native forms.
            </Text>
          </View>

          <View style={styles.buttonGroup}>
            <Link href="/no-avoiding" asChild>
              <Button title="No Keyboard Avoiding" />
            </Link>

            <Link href="/rn-avoiding" asChild>
              <Button title="React Native KeyboardAvoidingView" />
            </Link>

            <Link href="/keyboard-controller" asChild>
              <Button title="react-native-keyboard-controller" />
            </Link>
          </View>
        </Container>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    padding: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    opacity: 0.7,
    textAlign: 'center',
  },
  buttonGroup: {
    padding: 12,
    gap: 8,
  },
});
