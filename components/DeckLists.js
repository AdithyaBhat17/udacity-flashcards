import React from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'
import { receiveDecks } from '../actions'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { AppLoading } from 'expo'
import DeckList from './DeckList'

class DeckLists extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true
        }        
    }

    componentDidMount() {
        const { dispatch } = this.props
        getDecks()
        .then((decks) => dispatch(receiveDecks(decks)))
        .then(() => this.setState(() => ({loading: false})))
    }

    render(){
        const { loading } = this.state
        const { decks } = this.props
        if(loading === true)
            return <AppLoading />

        return(
            <View style={styles.list}>
                {/* https://facebook.github.io/react-native/docs/flatlist */}
                <FlatList
                 data={Object.keys(decks).map((id) => { return { key: id } })}
                 renderItem={({item}) => (
                    <DeckList key={item.key} id={item.key}/>
                 )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignSelf: 'stretch'
    }
})

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckLists)