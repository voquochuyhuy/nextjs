import { useEffect, useState } from "react";

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
  const [width,setWidth] = useState('500px');
  const [height,setHeight] = useState('auto');
  useEffect(() => {
    return () => {};
  }, []);
  const handleClickImg = () => {
    const temp = +width.replace("px","");
    setWidth((temp + 20).toString().concat('px'))
  };
  return (
    <div style={{ textAlign: "center" }}>
      <strong>Number of start on Github:{`  `}</strong>
      {props.stars}
      <h1>Config route on Nextjs is so easy!</h1>
      <img
        id="meme"
        onClick={handleClickImg}
        style={{ width: width, height: height }}
        src="/images/thanh.png"
      ></img>
    </div>
  );
}
