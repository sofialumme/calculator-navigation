import { Text, View, TextInput, Button, FlatList } from 'react-native';
import { useState } from 'react';
import Styles from './Styles';

export default function History({ route, navigation }) {
    const { history } = route.params;
    
    return (
      <View style={Styles.container}>
        <Text>History</Text>
        <FlatList
          data={history}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) =>
            <Text style={{ textAlign: 'center' }}>{item.text}</Text>
          }
        />
      </View>
    );
  }
  