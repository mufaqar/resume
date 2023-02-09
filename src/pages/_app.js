import { store } from "@/reducers/store";
import "@/styles/globals.css";
import "quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  const [_document, set_document] = useState(null);

  useEffect(() => {
    set_document(document);
  }, []);
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
