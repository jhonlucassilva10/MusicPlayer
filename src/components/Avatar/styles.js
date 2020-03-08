
import {fonts,colors} from '../../styles'
import {percentWidthDpi,pxSize} from '../../styles/metrics'

const styles = {
    title:{
        fontSize:fonts.h3,
        color:'white'
    },
    avatar:{
        width:percentWidthDpi(15),
        height:percentWidthDpi(15),
        justifyContent:'center',
        alignItems:'center',
        marginRight:'5%'
    },
    image:{
        width:percentWidthDpi(15),
        height:percentWidthDpi(15),
    },
    linearGradient: {
        borderRadius:pxSize(50),
        position:'absolute',
        height:'100%',
        width:'100%',
    },
    gradiente:[colors.gradient.first,colors.gradient.second]
}

export default styles
