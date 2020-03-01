
import {percentWidthDpi,marginLeft,pxSize, dpiFont} from '../../styles/metrics'

const styles = {
    container: {
        width:percentWidthDpi(100),
        flex:1,
        paddingLeft:marginLeft,
        backgroundColor:'grey'
    },
 
    //ItemSection
    leftContainer:{
        width:'20%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'pink'
    },
    rightContainer:{
        width:'80%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'orange'

    },    
}

export default styles
