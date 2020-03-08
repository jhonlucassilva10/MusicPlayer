/* 
  * Name: {metrics}
  * Author: {Jhon Lucas}
  * Creation Date: (29/02/2019)
  * Version: {1.0.0}
  * @patch-notes - (Change Log)
  
*/
import { Dimensions, PixelRatio } from 'react-native'

let screenWidth = Dimensions.get('window').width
let screenHeight = Dimensions.get('window').height

const percentWidthDpi = widthPercent => {
    return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) / 100)
}

const percentHeightDpi = heightPercent => {
    return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) / 100)
}

const pxSize = size => {
    return PixelRatio.roundToNearestPixel(size)
}

const dpiFont = fontSize => {
    return PixelRatio.getFontScale() * fontSize
}

const margin=percentWidthDpi(5);
const marginHeaderTop=percentWidthDpi(9)

export { 
    percentWidthDpi, 
    percentHeightDpi, 
    pxSize, 
    dpiFont,
    margin,
    marginHeaderTop}