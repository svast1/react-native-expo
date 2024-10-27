// App.js
import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import LanguageItem from './components/LanguageItem';
import javascriptLogo from './assets/javascript.png';
import javaLogo from './assets/java.png';
import pythonLogo from './assets/python.png';
import cLogo from './assets/c.png';
import swiftLogo from './assets/swift.png';

const langs = [
  { id: '1', lang: 'JavaScript', logo: javascriptLogo},
  { id: '2', lang: 'Python', logo: pythonLogo },
  { id: '3', lang: 'Java', logo: javaLogo },
  { id: '4', lang: 'C++', logo: cLogo },
  { id: '5', lang: 'Swift', logo: swiftLogo },
];


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Языки программирования</Text>
      <FlatList
        data={langs}
        renderItem={({ item }) => <LanguageItem lang={item.lang} logo={item.logo} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#4A90E2', // Цвет заголовка
  },
});
