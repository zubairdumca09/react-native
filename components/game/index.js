import React, { useState } from 'react';
import { 
            View, 
            StyleSheet, 
            Text, 
            Button, 
            TouchableWithoutFeedback, 
            Keyboard,
            Alert 
        } from 'react-native'
import Card from './Card'
import Input from './Input'

const Game = props => {
    const [ value, setValue ] = useState("");
    const [ confirmed, setConfirmed ] = useState(false);
    const [ selected, setSelected ] = useState('');
    const handleInput = (text) =>{
        setValue(text.replace(/[^0-9]/g,''));
    }
    const reset = () => {
        setValue('');
        setConfirmed(false)
    }
    const confirm = () => {
        const chosen = value;
        if(isNaN(chosen) || chosen <= 0 || chosen > 99){
            Alert.alert("Invalid number!", 'Number has to be a number between 1 to 99', [{text: 'Okay', style: "destructive", onPress: reset}])
            return;
        }
        setConfirmed(true);
        setSelected(parseInt(value));
        setValue('');
    }
    let output;
    if(confirmed){
        output = <Card style={style.summary}>
                    <Text>You Selected</Text>
                </Card>
    }
    return (
        
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new Game!!!</Text>
                <Card styles={styles.inputContainer}>
                    <Text>Select a number</Text>
                    <Input 
                        placeholder="Select"
                        autoCapitalize="none"
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={handleInput}
                        value={value}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title="Reset" onPress={reset}/></View>
                        <View style={styles.button}><Button title="Confirm"  onPress={confirm}/></View> 
                    </View>  
                    {output} 
                </Card>
            </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        height: 150,
        maxWidth: '80%',
        alignItems: 'center',
    },
    
    button:{
        width: '40%',
        
    },  
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 15,
        marginVertical: 20
    },
    summary: {
        marginTop: 20,

    }
})
export default Game;