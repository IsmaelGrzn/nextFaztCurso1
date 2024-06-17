import Link from "next/link"

export default function Navbar(){
    return (
        <div>
            <nav>
          <h1>Navegacion</h1>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/tienda">Tienda</Link>
            </li>
            
            
          </ul>
        </nav>
        </div>
    )
}