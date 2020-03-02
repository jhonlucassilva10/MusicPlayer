
import {fonts,colors} from '../../styles'
import {percentWidthDpi,margin,pxSize, dpiFont} from '../../styles/metrics'

const styles = {
 
    profileItemSectionContainer:{
        width:'100%',
        height:percentWidthDpi(17),
        justifyContent:'flex-start',
        flexDirection:'row',
        paddingLeft:margin,
        marginBottom:percentWidthDpi(2)
    },
    title:{
        fontSize:fonts.h3,
        color:'white'
    },
    subtitle:{
        fontSize:fonts.h6,
        color:'grey'
     },
    leftContainerProfileItem:{
        width:'80%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    rightContainerProfileItem:{
        width:'20%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        paddingRight:margin
    },
    profileDescriptionContainer:{
        flex:1,
        height:'70%',
        justifyContent:'space-around',
    },
    avatar:{
        width:percentWidthDpi(15),
        height:percentWidthDpi(15),
        justifyContent:'center',
        alignItems:'center',
        marginRight:'5%'
    },
    linearGradient: {
        borderRadius:pxSize(50),
        position:'absolute',
        height:'100%',
        width:'100%',
    },
    iconContainer:{
        width:percentWidthDpi(4),
        justifyContent:'center',
        alignItems:'center',
    },
    icon:{
        fontSize:dpiFont(22),
        color:'white'
    },
    gradiente:[colors.gradient.first,colors.gradient.second]
}

export default styles
