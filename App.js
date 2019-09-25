import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [  text, setText ] = useState('');
  const [ listItem, setListItem ] = useState([]);
  const handleInput = (text) => {
    setText(text);
  }
  const addList = () => {
    const list = [...listItem, text];
    console.log(list);
    setListItem(list);
  }
  return (
    <View style={styles.screen}>
      <TextInput
        placeholder="text"
        onChangeText={handleInput}
        value={text}
        style={{borderBottomWidth: 1, width: '100%', borderBottomColor: 'black', marginBottom: 50}}
      />
      <Button title="Change Text" onPress={addList}/>
      <View>
        {
          listItem.map((item)=><View  key={item} style={styles.listItem}><Text>{item}</Text></View>)
        }
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  listItem: {
    padding: 10,
    marginVertical: 5,
    borderColor: 'black',
    backgroundColor: '#d6d6d6',

  }
});
