
import React from 'react'
import { SafeAreaView,
     FlatList, 
     View
      } from 'react-native';

import Item from './filterItem'
import Style from './styles'

const DATA = [
    {
      id: '1',
      title: 'Playlists',
      onSelect:true
    },
    {
      id: '2',
      title: 'Songs',
      onSelect:false
    },
    {
      id: '3',
      title: 'Albums',
      onSelect:false
    },
    {
      id: '4',
      title: 'Artists',
      onSelect:false
    },
    {
      id: '5',
      title: 'Lyrics',
      onSelect:false
    },
];

class Filters extends React.Component {
 
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

  ListHeaderComponent() {
      return(<View style={Style.ItemSeparatorComponent}/>)
  }
   
  render() {
   
    return (
      <SafeAreaView style={Style.filtercontainer}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} onSelect={item.onSelect}/>}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={this.ListHeaderComponent}
        />
      </SafeAreaView>
    );
  }
}

export default Filters
