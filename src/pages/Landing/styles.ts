import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },

    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        padding: 20,
        paddingTop: 35
    },

    imageLogo: {
        width: '100%',
        maxHeight:150,
        resizeMode: 'contain',
        //backgroundColor: '#000'
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 18
    },

    titleBold: {
        fontFamily: 'Poppins_700Bold',
    }
});

export default styles;