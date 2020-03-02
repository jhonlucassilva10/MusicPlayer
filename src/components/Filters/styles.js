
import {fonts,colors} from '../../styles'
import {percentWidthDpi,pxSize,margin} from '../../styles/metrics'


const styles = {
    //Filter
    filtercontainer:{
        height:percentWidthDpi(14),
        marginTop:percentWidthDpi(6),
    },
    ItemSeparatorComponent:{
        marginLeft:margin*0.6,
        height:'100%'
    },

    //Item
    itemContainer: {
        height:percentWidthDpi(12),
        marginHorizontal:percentWidthDpi(2),
        backgroundColor:colors.background,
        borderRadius:pxSize(8),
        justifyContent:'center',
        alignItems:'center',
    },
    itemTitle: {
        fontSize:fonts.h4,
        color:'white',
        paddingLeft:percentWidthDpi(4),
        paddingRight:percentWidthDpi(4),
    },
    inactiveItem:{
        borderWidth:1,   
        borderColor:'white',      
    },
    linearGradient: {
        borderRadius:pxSize(8),
        position:'absolute',
        height:'100%',
        width:'100%',
    },
    gradiente:[colors.gradient.first,colors.gradient.second]
}

export default styles
