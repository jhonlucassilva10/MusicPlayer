
import React from 'react'
import { SafeAreaView,
     FlatList, 
     View
      } from 'react-native';
import Section from '../section' //MODIFICAR DIRETORIO
import Item from './cardListItem'
import HeaderItem from './ListHeaderComponent'
import Style from './styles'


const DATA = [
    {
      id: '1',
      title: 'Playlists',
    },
    {
      id: '2',
      title: 'Songs',
    },
    {
      id: '3',
      title: 'Albums',
    },
    {
      id: '4',
      title: 'Artists',
    },
    {
      id: '5',
      title: 'Lyrics',
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
      <SafeAreaView style={Style.listContainer}>
        <Section title={'Playlists'}/>
        <FlatList
          contentContainerStyle={{flexDirection:"row", flexWrap : "wrap"}} 
          data={DATA}
          renderItem={({ item }) => <Item title={item.title}/>}
          keyExtractor={item => item.id}
          ListHeaderComponent={HeaderItem}
        />
      </SafeAreaView>
    );
  }
}

export default CardList
