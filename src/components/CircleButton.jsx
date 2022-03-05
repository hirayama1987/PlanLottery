import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CircleButton(props) {
  const {children} = props;
  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#FF8D41',
    width: 64,
    height: 64,
    fontSize: 16,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8
  },
  circleButtonLabel: {
    color: '#fff',
    fontSize: 40,
    lineHeight: 40,
  },
});
