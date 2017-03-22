import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View,
  ScrollView,
  TouchableHighlight,
  Alert
} from 'react-native';

export default class extends Component {
  constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows([
          '食品', 'お菓子', '日用品', 'ファッション', 'コスメ', 'サプリメント', '医薬品', 'ペット用品', '文房具', '家具', '家電', 'お酒'
        ])
      };
    }
  _onPressButton(message) {
    Alert.alert(
             'Alert Title',
             message,
           );
  }

  render() {
    return (
      <View>
        <View>
          <Text style={styles.title}>Category List</Text>
        </View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
            <TouchableHighlight onPress={this._onPressButton.bind(this, 'pressed')}>
              <View style={styles.container}>
                <Text style={styles.category}>{rowData}</Text>
              </View>
            </TouchableHighlight>
            }
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding: 16,
  },
  category: {
    fontSize: 20,
    color: '#666666'
  },
  title: {
    fontSize: 24,
    color: '#B8860B',
    padding: 16,
    backgroundColor: '#000000'
  }
});
