import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.75)',
  },
  content: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerImage: {
    maxWidth:  '20%' ,
    maxHeight:'60%',
    borderRadius: 6,
    marginRight: 48
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 6
  },
  title: {
    fontSize: 24,
    fontFamily: 'Cormorant_700Bold',
  },
  subTitle:{
    color: '#191919',
    fontFamily: 'Cormorant_400Regular',
    fontSize: 16
  },
  text: {
    color: '#191919',
    fontFamily: 'Cormorant_400Regular',
    fontSize: 16
  },
  bold: {
    fontFamily: 'Cormorant_700Bold',
  },
});