import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import SignOutButton from './googleLogin/SignOutButton';
import auth from '@react-native-firebase/auth';

const DATA = [
  {
    id: '1',
    title: 'Image Picker',
  },
  {
    id: '2',
    title: 'Pager View',
  },
  {
    id: '3',
    title: 'Zoomable View',
  },
  {
    id: '4',
    title: 'Chat UI',
  },
  {
    id: '5',
    title: 'Animations',
  },
  {
    id: '6',
    title: 'Multi Step Form',
  },
  {
    id: '7',
    title: 'Custom Animations',
  },
  {
    id: '8',
    title: 'Search Bar',
  },
  {
    id: '9',
    title: 'Native Base',
  },
  {
    id: '10',
    title: 'Tenth Item',
  },
  {
    id: '11',
    title: 'Eleventh Item',
  },
  {
    id: '12',
    title: 'Twelveth Item',
  },
  {
    id: '13',
    title: 'Third Item',
  },
  {
    id: '14',
    title: 'Third Item',
  },
  {
    id: '15',
    title: 'Third Item',
  },
  {
    id: '16',
    title: 'Third Item',
  },
  {
    id: '17',
    title: 'Third Item',
  },
  {
    id: '18',
    title: 'Third Item',
  },
  {
    id: '19',
    title: 'Third Item',
  },
  {
    id: '20',
    title: 'Third Item',
  },
  {
    id: '21',
    title: 'Third Item',
  },
  {
    id: '22',
    title: 'Third Item',
  },
  {
    id: '23',
    title: 'Third Item',
  },
  {
    id: '24',
    title: 'Third Item',
  },
  {
    id: '25',
    title: 'Third Item',
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const HomePage = () => {
  const [selectedId, setSelectedId] = useState(null);
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          {
            if (item.id === '1') {
              navigation.navigate('Camera');
            } else if (item.id === '2') {
              navigation.navigate('PagerView');
            } else if (item.id === '3') {
              navigation.navigate('ImageZoom');
            } else if (item.id === '4') {
              navigation.navigate('ChatUi');
            } else if (item.id === '5') {
              navigation.navigate('Animations');
            } else if (item.id === '6') {
              navigation.navigate('TopComponent');
            } else if (item.id === '7') {
              navigation.navigate('CustomAnimations');
            } else if (item.id === '8') {
              navigation.navigate('Search');
            } else if (item.id === '9') {
              navigation.navigate('NativeBaseExample');
            } else if (item.id === '2') {
              navigation.navigate('');
            } else if (item.id === '2') {
              navigation.navigate('');
            } else if (item.id === '2') {
              navigation.navigate('');
            } else if (item.id === '2') {
              navigation.navigate('');
            } else if (item.id === '2') {
              navigation.navigate('');
            } else if (item.id === '2') {
              navigation.navigate('');
            } else if (item.id === '2') {
              navigation.navigate('');
            } else if (item.id === '2') {
              navigation.navigate('');
            } else if (item.id === '2') {
              navigation.navigate('');
            } else if (item.id === '2') {
              navigation.navigate('');
            } else if (item.id === '2') {
              navigation.navigate('');
            } else if (item.id === '2') {
              navigation.navigate('');
            } else if (item.id === '2') {
              navigation.navigate('');
            } else if (item.id === '2') {
              navigation.navigate('');
            } else if (item.id === '2') {
              navigation.navigate('');
            } else if (item.id === '2') {
              navigation.navigate('');
            }
          }
        }}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  const username = auth().currentUser.displayName;
  const handleSignOut = async () => {
    await auth().signOut();
    // await auth().currentUser.delete();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{username}</Text>
        <SignOutButton handleClick={handleSignOut} />
      </View>
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
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 4,
  },
  title: {
    fontSize: 32,
  },
  textContainer: {
    flexDirection: 'row',
    height: 60,
    width: '100%',
    margin: 0,
    padding: 8,
    elevation: 6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: '600',
    fontSize: 20,
    color: '#030303',
    marginRight: 'auto',
    marginLeft: 8,
    padding: 4,
  },
});

export default HomePage;
