import React, {useState} from 'react';
import { Image, ImageBackground, View, Text, FlatList } from 'react-native';

import BackgroundImage from '../../assets/Pokedex_Background.png';
import PokemonLogo from '../../assets/pokemon.png';

import styles from './styles';
import data from '../../data.json';

import Pokemon from '../../components/Pokemon';

interface PokemonProps{
    id: number,
    name: string,
    avatar: string,
    height: number,
    weight: number,
    category: string,
    bio: string,
    type: string[],
    abilities: string[],
    stats: string[]
}

function Landing(){
    const pokeInfo = data;

    function renderPokemon({item}: PokemonProps){
        return(
            <Pokemon 
                name={item.name} 
                avatar={item.avatar}
                height={item.height}
                weight={item.weight}
                category={item.category}
                bio={item.bio}
                type={item.type}
                abilities={item.abilities}
                stats={item.stats}
            />
        );
    }
    
    return (
        <View style={styles.container}>
            <ImageBackground 
                source={BackgroundImage} 
                style={styles.imageBackground}
            >
                <Image source={PokemonLogo} style={styles.imageLogo}/>
                <Text style={styles.title}> 
                    Welcome. {'\n'}
                    <Text style={styles.titleBold}>
                        Choose a pokemon:
                    </Text>
                </Text>

                <FlatList
                    data={pokeInfo.pokemons}
                    renderItem={renderPokemon}
                    keyExtractor={item => item.id}
                />
            </ImageBackground>
        </View>
    );
}

export default Landing;