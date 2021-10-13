import Head from 'next/head'
import Container from '../components/Container'
import LateralLeft from '../components/LateralLeft'
import fetch from 'isomorphic-fetch'
import Users from '../components/Users'
import Link from 'next/link'

const ProductTwo = (props) => {
    return (
        <div>
            <Container>
                <Head>
                    <title>Charles Roots Project - Producto 2</title>
                </Head>
                <div className="mt-4 d-flex justify-content-center">
                    <h3>PRODUCTO 2</h3>
                </div>

                <div className="row col-md-12">
                    <LateralLeft></LateralLeft>
                    <div className="col-md-5">
                        <div className="card col-md-12" >
                            <img src="https://www.bancoazteca.com.gt/BancoAztecaGua/resources/img/credito-personal-banco-azteca.jpg" className="card-img-top mx-0" alt="..." />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="list-group">
                            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Title</h5>
                                
                            </div>
                            <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipiscing elit ullamcorper, porta mi aliquet a vivamus quisque curabitur, potenti leo at gravida luctus ut vitae. </p>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Another title</h5>
                                
                            </div>
                            <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipiscing elit ullamcorper, porta mi aliquet a vivamus quisque curabitur, potenti leo at gravida luctus ut vitae. </p>
                            </a>
                        </div>
                    </div>

                </div>
                
            </Container>
        </div>
    )
}

export default ProductTwo