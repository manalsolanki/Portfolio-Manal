import Head from "next/head";
import classes from "../styles/index.module.css";
import Banner from "../components/banner";
import Content from "../components/content";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Manal Solanki</title>
        <link rel="icon" href="/manalSolanki.jpeg" />
      </Head>
      <main>
        <div className={classes.container}>
          <Banner />
          <div className={classes.content}>
            <Content />
          </div>
        </div>
      </main>
    </div>
  );
}
