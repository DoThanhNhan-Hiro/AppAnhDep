import React from 'react'
import { View, Text , Image } from 'react-native';

import { IMAGES } from '../../Contain'
import styles from './styles'

const Item = ({data}) => {
    return (
        <View style={styles.container}>
        <View style={styles.boxavatar}>
        <Image source={data.image2} style={styles.avatar} /></View>
        <Text style={styles.textavatar}>The Anime World</Text>
            <Text style={styles.text}>{data.name}</Text>
      
            <View style={styles.box}>
                <Image source={data.image} style={styles.boxImage} />
            </View>
        </View>
    )
}

export default Item;