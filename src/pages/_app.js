import Header from '@/components/header'
import '@/styles/globals.css'
import "quill/dist/quill.snow.css";

export default function App({ Component, pageProps }) {
  return(
    <>
    <Header />
    <Component {...pageProps} />
    </>
  ) 
}
