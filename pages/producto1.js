import Head from 'next/head'
import Container from '../components/Container'
import LateralLeft from '../components/LateralLeft'
import fetch from 'isomorphic-fetch'
import Users from '../components/Users'
import styles from './styles.module.css'

const ProductOne = (props) => {
    return (
        <div>
            <Container>
                <Head>
                    <title>Charles Roots Project - Mejora Tu Vivienda</title>
                </Head>

                <div className="row col-md-12 mt-5">
                    <LateralLeft></LateralLeft>
                        <div className="col-md-4 px-0" style={{borderRadius:'7px'}}>
                            <img src="/images/Fotografia-Individual.png" className="card-img-top" alt="..." style={{width:'100%',border:'7px'}} />
                        </div>
                    <div class="card border-primary mb-3 col" style={{ border: 'none'}}>
                        <div className="card-body p-1">
                            <h4 className={`card-title ${styles.title_style_card}`}>Nosotros te apoyamos económicamente para que logres tus metas y objetivos.</h4>
                            <p className={`card-text ${styles.text_body}`}>Es el tipo de crédito solicitado para tu vivienda que sea propietaria de un terreno en el cual construir 
                            que posea la capacidad de pago, solvencia económica y garantías para trabajar.</p>
                            <a href="#" className="card-link">Conoce más </a>
                        </div>
                        <div className="row mt-2 d-flex justify-content-around">
                            <button type="button" className={`btn btn-outline-primary ${styles.my_btn_primary}`} >Ubica tu sucursal</button>
                            <button type="button" className={`btn btn-outline-primary ${styles.my_btn_primary}`} >Consulta tu crédito</button>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-6 row d-flex justify-content-around">
                        <div className="card mb-3 col-md-3 px-0" style={{borderRadius:'10px !important'}}>
                            <video src="https://alternativa19delsur.com/demo/assets/videosRoots/Caso%20de%20exito%20-%20Don%20Wilber%20(MTV)%20-%20Arriaga%20-%20POST.mp4" className="d-block user-select-none" width="100%" height={150} role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style={{fontSize: '1.125rem', textAnchor: 'middle', borderRadius:'7px 7px 0px 0px'}} controls />
                            <div className="card-body">
                                <h6>Wilber Lara</h6>
                                <p className="card-text">Arriaga, Chiapas.</p>
                            </div>
                        </div>

                        <div className="card mb-3 col-md-3 px-0" style={{borderRadius:'10px !important'}}>
                            <video src="https://alternativa19delsur.com/demo/assets/videosRoots/Caso%20de%20exito%20-%20Do%c3%b1a%20amparo%20(Individual)%20-%20Chiapa%20de%20Corzo%20(POST).mp4" className="d-block user-select-none" width="100%" height={150} role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style={{fontSize: '1.125rem', textAnchor: 'middle', borderRadius:'7px 7px 0px 0px'}} controls />
                            <div className="card-body">
                                <h6>Doña Amparo</h6>
                                <p className="card-text">Chiapa de Corzo, Chiapas.</p>
                            </div>
                        </div>

                        <div className="card mb-3 col-md-3 px-0" style={{borderRadius:'10px !important'}}>
                            <video src="https://alternativa19delsur.com/demo/assets/videosRoots/Caso%20de%20exito%20-%20Do%c3%b1a%20magnolio%20(Individual)%20-%20Poniente%20post.mp4" className="d-block user-select-none" width="100%" height={150} role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style={{fontSize: '1.125rem', textAnchor: 'middle', borderRadius:'7px 7px 0px 0px'}} controls />
                            <div className="card-body">
                                <h6>Magnolia Peña</h6>
                                <p className="card-text">Tuxtla Gutiérrez, Chiapas.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card border-primary mb-3 col-md-3" style={{ border: 'none'}}>
                        <div className="card-body p-1">
                            <h4 className="card-title text-dark" style={{ fontSize: '1.1rem'}}>Conoce a nuestros clientes que lograron el éxito.</h4>
                            <p className="card-text">¡Tú también puedes lograrlo, hazlo posible con Alternativa 19 del Sur.</p>
                        </div>
                    </div>
                    <div class="card border-primary mb-3 col-md-3" style={{ border: 'none'}}>
                        <img src="https://www.alternativa19delsur.com/demo/assets/imgsRoots/Circulo-01.png" style={{width: '80%', right: '6.5px !important', top: '10px !important',position: 'absolute'}} alt="" />
                    </div>
                    <div className={`col-md-12 d-flex justify-content-center`}>
                        <h5 className={`${styles.title_style_card}`} >Alternativa 19 del Sur, S.A. de C.V., SOFOM, E.N.R.</h5>
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

export default ProductOne