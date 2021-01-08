import { useEffect } from "react";

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return {
    props: {
      stars: json.stargazers_count,
    },
  };
}
export default function Example(props) {
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <strong>Number of start on Github:{`  `}</strong>
      {props.stars}
      <h1>Config route on Nextjs is so easy!</h1>
      <img style={{width:"500px",height:"auto"}} src="/images/thanh.png"></img>
    </div>
  );
}
