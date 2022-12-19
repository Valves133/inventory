import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    maxHeight: '27.5%',
    // backgroundColor: 'rgba(0,0,0,0.75)',
    padding: 24,
  },
  logoContainer: {
    height: '42.5%',
    width: '20%',
    flexWrap:'wrap',
    marginVertical: 16,
  },
  logo: {
    marginRight: 16,
    maxWidth: '100%',
    maxHeight: '100%'
  
  },
  title: {
    color: '#FFFFFF',
    fontSize: 70,
    fontFamily: 'Cormorant_400Regular'
  },
  subTitle: {
    color: '#ccc',
    fontFamily: 'Cormorant_400Regular',
    fontSize: 16
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
})
