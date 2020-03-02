
import {percentWidthDpi,margin,dpiFont} from '../../styles/metrics'
import {fonts} from '../../styles';

const styles = {
    //Section
    container: {
        width:percentWidthDpi(100),
        paddingLeft:margin,
    },
    //ItemSection
    itemSectionContainer:{
        width:'100%',
        marginTop:4,
        marginBottom:4,
        paddingRight:margin,
    },
    margin:{
        width:percentWidthDpi(100),
        paddingRight:margin,
        paddingLeft:margin,
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
    upContainer:{
        width:'100%',
        justifyContent:'space-between',
        paddingTop:percentWidthDpi(1),
        paddingBottom:percentWidthDpi(1),   
        flexDirection:'row'
    },
    downContainer:{
        width:percentWidthDpi(70),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        paddingRight:margin
    },    
    title:{
        fontSize:fonts.h5,
        color:'white'
    },
    subTitle:{
        fontSize:fonts.h6,
        color:'grey',
        marginTop:percentWidthDpi(0.5),
    }
}

export default styles
