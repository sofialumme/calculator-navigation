import { Text, View, TextInput, Button, FlatList } from 'react-native';
import { useState } from 'react';
import Styles from './Styles';

export default function Calculator({ navigation }) {
    const [no1, setNo1] = useState(0);
    const [no2, setNo2] = useState(0);
    const [result, setResult] = useState(0);
    const [history, setHistory] = useState([]);

    const buttonPressed = (title) => {
        if (title == '+') {
            setResult(parseInt(no1) + parseInt(no2));
            setHistory([...history,
            { text: `${no1} + ${no2} = ${parseInt(no1) + parseInt(no2)}` }]);
        } else {
            setResult(parseInt(no1) - parseInt(no2));
            setHistory([...history,
            { text: `${no1} - ${no2} = ${parseInt(no1) - parseInt(no2)}` }]);
        }
    }

    return (
        <View style={Styles.container}>
            <Text>Result: {result}</Text>
            <TextInput
                style={Styles.input}
                keyboardType='numeric'
                onChangeText={no1 => setNo1(no1)}
                value={no1}
            />
            <TextInput
                style={Styles.input}
                keyboardType='numeric'
                onChangeText={no2 => setNo2(no2)}
                value={no2}
            />
            <View style={{ flexDirection: 'row' }}>
                <View style={Styles.buttonView}>
                    <Button title='+' onPress={() => buttonPressed('+')} />
                </View>
                <View style={Styles.buttonView}>
                    <Button title='-' onPress={() => buttonPressed('-')} />
                </View>
                <View style={Styles.buttonView}>
                    <Button title='History'
                        onPress={() => navigation.navigate('History', { history: history })} />
                </View>
            </View>
        </View>
    );
}
