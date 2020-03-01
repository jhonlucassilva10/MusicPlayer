
import {fonts} from '../../styles'
import {percentWidthDpi,marginLeft} from '../../styles/metrics'

const styles = {
    container: {
        width:percentWidthDpi(100),
        height:percentWidthDpi(9),
        alignItems:'flex-start',
        justifyContent:'center',
        paddingLeft:marginLeft,
        marginBottom:percentWidthDpi(2),
    },
    title:{
       fontSize:fonts.h1,
       color:'white'
    },
}

export default styles
