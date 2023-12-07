import { Suspense } from "react";
import { BlitzPage } from "@blitzjs/next";

import Layout from "src/core/layouts/Layout";
import { UserInfo } from "src/core/components/UserInfo";

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <Suspense fallback="Loading...">
        <UserInfo />
      </Suspense>
    </Layout>
  );
};

export default Home;
