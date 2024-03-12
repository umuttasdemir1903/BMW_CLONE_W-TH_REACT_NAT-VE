import {View, StyleSheet, StatusBar} from 'react-native';
import CarsList from './src/components/CarsList';
import Header from './src/components/Header';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Header/>
     <CarsList/>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default MyComponent;
