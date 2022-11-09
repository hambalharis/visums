import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Animation 1',
  },
  {
    id: '2',
    title: 'Animation 2',
  },
  {
    id: '3',
    title: 'Animation 3',
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const CustomAnimations = () => {
  const [selectedId, setSelectedId] = useState(null);
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#0d0e38' : '#aeafd4';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          {
            if (item.id === '1') {
              navigation.navigate('Animation1');
            } else if (item.id === '2') {
              navigation.navigate('Animation2');
            } else if (item.id === '3') {
              navigation.navigate('Animation3');
            }
          }
        }}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccffda',
    paddingVertical: 20,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default CustomAnimations;
