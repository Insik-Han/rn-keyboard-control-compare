import { Stack } from 'expo-router';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';

import { Container } from '@/components/Container';
import { FormFields } from '@/components/FormFields';

export default function KeyboardControllerAvoiding() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'react-native-keyboard-controller' }} />
      <KeyboardAvoidingView behavior="padding" style={styles.keyboardView}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Container>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>react-native-keyboard-controller</Text>
              <Text style={styles.description}>
                Using KeyboardAvoidingView from react-native-keyboard-controller library with
                smoother animations and better cross-platform behavior.
              </Text>
            </View>
            <FormFields />
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#38434D',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#000000',
    opacity: 0.7,
  },
});
