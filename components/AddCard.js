import React from 'react'
import { Text, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet } from 'react-native'
import { addCard } from '../actions'
import { saveCard } from '../utils/api'
import { connect } from 'react-redux'
import { white, black } from '../utils/colors'

// similar to the fitness app's AddEntry component
// TODO : Refactor
SubmitBtn = ({ onPress }) => {
    return (
        <TouchableOpacity
         style={styles.submitBtn}
         onPress={onPress}>
            <Text style={styles.submitBtnText}>Create Card</Text>
        </TouchableOpacity>
    )
}

class AddCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            question: '',
            answer: ''
        }
    }

    submit = () => {
        const { question, answer } = this.state
        const { deckId, dispatch } = this.props
        if(question === '' || answer === ''){
            alert('Please fill in both the input fields')
            return 
        }

        dispatch(addCard(deckId, question, answer))
        this.setState({
            question: '',
            answer: ''
        })
        saveCard(deckId, question, answer) //store the card in asyncstorage
    }

    render(){
        const { question, answer } = this.state
        
        return(
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={styles.label}>Question</Text>
                <TextInput
                 value={question}
                 style={styles.input}
                 onChangeText={(question) => this.setState({question})}
                 autoFocus={true}
                />
                <Text style={styles.label}>Answer</Text>
                <TextInput
                 value={answer}
                 style={styles.input}
                 onChangeText={(answer) => this.setState({answer})}
                />
                <SubmitBtn onPress={this.submit} />
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 40
    },
    question: {
        fontSize: 18,
        alignSelf: 'flex-start',
        color: black
    },
    input: {
        width: 250,
        height: 44,
        padding: 8,
        borderWidth: 1,
        borderColor: black,
        marginBottom: 15
    },
    submitBtn: {
        backgroundColor: black,
        padding: 10,
        borderRadius: 0,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 100
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    }
})

function mapStateToProps(state, { navigation }){
    const { deckId } = navigation.state.params
    return {
        deckId
    }
}

export default connect(mapStateToProps)(AddCard)