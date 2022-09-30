import { StyleSheet } from 'react-native';

import { COLORS } from '../../Contain';

const styles = StyleSheet.create({
    container : {
        flex : 3,
    },
    boxavatar:{
        borderWidth:2,
        borderColor:'red'
        ,justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        height:50,
        width:50,
        marginLeft:-15
    },
    textavatar:{
        marginTop:-35,
        marginLeft:40,
        marginVertical : 10,
        fontWeight : 'bold',
        fontSize : 15,
        color:'black'
    },
    text :{
        marginVertical : 15,
        
        fontSize : 15,
        color:'black'
    },
    avatar:{
        height:50,
        width:50,
      
    },
    box : {
        width : '100%',
        height : '100%',
        shadowColor : COLORS.shadowBox,
        shadowOffset : {
            width : 0,
            height : 4
        },
        shadowOpacity : 0.25,
        elevation : 4,
        shadowRadius : 20,
        borderRadius : 20
    },
    boxImage : {
        width : '100%',
        height : '100%',
        borderRadius : 20
    }
})

export default styles;