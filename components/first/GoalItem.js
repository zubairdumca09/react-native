import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const GoalItem = ({ title }) => {
    return (
        <View style={styles.listItem}><Text>{title}</Text></View>
    )
}
const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 5,
        borderColor: 'black',
        backgroundColor: '#d6d6d6',
    
      }
})


export default GoalItem;