import {StyleSheet , Dimensions} from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get("window").height,
      },
      titles: {
        marginTop: '30%',
        idth: '100%',
        alignItems: 'center',
      },
      title: {
        fontSize: 40,
        fontWeight: '500',
        color:"white"
      },
      subtitleCTA:{
        textDecorationLine:"underline",
        color:"white"
      },
      subtitle: {
        fontSize: 16,
        color: 'white',
      },
      image:{
        width:"100%",
        height:"100%",
        resizeMode:"cover",
        position:"absolute"
      },
      buttonsContainer:{
        position:"absolute",
        bottom:50,
        width:"100%"
      }
});

export default styles;
