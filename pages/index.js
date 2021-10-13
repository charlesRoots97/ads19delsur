import Head from 'next/head'
import Container from '../components/Container'
import fetch from 'isomorphic-fetch'
import Link from 'next/link'
import styles from './styles.module.css'

const Index = (props) => {
    
    return (
        <div>
            <Container>
                <Head>
                    <title>Charles Roots Project - Home</title>
                </Head>
                
                <div className="row col-md-12">
                    <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
                        <div className="mx-auto">
                            <h1 style={{fontWeight: '700', color: '#0F4BBD'}}>Mejorando el futuro de los Mexicanos.</h1>
                        </div>
                        <div className="mr-auto">
                            <Link href="/producto1">
                                <a className={`${styles.my_link}`} style={{fontSize: '20px'}}>Conoce todos nuestros productos.</a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="/images/Fotografia-Home.png" alt="" className="col-md-12" />
                    </div>
                    <div className="col-md-12">
                        <button type="button" className={`btn btn-outline-primary mr-3 ${styles.my_btn_primary}`}>Calcula tu crédito</button>
                        <button type="button" className={`btn btn-outline-primary ${styles.my_btn_primary}`}>Sucursal virtual</button>
                    </div>
                </div>

                <div className={`${styles.btn_whatsapp}`}>
                    <a href="https://api.whatsapp.com/send?phone=5219614630019&text=%23alternativa19" target="_blank">
                    <img src="/images/Astro-01.png" alt="" className={`${styles.style_img_float}`} />
                    </a>
                </div>
            </Container>
        </div>
    )
}
export default Index