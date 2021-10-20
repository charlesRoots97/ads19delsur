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
                    <title>Charles Roots Project - Simulador</title>
                </Head>
                
                <div className="col-md-12 mt-5">
                    <div className={`card col-md-4 ${styles.btn_radius10} ${styles.card_shadow}`} >
                        <div className="row card-body d-flex justify-content-center">
                            <div className="col-md-12 d-flex justify-content-center">
                                <h5 className={`card-title ${styles.title_style_card_two}`}>¡Bienvenido!</h5>
                            </div>
                            <div className="col-md-12 d-flex justify-content-center">
                                <h6 className={`${styles.text_body} ${styles.subtitle_style_card}`}>¿Qué <strong>crédito</strong> quieres?</h6>
                            </div>
                            <div className="col-md-12 mt-2 d-flex justify-content-center">
                                <select className="custom-select col-md-9" style={{borderRadius:'20px'}}>
                                    <option selected>Individual</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col-md-12 mt-2 d-flex justify-content-between">
                                <button type="button" className={`btn btn-outline-primary mr-3 my-auto ${styles.my_btn_simulator}`}><i class="fas fa-minus"></i></button>
                                <h5 className={`card-title my-auto ${styles.title_style_card_two}`}>$120,000</h5>
                                <button type="button" className={`btn btn-outline-primary mr-3  my-auto ${styles.my_btn_simulator}`}><i class="fas fa-plus"></i></button>
                            </div>
                            <div className="col-md-12 mt-2 d-flex justify-content-center">
                                <div className={`progress col-md-12 mx-auto px-0 ${styles.progress_mine}`}>
                                    <div className={`progress-bar progress-bar-striped ${styles.bg_mine} ${styles.progress_mine}`} role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}} >100%</div>
                                </div>
                            </div>
                            <div className="col-md-12 mt-3 d-flex justify-content-center">
                                <h6 className={`${styles.text_body} ${styles.subtitle_style_card_two}`}>Pago quincenal aproximado</h6>
                            </div>
                            <div className="col-md-12 d-flex justify-content-center">
                                <h6 className={`${styles.text_simulator_price} ${styles.subtitle_style_card_two}`}>$560.50</h6>
                            </div>
                            <div className="col-md-12 d-flex justify-content-center">
                                <button type="button" className={`btn ${styles.my_btn_simulator_ok}`}>¡Solicítalo ahora!</button>
                            </div>
                        </div>
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