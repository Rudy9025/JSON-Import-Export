import Link from 'next/link'
import './page.css'
const page = () => {
  return (
   <>
   <div className="navbar">
   <div className="container">
    <div className="title">Family Card</div>
    <div className="items">
      <li><Link href="/">Home</Link></li>
      <li><a href="#">Book</a></li>
      <li><Link href="/Components/Admin">Admin</Link></li>
    </div>
     <button>Register</button> 
   </div>
   </div>
   </>
  )
}

export default page