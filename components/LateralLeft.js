import Link from 'next/link'
import styles from '../pages/styles.module.css'

const LateralLeft = () => (
    <div className="col-md-3 mb-3" style={{borderRadius: '7px'}} >
        <ul className="nav nav-pills flex-column" style={{borderRadius: '7px'}}>
            <li className="nav-item" style={{borderRadius: '7px'}}>
                <Link href="/producto1">
                    <a className={`nav-link active ${styles.items_left}`}>Mejora Tu Vivienda</a>
                </Link>
            </li>
            <li className="nav-item" style={{borderRadius: '7px'}}>
                <Link href="/producto2">
                    <a className="nav-link" style={{borderRadius: '7px'}}>Individual</a>
                </Link>
            </li>
            <li className="nav-item" style={{borderRadius: '7px'}}>
                <Link href="/producto3">
                    <a className="nav-link" style={{borderRadius: '7px'}}>Grupal</a>
                </Link>
            </li>
            <li className="nav-item" style={{borderRadius: '7px'}}>
                <Link href="/producto4">
                    <a className="nav-link" style={{borderRadius: '7px'}}>Construcredi</a>
                </Link>
            </li>
      </ul>
    </div>
)

export default LateralLeft