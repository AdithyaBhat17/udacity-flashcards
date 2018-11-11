import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { red, white, black, blue } from '../utils/colors'
import TextButton from './TextButton'

export default function Card(props){
    const { index, deck, showAnswer, flip, answer } = props
    const card = deck.questions[index]

    return(
        <View style={styles.center}>
            <Text style={styles.cardText}>{showAnswer ? card.answer : card.question}</Text>
            <TextButton
             onPress={flip}
             style={{marginTop: 20, marginBottom: 50, fontSize: 18, fontWeight:'bold'}}
            >
                {showAnswer ? 'Show Question' : 'Show Answer'}
            </TextButton>
            <TouchableOpacity
             style={styles.btn}
             onPress={() => answer('correct')}
            >
                <Text style={styles.btnText}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity
             style={[styles.btn, {backgroundColor: red}]}
             onPress={() => answer('incorrect')}
            >
                <Text style={styles.btnText}>Incorrect</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        width: 150,
        height: 50,
        backgroundColor: blue,
        borderRadius: 0,
        padding: 15,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: white,
        fontSize: 16
    },
    cardText: {
        fontSize: 25,
        color: black,
        marginLeft: 15,
        marginRight: 15
    },
})