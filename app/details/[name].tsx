import { useLocalSearchParams } from 'expo-router';
import Head from 'expo-router/head';
import { StyleSheet, View, Text } from 'react-native';

export default function Details() {
  const { name } = useLocalSearchParams();
  return (
    <>
      <Head>
        <title>My Details for {name}</title>
      </Head>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Details</Text>
          <Text style={styles.subtitle}>Showing details for user {name}.</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  main: {
    flex: 1,
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
});
