import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { shape, string, instanceOf, arrayOf } from 'prop-types';

export default function Planlist(props) {
  const { plans } = props;
  const navigation = useNavigation();

  function renderItem({item}){
    return (
      <TouchableOpacity
        style={styles.planListItem}
        onPress={() => {navigation.navigate('PlanDetail')}}
        key={item.id}
      >
        <View>
          <Text style={styles.planListItemTitle}>{item.bodyText}</Text>
          <Text>{String(item.updatedAt)}</Text>
        </View>
        <TouchableOpacity
          onPress={() => { Alert.alert('Are you sure?')}}
        >
          <Text>
            X
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }

  return (
    <ScrollView>
      <FlatList
        data={plans}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
}

Planlist.propTypes = {
  plans: arrayOf(shape({
    id:string,
    bobyText:string,
    updatedAt:instanceOf(Date),
  })).isRequired,
};

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
