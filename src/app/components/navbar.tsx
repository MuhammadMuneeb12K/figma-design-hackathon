import Image from 'next/image';
import logo from "@/app/images/Logo.png";

export function Navbar() {
    return(
        <div className="header">
            <a className=" " href="http://localhost:3000/"><Image src={logo} alt="/" width={70} /></a>
            <ul className="buttons">
                <li><a href="http://localhost:3000/"> MAIN </a></li>
                <li><a href="/gallery"> GALLERY </a></li>
                <li><a href="/projects"> PROJECTS </a></li>
                <li><a href="/certifications"> CERTIFICATIONS </a></li>
                <li><a href="/contacts"> CONTACTS </a></li>
            </ul>
        </div>
    )
}
