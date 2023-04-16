import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "~/components/UI/navigation/Navbar";
import DrawerMenu from "~/components/UI/navigation/DrawerMenu";
import Footer from "~/components/UI/Footer";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import SignIn from "~/pages/signIn";

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  const { data: sessionData } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (!sessionData) {
      router.push("/signIn");
    }
  }, [sessionData]);

  const Content = () => (
    <>
      <DrawerMenu>
        <Navbar />
        {children}
        <Footer />
      </DrawerMenu>
    </>
  );

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="neutral flex min-h-screen flex-col bg-neutral">
        {sessionData ? <Content /> : <SignIn />}
      </main>
    </>
  );
};

export default Layout;