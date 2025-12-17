export default function Home() {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", flexDirection:"column"}}>
      <h1>Welcome!</h1>
      <p>Click the button below:</p>
      <a href="/api/go">
        <button style={{padding:"10px 20px", fontSize:"16px", cursor:"pointer"}}>
          Click Here
        </button>
      </a>
    </div>
  )
}
