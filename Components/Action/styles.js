import { StyleSheet } from 'react-native';

import { COLORS } from '../../Contain';

const styles = StyleSheet.create({
    container : {
        flex : 1.2,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginTop : 44,
    },
    box : {
        paddingVertical : 5,
        paddingHorizontal : 13,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 30,
        shadowOffset : {
            width : 10,
            height : 12
        },
        shadowRadius : 20,
        shadowOpacity : 3,
        elevation : 5,
        shadowColor : 'black'
    },
    boxFunny :{
        backgroundColor :  '#6495ed'
    },
    boxSad : {
        backgroundColor : 'green'
    },
    boxHappy : {
        backgroundColor : 'red'
    },
    number : {
        fontSize : 24,
        fontWeight : 'bold',
        color : COLORS.number,
        marginTop : 11
    },
    active :{
        backgroundColor :  'blue'
    },
   
})

export default styles;