import { ADD_CARD, ADD_DECK, RECEIVE_DECKS } from '../actions'

export default function decks(state={}, action){
    switch (action.type) {
        case ADD_CARD:
            return {
                ...state,
                [action.deckId]: {
                    title: state[action.deckId].title,
                    questions: state[action.deckId].questions.concat({
                        question: action.question,
                        answer: action.answer
                    })
                }
            }
        case ADD_DECK: {
            return {
                ...state,
                [action.deckId]: action.deck
            }
        }
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        default:
            return state
    }
}