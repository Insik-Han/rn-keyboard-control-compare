import { Stack } from 'expo-router';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import { Container } from '@/components/Container';
import { FormFields } from '@/components/FormFields';

export default function NoAvoiding() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'No Keyboard Avoiding' }} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Container>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Without Keyboard Avoiding</Text>
            <Text style={styles.description}>
              This form has no keyboard avoidance. The keyboard will cover input fields when it
              appears.
            </Text>
          </View>
          <FormFields />
        </Container>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
