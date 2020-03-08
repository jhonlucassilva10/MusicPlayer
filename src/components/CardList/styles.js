
import {fonts} from '../../styles'
import {percentWidthDpi,pxSize,margin} from '../../styles/metrics'


const styles = {

    container:{
        width:'100%',
        marginTop:percentWidthDpi(6),
        paddingBottom:percentWidthDpi(35),
        marginLeft:margin,
        alignItems:'center',
        justifyContent:'center',
    },
    //List
    contentContainerStyle:{
        flexDirection:"row",
        flexWrap:"wrap",
        paddingTop:percentWidthDpi(1.5),
        marginLeft:margin*0.2,
    },

    //Item
    itemContainer: {
        height:percentWidthDpi(48),
        width:percentWidthDpi(40),
        marginHorizontal:percentWidthDpi(2.5),
        marginVertical:percentWidthDpi(1),
        borderRadius:pxSize(8),
        alignItems:'center',
    },
    itemTitle: {
        fontSize:fonts.h5,
        color:'white',
        textAlign:'left',
        marginTop:'3.5%'
    },
    linearGradient: {
        borderRadius:pxSize(8),
        position:'absolute',
        height:'100%',
        width:'100%',
    },
    image:{
        width:'100%',
        height:'100%',
        borderRadius:pxSize(8)
    },
    borderDashedLine:{
        width:'100%', 
        height:'100%',
        borderRadius:10,
        backgroundColor:'#131415',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:'grey',
        borderStyle:'dashed', 
        zIndex: 0
    },
    borderNormalLine:{
        backgroundColor:'#131415',
        justifyContent:'center',
        borderWidth:2,
        borderColor:'grey',
    }

}

export default styles
