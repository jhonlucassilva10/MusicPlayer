
import {fonts} from '../../styles'
import {percentWidthDpi,margin} from '../../styles/metrics'

const styles = {
    container: {
        width:percentWidthDpi(100),
        height:percentWidthDpi(9),
        alignItems:'flex-start',
        justifyContent:'center',
        marginBottom:percentWidthDpi(0.5)
    },
    title:{
       fontSize:fonts.h2,
       color:'white'
    },
    margin:margin
}

export default styles
