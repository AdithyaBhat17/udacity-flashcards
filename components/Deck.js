import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import { connect } from 'react-redux'
import { black, gray, white } from '../utils/colors'

class Deck extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            opacity: new Animated.Value(0)
        }
    }

    static navigationOptions = ({ navigation }) => {
        const { deckName } = navigation.state.params
        return {
            title: deckName
        }
    }

    componentDidMount() {
        const { opacity } = this.state
        Animated.timing(opacity, {toValue: 1, duration: 1000}).start()
    }

    render(){
        const { opacity } = this.state
        const { deckId } = this.props
        const { questions, title } = this.props.deck 
        // Pressing on a deck in the list should generate an animation, and the app should route to an individual deck view.
        return(
            <Animated.View style={[styles.deck, { opacity }]}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.count}>{questions.length} {questions.length === 1 ? `card` : `cards`}</Text>
                <TouchableOpacity
                style={[styles.btn, {marginTop: 50}]}
                onPress={() => this.props.navigation.navigate('AddCard', {deckId: deckId})}
                >
                    <Text style={styles.btnText}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={[styles.btn, {backgroundColor: black}]}
                onPress={() => (questions.length === 0 ? alert('Get started by adding few cards!') : this.props.navigation.navigate('Question', {deckId: deckId}))}
                >
                    <Text style={[styles.btnText, {color: white}]}>Start Quiz!</Text>
                </TouchableOpacity>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    deck: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        color: black
    },
    count: {
        marginTop: 10,
        fontSize: 25,
        color: gray
    },
    btn: {
        width: 150,
        height: 50,
        backgroundColor: white,
        borderRadius: 0,
        borderColor: black,
        borderWidth: 1,
        padding: 15,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        fontSize: 16,
        color: black
    }
  })
  
function mapStateToProps (state, {navigation}) {
    const { deckId } = navigation.state.params  
    return {
        deckId,
        deck: state[deckId],
    }
}

export default connect(mapStateToProps)(Deck)