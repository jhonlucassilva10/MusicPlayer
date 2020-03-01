
import React from 'react'
import { SafeAreaView,
     FlatList
      } from 'react-native';

import Title from '../Title'
import Item from './cardListItem'
import HeaderItem from './ListHeaderComponent'
import Style from './styles'


const DATA = [
    {
      id: '1',
      title: 'Back to the 90s',
      image:'https://i.pinimg.com/originals/9b/ed/9c/9bed9c276fe9c10672ed6bf51487ccc4.jpg'
    },
    {
      id: '2',
      title: 'All-Nighters',
      image:'https://images.fineartamerica.com/images-medium-large-5/adventure-awaits-bestartstudios-mike-and-jaime-best.jpg'
    },
    {
      id: '3',
      title: 'DayDreamer',
      image:'https://art.ebsqart.com/Art/Gallery/Acrylic-on-Canvas/750301/650/650/The-Outrider.jpg'
    },
    {
      id: '4',
      title: 'For every morning',
      image:'https://i.pinimg.com/originals/86/8e/40/868e40b2847522589305db779261eeb3.jpg'
    },
    {
      id: '5',
      title: 'Birthday',
      image:'https://susanfarrellart.com.au/artshop/wp-content/uploads/2014/12/Flamingo-Magic.jpg'
    },
];

class CardList extends React.Component {
 
  constructor() {
    super();
    this.state = {list:''}
  }

  componentDidMount() {
    let listFilter = this.props.listFilter;
    this.setState(() => {
      return {
        list: listFilter,
      }
    })
  }
   
  render() {
   
    return (
      <SafeAreaView style={Style.container}>
        <Title title={'Playlists'}/>
        <FlatList
          contentContainerStyle={Style.contentContainerStyle} 
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} image={item.image}/>}
          keyExtractor={item => item.id}
          ListHeaderComponent={HeaderItem}
        />
      </SafeAreaView>
    );
  }
}

export default CardList
