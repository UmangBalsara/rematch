import Head from "next/head";
import Users from "@/components/Users";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Rematch</title>
        <meta name="description" content="Rematch example with next js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Users />
    </div>
  );
};

export default Index;
