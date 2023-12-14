import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Overview' }} />
      <Stack.Screen name="details/[name]" options={{ title: 'Details' }} />
    </Stack>
  );
}
