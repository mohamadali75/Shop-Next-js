import '../styles/globals.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


import { ThemeProvider } from '@mui/material/styles';
import { Provider} from 'react-redux'

import theme from './configs/theme';
import store  from '../Store/Store';







function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: 'https://graphqlzero.almansi.me/api',
    cache: new InMemoryCache(),
  });
 
  return <Provider store={store}><ThemeProvider theme={theme}> <ApolloProvider client={client}><Component {...pageProps} /></ApolloProvider></ThemeProvider></Provider>
}



export default MyApp
