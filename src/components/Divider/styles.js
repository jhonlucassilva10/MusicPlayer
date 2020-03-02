
import {colors} from '../../styles'
import {percentWidthDpi,margin} from '../../styles/metrics'

const styles = {
    container:{
        width:'100%',
        height:2,
        marginTop:percentWidthDpi(8),
        marginBottom:percentWidthDpi(8),
        paddingLeft:margin,
        paddingRight:margin,
    },
    line:{
        width:'100%',
        height:2,
        backgroundColor:colors.clearer,
    }
  
}

export default styles
