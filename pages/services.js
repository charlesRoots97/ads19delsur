import Head from 'next/head'
import Container from '../components/Container'
import styles from './styles.module.css'

const Services = () => {
    return (
        <div>
            <Container>
                <Head>
                    <title>ADS - Información Digital</title>
                </Head>
                <div className="col-md-12 mt-4">
                    <img src="/images/Foto-Informacion-digital.jpg" style={{width:'100%'}} />
                </div>
                <div className="col-md-12 mt-4">
                    <h4 className={` ${styles.color_head}`}>Apostando por todo lo alto a todo el turismo en México.</h4>
                    <p>Alternativa 19 del Sur es una empresa 100% Chiapaneca, la cual, se siente muy orgullosa del gran protagonismo
                        que está tomando la región, así como el fortalecimiento de la recuperación económica de la pequeña y mediana empresa, 
                        también la transformación y digitalización del sector turístico.<br />
                        Estado de Chiapas: "Viajamos para cambiar, no de lugar, sino de ideas".
                    </p>
                </div>
                <div className="col-md-12 mt-5">
                    <div class={`card-body col-md-6 ${styles.my_card}`}>
                        <p class="card-text">Renueva Sectur nombramientos de Pueblos Mágicos a: San Cristóbal de las Casas, 
                        Comitán, Chiapa de Corzo y Palenque.</p>
                    </div>
                </div>
                <div className="col-md-12 mt-5">
                    <div class="card-body col-md-6 ">
                        <p class="card-text">Comunicado 11 / 2021. -El secretario de Turismo del Gobierno de México, Miguel Torruco Marqués, 
                        entregó hoy, en San Cristóbal de las Casas, Chiapas,la renovación de los nombramientos de los cuatro Pueblos Mágicos 
                        de esta entidad: San Cristóbal de las Casas, Comitán de Domínguez, Chiapa de Corzo y Palenque, durante el segundo día de su gira 
                        de trabajo por el estado.</p>
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

export default Services