import { LockKeyhole, Mail, MapPin, Search, Users } from "lucide-react"
import Image from "next/image";
import img from '@/public/jayan-logo.png'


const Navbar = () =>{
    return(
        <div className="navbar">
        <section className="flex justify-evenly items-center bg-green-700 py-6 text-white w-10/12 mx-auto rounded-tl-full rounded-br-full">
            <ul className="flex">
              <div className="flex">
              <li><MapPin color="#ffc107" /></li>
                <li> 123 Street, New York</li>
                </div> 
                <div className="mx-5 flex">
                <li><Mail color="#ffc107" /></li>
                <li>Email@Example.com</li>
                </div>
            </ul>
            <ul className="flex justify-evenly">
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Sales and Refunds</li>
            </ul>
        </section>
        <section className="flex justify-between items-center p-4 bg-slate-50 text-black">
  {/* <!-- Left Section: Logo or Image --> */}
  <div>
    <Image src={img} alt="Logo" width={150} height={100} />
  </div>

  <ul className="hidden md:flex space-x-6">
    <li><a href="#home">Home</a></li>
    <li><a href="#shop">Shop</a></li>
    <li><a href="#shop-detail">Shop Detail</a></li>
    <li><a href="#pages">Pages</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>

  <ul className="flex space-x-4">
    <li><Search color="#198754" /></li>
    <li><LockKeyhole color="#198754" /></li>
    <li><Users color="#198754" /></li>
  </ul>
</section>
        </div>
        
    )
}

export default Navbar