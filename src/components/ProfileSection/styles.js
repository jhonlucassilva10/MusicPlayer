
import {fonts,colors} from '../../styles'
import {percentWidthDpi,marginLeft,pxSize, dpiFont} from '../../styles/metrics'

const styles = {
 
    profileItemSectionContainer:{
        width:'100%',
        height:percentWidthDpi(17),
        justifyContent:'flex-start',
        flexDirection:'row',
        paddingLeft:marginLeft,
        marginBottom:percentWidthDpi(2)
    },
    title:{
        fontSize:fonts.h3,
        color:'white'
    },
    leftContainerProfileItem:{
        width:'20%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    rightContainerProfileItem:{
        width:'80%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    profileDescriptionContainer:{
        width:'80%',
        height:'100%',
        paddingLeft:pxSize(10),
        padding:pxSize(7),
        justifyContent:'space-around'
    },
    linearGradient: {
        borderRadius:pxSize(50),
        position:'absolute',
        height:percentWidthDpi(15),
        width:percentWidthDpi(15)
    },
    subtitle:{
        fontSize:fonts.h5,
        color:'grey'
     },
    iconContainer:{
        width:'20%',
        justifyContent:'center',
        alignItems:'center'
    },
    icon:{
        fontSize:dpiFont(26),
        color:'white'
    },
    gradiente:[colors.gradient.first,colors.gradient.second]
}

export default styles
