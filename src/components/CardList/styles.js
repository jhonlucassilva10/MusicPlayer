
import {fonts,colors} from '../../styles'
import {percentWidthDpi,pxSize,marginLeft} from '../../styles/metrics'


const styles = {
    //List
    listContainer:{
        width:'100%',
        marginTop:percentWidthDpi(6),
        paddingLeft:marginLeft,
        alignItems:'center',
        justifyContent:'center'
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
        fontSize:fonts.h3,
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
}

export default styles
