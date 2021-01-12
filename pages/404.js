import Image from 'next/image'
export default function Custom404() {
  return (
    <div style={{textAlign:"center"}}>
      <h1>Oops!...</h1>
      <img src="/images/nic.png"></img>
      <Image src="/images/nic.png"/>
      <h1>404 - Page Not Found</h1>
    </div>
  );
}
