import { Stack } from 'expo-router';
import { View } from 'react-native';
import { KeyboardProvider } from 'react-native-keyboard-controller';

export default function Layout() {
  return (
    <KeyboardProvider>
      <Stack />
    </KeyboardProvider>
  );
}
