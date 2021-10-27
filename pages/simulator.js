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
                            <div className="col-md-12" id="contenedor">
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
                                <div className="col-md-12 d-flex justify-content-center" >
                                    <h6 className={`${styles.text_simulator_price} ${styles.subtitle_style_card_two}`} >$560.50</h6>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <button type="button" className={`btn ${styles.my_btn_simulator_ok}`} onClick={firstMethod} datatype={'solicitar'}>¡Solicítalo ahora!</button>
                                </div>
                            </div>
                            <div className="col-md-12 d-none" id="contenedor2">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h5 className={`card-title ${styles.title_style_card_two}`}>Queremos conocerte</h5>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="names" className="form-label">Nombre(s)</label>
                                    <input type="text" className={`form-control ${styles.my_input}`} id="names" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastnames" className="form-label">Apellidos</label>
                                    <input type="text" className={`form-control ${styles.my_input}`} id="lastnames" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cellphone" className="form-label">Celular</label>
                                    <input type="text" className={`form-control ${styles.my_input}`} id="cellphone" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                                    <input type="email" className={`form-control ${styles.my_input}`} id="email" />
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <button type="button" className={`btn ${styles.my_btn_simulator_ok}`} onClick={firstMethod} datatype={'next'}>Siguiente</button>
                                </div>
                            </div>
                            <div className="col-md-12 d-none" id="contenedor3">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h5 className={`card-title ${styles.title_style_card_two}`}>¡Ya casi!</h5>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="postal_code" className="form-label">Código Postal</label>
                                    <input type="text" className={`form-control ${styles.my_input}`} id="postal_code" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="state" className="form-label">Estado</label>
                                    <input type="text" className={`form-control ${styles.my_input}`} id="state" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="city" className="form-label">Ciudad</label>
                                    <input type="text" className={`form-control ${styles.my_input}`} id="city" />
                                </div>
                                
                                <div className="col-md-12 d-flex justify-content-center">
                                    <button type="button" className={`btn ${styles.my_btn_simulator_ok}`} onClick={firstMethod} datatype={'send'}>Enviar</button>
                                </div>
                            </div>
                            <div className="col-md-12 d-none my-5" id="contenedor4">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h5 className={`card-title ${styles.title_style_card_two}`}>¡Listo!</h5>
                                </div>
                                <div className="col-md-12 mt-3 d-flex justify-content-center">
                                    <p className={`${styles.text_body} ${styles.subtitle_style_card_two}`}>
                                        Gracias por tu interés, un asesor se comunicará para brindarte toda la información que necesites.
                                    </p>
                                </div>
                                
                                <div className="col-md-12 mt-5 d-flex justify-content-center">
                                    <button type="button" className={`btn ${styles.my_btn_simulator_ok}`} onClick={firstMethod} datatype={'again'}>Calcular de nuevo</button>
                                </div>
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

const firstMethod = (e) =>  {
    let type = e.currentTarget.attributes['datatype'].value;

    if(type == 'solicitar'){
        document.getElementById("contenedor").classList.add("d-none");
        document.getElementById("contenedor2").classList.remove("d-none");
    }else if(type == 'next'){
        document.getElementById("contenedor2").classList.add("d-none");
        document.getElementById("contenedor3").classList.remove("d-none");
    }else if(type == 'send'){
        document.getElementById("contenedor3").classList.add("d-none");
        document.getElementById("contenedor4").classList.remove("d-none");
    }else if(type == 'again'){
        document.getElementById("contenedor4").classList.add("d-none");
        document.getElementById("contenedor").classList.remove("d-none");
    }
}
export default Index