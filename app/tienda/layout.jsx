import Link from 'next/link'

export default function TiendaLayout ({children}){
    return (

        <>
        <nav>
            <h3>Seccion Tienda</h3>
            <ul>
                <Link href={'/tienda/categorias'}><li>Categorias</li></Link>
                <Link href={'/tienda/categorias/laptops'}><li>Laptops</li></Link>
                
            </ul>
    
        </nav>
        
        
        {children}
        </>
    )
    }

    
  