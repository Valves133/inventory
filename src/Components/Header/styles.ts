import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    maxHeight: '27.5%',
    backgroundColor: '#000000',
    padding: 24,
  },
  logoContainer: {
    width: '45%',
  },
  logo: {
    marginTop: 46,
    maxWidth: '100%',
    maxHeight: '100%'
  
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
})
