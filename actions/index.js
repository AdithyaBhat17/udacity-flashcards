export const ADD_CARD = 'ADD_CARD'
export const ADD_DECK = 'ADD_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'

export function addCard(deckId, question, answer) {
    return {
        type: ADD_CARD,
        deckId,
        question,
        answer
    }
}

export function addDeck(deckId, deck) {
    return {
        type: ADD_DECK,
        deckId,
        deck
    }
}

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}