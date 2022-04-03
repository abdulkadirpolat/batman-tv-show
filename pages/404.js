import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";

const ErrorPage = () => {
  return (
    <Layout>
      <h1>404</h1>
      <p>Page not found</p>
      <Link href="/">
        <a>Go to home page</a>
      </Link>
    </Layout>
  );
};

export default ErrorPage;
