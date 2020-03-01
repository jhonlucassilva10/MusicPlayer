
import {fonts,colors} from '../../styles'
import {percentWidthDpi,marginHeaderTop} from '../../styles/metrics'


const styles = {
    headerSimplecontainer:{
        width:'100%',
        heigth:percentWidthDpi(4),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.background,
        marginBottom:marginHeaderTop
    },
    text:{
        fontSize:fonts.h2,
        color:'white'
    },

}

export default styles
