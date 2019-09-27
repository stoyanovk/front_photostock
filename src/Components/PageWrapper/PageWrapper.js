import React from "react";
import Head from "../Head";
import Footer from "../Footer";
import { WrappedChild, WrapperStyle } from "./style";

export default function PageWrapper({ children }) {

  return (
    <WrapperStyle>
      <Head />
      <WrappedChild>{children}</WrappedChild>
      <Footer />
    </WrapperStyle>
  );
}
