import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DEFINE } from '../../Contain'
import styles from './styles'

import Button from './Button';

const Action = ({ data }) => {

    return (
        <View style={styles.container}>

            <Button data={data} status={DEFINE.REACTION_LIKE}  />
            <Button data={data} status={DEFINE.REACTION_DISLIKE} />
            <Button data={data} status={DEFINE.LOVE}  />
        </View>
    )
}

export default Action;
