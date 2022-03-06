import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Planlist() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.planListItem}
        onPress={() => {navigation.navigate('PlanDetail')}}
      >
        <View>
          <Text style={styles.planListItemTitle}>買い物リスト</Text>
          <Text>2020年</Text>
        </View>
        <TouchableOpacity
          onPress={() => { Alert.alert('Are you sure?')}}
        >
          <Text>
            X
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.planListItem}
        onPress={() => {navigation.navigate('PlanDetail')}}
      >
        <View>
          <Text style={styles.planListItemTitle}>買い物リスト</Text>
          <Text>2020年</Text>
        </View>
        <TouchableOpacity
          onPress={() => { Alert.alert('Are you sure?')}}
        >
          <Text>
            X
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.planListItem}
        onPress={() => {navigation.navigate('PlanDetail')}}
      >
        <View>
          <Text style={styles.planListItemTitle}>買い物リスト</Text>
          <Text>2020年</Text>
        </View>

        <TouchableOpacity
          onPress={() => { Alert.alert('Are you sure?')}}
        >
          <Text>
            X
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
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
