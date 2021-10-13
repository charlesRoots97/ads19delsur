import Link from 'next/link'
import styles from '../pages/styles.module.css'

const Footer = () => (
    <div className={`container row col-md-12 mt-4 px-5 pt-5 ${styles.footer_style}`}>
        <div className="col-md-4">
            <div className="col-md-12">
                <h5 className={`${styles.title_style_card}`}>Información</h5>
            </div>
            <div className="col-md-8">
                <p>11 Nte. Pte. 1147 Los Altos, Fraccionamiento Vista Hermosa, <br/>C.P. 29030.</p>
            </div>
            
        </div>
        <div className="col-md-4">
            <div className="col-md-12">
                <h5 className={`${styles.title_style_card}`}>Links</h5>
            </div>
            <div>
                <ul>
                    <li>Productos</li>
                    <li>Sucursales</li>
                    <li>Sucursal Virtual</li>
                    <li>Información digital</li>
                    <li>AlterPlus</li>
                </ul>
            </div>
        </div>
        <div className="col-md-4">
            <div>
                <h5 className={`${styles.title_style_card}`}>Otros servicios</h5>
            </div>
            <div>
                <ul>
                    <li>Contacto</li>
                    <li>Simulador</li>
                    <li>Puntos de ago</li>
                    <li>Vacantes</li>
                    <li>Información legal</li>
                </ul>
            </div>
        </div>
    </div>
)

export default Footer