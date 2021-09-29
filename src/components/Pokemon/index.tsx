import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, Modal, Pressable, ScrollView } from 'react-native';

import styles from './styles';

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

const Pokemon = (pokemon: PokemonProps) =>{
    const[ modal, setModal ] = React.useState(false);
    
    function changeModal(){
        setModal(!modal);
    }

    function ShowDescription() {
        return (
            <Modal
            animationType="slide"
            transparent={true}
            visible={modal}
            >
                <View style={styles.modalContainer}>
                    <Image source={{ uri: pokemon.avatar}} style={styles.modalAvatar} />
                    <Text style={styles.pokeTitle}>{pokemon.name.toLocaleUpperCase()}</Text>
                    <Text style={styles.simpleText}>{pokemon.bio}</Text>
                    <ScrollView>
                        <View style={styles.pokeInfoContainer}>
                            <View style={styles.infoColumn}>
                                <Text style={styles.pokeInfoText}>Height: {pokemon.height} m</Text>
                                <Text style={styles.pokeInfoText}>Weight: {pokemon.weight} kg</Text>
                            </View>
                            <View style={styles.infoColumn}>
                                <Text style={styles.pokeInfoText}>Categogy: {pokemon.category}</Text>
                                <Text style={styles.pokeInfoText}>Type: {pokemon['type'][0]['type']}</Text>
                            </View>
                        </View>
                        <View style={styles.pokeAbilitiesContainer}>
                            <Text style={styles.pokeAbilitie}>{pokemon['abilities'][0]['ability']['name']}</Text>
                            <Text style={styles.pokeAbilitie}>{pokemon['abilities'][1]['ability']['name']}</Text>
                        </View>
                        <View style={styles.pokeBatleContainer}>
                            <View style={styles.infoColumn}>
                                <Text style={styles.pokeInfoText}>{pokemon['stats'][0]['stat']['name'].toLocaleUpperCase()}: {pokemon['stats'][0]['base_stat']}</Text>
                                <Text style={styles.pokeInfoText}>{pokemon['stats'][1]['stat']['name'].toLocaleUpperCase()}: {pokemon['stats'][1]['base_stat']}</Text>
                                <Text style={styles.pokeInfoText}>{pokemon['stats'][2]['stat']['name'].toLocaleUpperCase()}: {pokemon['stats'][2]['base_stat']}</Text>
                            </View>
                            <View style={styles.infoColumn}>                                
                                <Text style={styles.pokeInfoText}>{pokemon['stats'][3]['stat']['name'].toLocaleUpperCase()}: {pokemon['stats'][3]['base_stat']}</Text>
                                <Text style={styles.pokeInfoText}>{pokemon['stats'][4]['stat']['name'].toLocaleUpperCase()}: {pokemon['stats'][4]['base_stat']}</Text>
                                <Text style={styles.pokeInfoText}>{pokemon['stats'][5]['stat']['name'].toLocaleUpperCase()}: {pokemon['stats'][5]['base_stat']}</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <Pressable onPress={changeModal} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>X</Text>
                    </Pressable>
                </View>
            </Modal>
        );
    }

    return(
            <View style={styles.container}>
                <ShowDescription/>
                <Image source={{ uri: pokemon.avatar }} style={styles.pokemonImage}/>
                <View style={styles.pokemonPreview}>
                    <Text style={[styles.pokeText, styles.pokeTitle ]}>{pokemon.name.toLocaleUpperCase()}</Text>
                    <Text style= {styles.pokeText}>Height: {pokemon.height} m</Text>
                    <Text style= {styles.pokeText}>Weight: {pokemon.weight} kg</Text>
                    <Text style= {styles.pokeText}>Category: {pokemon.category}</Text>

                    <TouchableOpacity onPress={changeModal} style={styles.moreInfoButton}>
                        <Text style={styles.buttonText}>More</Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
}

export default Pokemon;