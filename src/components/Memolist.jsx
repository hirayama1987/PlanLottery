import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Memolist() {
  return (
    <View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text>2020年</Text>
        </View>
        <View>
          <Text>
            X
          </Text>
        </View>
      </View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text>2020年</Text>
        </View>
        <View>
          <Text>
            X
          </Text>
        </View>
      </View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text>2020年</Text>
        </View>
        <View>
          <Text>
            X
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
});
