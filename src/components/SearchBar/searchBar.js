
import React from 'react'
import { SearchBar } from 'react-native-elements';
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
      <SearchBar
        placeholder={this.props.placeholder}
        onChangeText={this.updateSearch}
        value={search}
        containerStyle={Styles.containerStyle}
        inputContainerStyle={Styles.inputContainerStyle}  
        searchIcon={Styles.searchIcon}
        inputStyle={Styles.inputStyle}
      />
    );
  }
}

export default SearchBarCompment
