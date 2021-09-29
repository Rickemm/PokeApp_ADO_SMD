import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 150,
        //backgroundColor: '#313131',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10        
    },

    pokemonImage: {
        width: 120,
        height: 120,
        marginHorizontal: 15,
        //backgroundColor: 
    },

    pokemonPreview: {
        width: '50%',
        padding: 5,
        backgroundColor: '#30a7d3',
        borderRadius: 15,
        alignItems: 'center'
    },

    pokeText: {
        color: '#fefefe',
        fontFamily: 'Poppins_400Regular'
    },

    pokeTitle: {
        marginVertical: 2,
        fontFamily: 'Poppins_700Bold'
    },

    moreInfoButton: {
        marginVertical: 2,
        backgroundColor: '#EE6b2f',
        width: 100,
        borderRadius: 15,
    },

    buttonText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Poppins_700Bold',
        color: '#fefefe',
        padding: 5,
    },

    modalContainer:{
        height: 450,
        marginHorizontal: 30,
        padding: 15,
        backgroundColor: '#fefefe',
        marginTop: '35%',
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 30,
        borderWidth: 3,
        borderColor: '#E6BC2F'
    },

    modalAvatar: {
        width: 150,
        height: 150,
        marginTop: -70,
        //backgroundColor: '#000',
    },

    closeButton: {
        padding: 10,
        paddingHorizontal: 18,
        backgroundColor: '#EE6b2f',
        borderRadius: 30,
        position: 'absolute',
        top: 10,
        right: 10
    },

    closeButtonText: {
        fontFamily: 'Poppins_700Bold',
        color: '#fefefe'
    },

    pokeInfoContainer: {
        width: '100%',
        height: 80,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#30a7d3',
        borderRadius: 15,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    pokeBatleContainer: {
        width: '100%',
        padding: 10,
        backgroundColor: '#E3350D',
        borderRadius: 15,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    infoColumn: {
        flex: 1,
        width: '40%',
        flexDirection: 'column'
    },

    pokeInfoText: {
        color: '#fefefe',
        marginVertical: 2,
        fontFamily: 'Poppins_700Bold',

    },

    simpleText: {
        width: '100%',
        textAlign: 'justify',
    },

    pokeAbilitiesContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    pokeAbilitie: {
        width: '45%',
        backgroundColor: '#9bcc50',
        flexDirection: 'column',
        paddingVertical: 5,
        textAlign: 'center',
        borderRadius: 15,
        fontFamily: 'Poppins_700Bold',
        color: '#fefefe',
        marginBottom: 10

    }
});

export default styles;