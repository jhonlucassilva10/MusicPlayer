import React from 'react'
import { 
  SafeAreaView,
  FlatList, 
  View
} from 'react-native';
import Item from './filterItem'
import Style from './styles'
import { PropTypes } from 'prop-types';

//created object containing title and value boolean just to feed the list during the test
const Data = [
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


 /**The item separator has been inserted in place of the header item, 
  * to improve the alignment of the items listed in the filter
  * @name ListHeaderComponent  
 */ 
  ListHeaderComponent() {
      return(<View style={Style.ItemSeparatorComponent}/>)
  }
   
  render() {
   
    return (
      <SafeAreaView style={Style.filtercontainer}>
        <FlatList
          data={Data}
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

Filters.propTypes = {
  Data: PropTypes.object.isRequired,
};

export default Filters
