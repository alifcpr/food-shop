import MainLayOut from "@/components/layouts/MainLayOut";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <MainLayOut>
      <Component {...pageProps} />
    </MainLayOut>
  );
}
