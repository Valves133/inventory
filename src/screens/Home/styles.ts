import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
  },
  content: {
    flex: 1,
    maxHeight: '27.5%',
    backgroundColor: '#0D0D0D',
    padding: 24,
  },
  logo: {
    marginTop: 46,
    alignSelf: 'flex-start',
  },
  subTitle: {
    marginTop:16,
    color: '#ccc'
  },
  input: {
    flex: 1,
    borderTopEndRadius: 0,
    borderTopStartRadius: 6,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 6,
    backgroundColor: '#262626',
    padding: 16,
    color: '#F2F2F2',
  },
  button: {
    borderTopEndRadius: 6,
    borderTopStartRadius: 0,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 0,
    backgroundColor: '#aaa',
    width: 52,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
    
  },
  form: {
    width:'100%',
    flexDirection: 'row',
    marginTop: 24.5,
    marginBottom: 42
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
    color: '#000',
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