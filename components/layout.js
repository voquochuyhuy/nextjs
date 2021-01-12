import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
const name = "Nextjs";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const increment = () =>
    dispatch({
      type: "INCREMENT",
    });
  const decrement = () =>
    dispatch({
      type: "DECREMENT",
    });
  const reset = () =>
    dispatch({
      type: "RESET",
    });
  const onClickBtn = () => {
    router.push("/example");
  };
  const onClickBtnErr = ()=>{
    router.push("/aNic");
  }
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/images.jpeg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle} ${styles.image}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <p1>Data redux :{count}</p1>
            <div
              style={{
                width: "800px",
                display: "flex",
                justifyContent: "space-between",
                margin: "20px 0 20px 0",
              }}
            >
              <button
                style={{
                  background: "red",
                  borderRadius: " 8px",
                  color: "white",
                  width: "150px",
                  height : "80px"
                }}
                onClick={increment}
              >
                Increment
              </button>
              <button
                style={{
                  background: "green",
                  borderRadius: " 8px",
                  color: "white",
                  width: "150px",
                  height : "80px"
                }}
                onClick={decrement}
              >
                Decrement
              </button>
              <button
                style={{
                  background: "gray",
                  borderRadius: " 8px",
                  color: "white",
                  width: "150px",
                  height : "80px"
                }}
                onClick={reset}
              >
                Reset
              </button>
            </div>

            <button className={styles.button} onClick={onClickBtn}><span>Go another route</span></button>
            <button className={styles.button} style={{marginTop:"16px"}} onClick={onClickBtnErr}><span>Go error route</span></button>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
