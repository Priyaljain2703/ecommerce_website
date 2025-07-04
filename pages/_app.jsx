import { CartProvider } from '../context/CardContext';
import '../src/app/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
