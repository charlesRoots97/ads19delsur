import Link from 'next/link'
import styles from '../pages/styles.module.css'

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{boxShadow: '1px 1px 8px #5b5b5f'}}>
            <Link href="/">
                <a className="navbar-brand text-white font-weight-bold"><img src='/images/Logotipo-ADS-04.png' style={{width: '100px'}} /></a>
            </Link>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <a className={`nav-link dropdown-toggle ${styles.items_navigation}`} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                    Productos
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link href="/producto1">
                            <a className="dropdown-item">Créditos</a>
                        </Link>
                    <a className="dropdown-item" href="#">Seguros</a>
                    </div>
                </li>
                <li className="nav-item">
                    <Link href="/services">
                        <a className={`nav-link ${styles.items_navigation}`}>Sucursales</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/services">
                        <a className={`nav-link ${styles.items_navigation}`}>Información Digital</a>
                    </Link>
                </li>
            </ul>
            </div>
        </nav>
        
    )
}

export default Navigation