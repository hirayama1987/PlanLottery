import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <View style={styles.appBarInner}>
          <Text style={styles.appBarTitle}>PlanLottery</Text>
          <Text style={styles.appBarRight}>ログアウト</Text>
        </View>
      </View>

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

      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  appBar: {
    width: '100%',
    height: 84,
    backgroundColor: '#FF8D41',
    justifyContent: 'flex-end'
  },
  appBarInner: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  appBarTitle: {
    fontSize: 24,
    lineHeight: 32,
    color: '#fff',
    marginBottom: 8,
    fontWeight: 'bold'
  },
  appBarRight: {
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.8)'
  },
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
