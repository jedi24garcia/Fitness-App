import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingView = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#00CED1" />
    <Text style={styles.text}>Loading...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  text: {
    color: '#FFFFFF',
    marginTop: 10,
  },
});

export default LoadingView;
