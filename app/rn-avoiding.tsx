import { Stack } from 'expo-router';
import { View, ScrollView, Text, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

import { Container } from '@/components/Container';
import { FormFields } from '@/components/FormFields';

export default function RNAvoiding() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'React Native KeyboardAvoidingView' }} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Container>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>React Native KeyboardAvoidingView</Text>
              <Text style={styles.description}>
                Using React Native&apos;s built-in KeyboardAvoidingView component with{' '}
                {Platform.OS === 'ios' ? '"padding"' : '"height"'} behavior for {Platform.OS}.
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
