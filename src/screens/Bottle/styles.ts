import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.75)',
  },
  header: {
    width: '100%',
    backgroundColor: 'rgba(38,38,38,0.75)',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    padding: 32,
    paddingBottom:16,
  },
  arrow: {
    width: 48,
    height: 48
  },
  back: {
    width: '120%',
    height: '120%',
    padding: 16,
  },
  logoContainer: {
    marginLeft: -32,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 36,
    marginRight: 16
  },
  titleLogo: {
    fontFamily: 'Cormorant_400Regular',
    fontSize: 32,
    color: '#FFFFFF'
  },
 
 
  content: {
    backgroundColor: 'rgba(255,255,255,0.625)',
    maxHeight:'65%',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center"
  },
  containerImage: {
    maxWidth:  '25%' ,
    maxHeight:'75%',
    borderRadius: 6,
    marginRight: 48
  },
  imageWine: {
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
  contentProvider: {
    
  },
  textProvider: {
    color: '#FFFFFF',
    fontFamily: 'Cormorant_400Regular',
    fontSize: 24,
  },
  textStock: {
    color: '#FFFFFF',
    fontFamily: 'Cormorant_400Regular',
    fontSize: 24,
  }
});