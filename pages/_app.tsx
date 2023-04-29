import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Modal isOpen actionLabel="Submit" cancel="Cancel" title="Do you want to share your tweet"/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}
