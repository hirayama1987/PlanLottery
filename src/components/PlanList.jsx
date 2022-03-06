import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Planlist() {
  return (
    <View>
      <View style={styles.planListItem}>
        <View>
          <Text style={styles.planListItemTitle}>買い物リスト</Text>
          <Text>2020年</Text>
        </View>
        <TouchableOpacity>
          <Text>
            X
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.planListItem}>
        <View>
          <Text style={styles.planListItemTitle}>買い物リスト</Text>
          <Text>2020年</Text>
        </View>
        <TouchableOpacity>
          <Text>
            X
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.planListItem}>
        <View>
          <Text style={styles.planListItemTitle}>買い物リスト</Text>
          <Text>2020年</Text>
        </View>
        <TouchableOpacity>
          <Text>
            X
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  planListItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  planListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
});
