import "../styles/globals.css";
import { ShopContextProvider } from "../component/context/shopContext";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ShopContextProvider>
        <Component {...pageProps} />
      </ShopContextProvider>
    </>
  );
}

export default MyApp;
