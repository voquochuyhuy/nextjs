import { useEffect } from "react";

export async function getStaticProps() {
    const res = await fetch('https://api.github.com/repos/vercel/next.js');
    const json = await res.json();
    return {
      props: {
        stars : json.stargazers_count
      }
    }
  }
export default function Example(props) {
    useEffect(() => {
        return () => {
            
        }
    }, [])
    return <div style={{textAlign:"center"}}>{props.stars}</div>
}