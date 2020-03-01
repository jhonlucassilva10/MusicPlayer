
import {colors,fonts} from '../../styles'
import {percentWidthDpi,pxSize} from '../../styles/metrics'

const styles = {
    containerStyle: {
        width:'85%',
        height:percentWidthDpi(9),
        backgroundColor:colors.background,
        alignSelf:'center',
        borderRadius:pxSize(9),
        padding:0,
    },
    inputContainerStyle:{
        backgroundColor:'#42454A',
        borderRadius:12,
        height:'100%',
        paddingLeft:'3%'
    },
    inputStyle:{
        fontSize:fonts.input
    },
    searchIcon:{
        size:pxSize(20),color:'#E4E4E5'
    },
    

}

export default styles
