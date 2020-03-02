
import React from 'react'
import { SearchBar } from 'react-native-elements';
import { View } from 'react-native';
import Styles from './styles'


class SearchBarCompment extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View style={Styles.container}>
        <SearchBar
          placeholder={this.props.placeholder}
          onChangeText={this.updateSearch}
          value={search}
          containerStyle={Styles.searchcontainerStyle}
          inputContainerStyle={Styles.inputContainerStyle}  
          searchIcon={Styles.searchIcon}
          inputStyle={Styles.inputStyle}
        />
      </View>
    );
  }
}

export default SearchBarCompment
