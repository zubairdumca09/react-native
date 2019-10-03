import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './GoalItem'
import GoalInput from './GoalInput'

export default function First() {
  const [ listItem, setListItem ] = useState([]);
  const [ visible, setVisible ] = useState(false);
  const addList = (text) => {
    setListItem((listItems)=>([...listItems, {id: Math.random(),value: text}]));
  }
  const openModal = () => {
    setVisible(true);
  }
  
  return (
    <View style={styles.screen}>
      <Button title="Open Modal" onPress={openModal}/>
      <GoalInput
        addList={addList}
        visible={visible}
        onCancel={()=>{setVisible(false)}}
      />
      <FlatList
        keyExtractor={(item,index)=>item.id}
        data={listItem}
        renderItem={(itemData)=>(
          <GoalItem
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
      padding: 50
    }
})


