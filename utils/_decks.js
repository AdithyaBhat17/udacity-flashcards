import { AsyncStorage } from 'react-native'

export const DECKS_KEY = 'UdacityFlashCards'

let decks = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'React is a javascript library written by the developers at Facebook to build cleaner reusable components'
            },
            {
                question: 'What is state in React?',
                answer: 'State is an object that determines the behavior of a component'
            },
        ]
    },
    Datastructures: {
        title: 'Data Structures',
        questions: [
            {
                question: 'What is an array in C?',
                answer: 'An array is a sequence of elements of similar datatype'
            },
            {
                question: 'What is a string?',
                answer: 'An string is a sequence of characters'
            }
        ]
    }
}

function setData() {
    AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks))
    return decks
}

export function formatDecksResults(results) {
    return results === null ? setData() : JSON.parse(results)
}