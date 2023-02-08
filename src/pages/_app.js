import { store } from '@/reducers/store';
import '@/styles/globals.css'
import "quill/dist/quill.snow.css";
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  return(
    <>
    <Provider store={store}>
    <Component {...pageProps} />
    </Provider>
    </>
  ) 
}
