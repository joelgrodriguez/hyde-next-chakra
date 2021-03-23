import Head from "next/head";
import Header from "@includes/header";
import Footer from "@includes/footer";

export default function DefaultLayout(props) {
  return (
    <main>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <div>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;0,800;0,900;1,400;1,700;1,900&display=swap"
            rel="stylesheet"
          />
        </div>
      </Head>
      <Header />
      {props.children}
      <Footer />
    </main>
  );
}
