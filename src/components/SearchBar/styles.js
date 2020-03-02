
import {fonts} from '../../styles'
import {percentWidthDpi,pxSize,margin} from '../../styles/metrics'

const styles = {
    container:{
        width:'100%',
        height:percentWidthDpi(9),
        paddingLeft:margin,
        paddingRight:margin,
    },
    searchcontainerStyle: {
        width:'100%',
        height:'100%',
        borderRadius:pxSize(9),
        padding:0,    
    },
    inputContainerStyle:{
        backgroundColor:'#42454A',
        borderRadius:12,
        height:'100%',
    },
    inputStyle:{
        fontSize:fonts.input
    },
    searchIcon:{
        size:pxSize(20),color:'#E4E4E5'
    },
    

}

export default styles
