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
  
  listContent: {
    flex: 1,
    padding: 24,
    marginTop: 8,
    flexDirection: 'row',
    flexWrap: "wrap",
    alignContent:'space-around',
    justifyContent: 'space-between'
  },
  square: {
    backgroundColor: '#F2F2F2',
    width: '45%',
    height: '40%',
    borderRadius: 6
  },
  textSquare: {
    color: '#393d42',
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center',
    padding: 8,
    paddingTop: 0,
  },
  squareLogo: {
    flex: 1,
    width:'80%',
    height: 48,
    margin: 16,
    marginBottom:0,
    alignSelf: 'center'
  }
});