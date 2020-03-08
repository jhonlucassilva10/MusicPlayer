
import {fonts,colors} from '../../styles'
import {percentWidthDpi,margin,pxSize} from '../../styles/metrics'

const styles = {
    button: {
        backgroundColor:colors.gradient.first,
        width:percentWidthDpi(35),
        height:percentWidthDpi(8),
        marginLeft:margin,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:pxSize(5)

    },
    title:{
       fontSize:fonts.h5,
       color:'white'
    },
    
}

export default styles
