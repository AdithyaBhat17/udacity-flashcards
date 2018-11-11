import { AsyncStorage } from 'react-native'
import { formatDecksResults, DECKS_KEY } from './_decks'

export function getDecks () {
    return AsyncStorage.getItem(DECKS_KEY)
    .then(formatDecksResults)
}

export function saveDeck(key, deck) {
    return AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify({
        [key]: deck
    }))
}

export function saveCard(key, question, answer) {
    AsyncStorage.getItem(DECKS_KEY).then((result) => {
        let decks = JSON.parse(result)
        decks[key].questions.push({question: question, answer: answer})
        AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify(decks))
    })
}