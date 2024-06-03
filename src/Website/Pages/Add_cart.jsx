import React, { useEffect, useState } from 'react'
import Footer from '../Componets/Footer'
import Header from '../Componets/Header'
import Navbar from '../Componets/Navbar'
import { Helmet } from 'react-helmet'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'


function Add_cart() {


    useEffect(() => {
        fetch()

    }, []);
    const { neww_id } = useParams();
    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/Products?id=${neww_id}`);
        console.log(res.data);
        setData(res.data)
    }
    
    return (
        <div>
            <Header />
            <Navbar />
            {/* <!-- Page Header Start --> */}
            <div class="container-fluid bg-secondary mb-5" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%' }}>
                <div class="d-flex flex-column align-items-center justify-content-center" style={{ height: "300px" }}>
                    <h1 class="font-weight-semi-bold text-uppercase mb-3">Shopping Cart</h1>
                    <div class="d-inline-flex">
                        <p class="m-0"><Link to="/">Home</Link></p>
                        <p class="m-0 px-2">-</p>
                        <p class="m-0">Shopping Cart</p>
                    </div>
                </div>
            </div>
            {/* <!-- Page Header End --> */}

            {/* <!-- Cart Start --> */}
            <div class="container-fluid pt-5">
                <div class="row px-xl-5">
                    <div class="col-lg-8 table-responsive mb-5">
                        <table class="table table table-hover table-bordered text-center mb-0">
                            <thead class="bg-secondary text-dark">
                                <tr>
                                    <th>Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody class="align-middle">
                                <tr>
                                    <td class="align-middle"><img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/8/a866838NK_BULLM00010478_1.jpg?rnd=20200526195200&tr=w-256" alt="" style={{ width: "50px;",height:"100px" }} /> Colorful Stylish Shirt</td>
                                    <td class="align-middle">$150</td>
                                    <td class="align-middle">
                                        <div class="input-group quantity mx-auto" style={{ width: "100px;" }}>
                                            <div class="input-group-btn">
                                                <button class="btn btn-sm btn-dark btn-minus" >
                                                    <i class="fa fa-minus"></i>
                                                </button>
                                            </div>
                                            <input type="text" class="form-control form-control-sm bg-secondary text-center" value="1" />
                                            <div class="input-group-btn">
                                                <button class="btn btn-sm btn-dark btn-plus">
                                                    <i class="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="align-middle">$150</td>
                                    <td class="align-middle"><button class="btn btn-sm btn-dark"><i class="fa-solid fa-trash" style={{color: "white"}}></i></button></td>
                                </tr>
                                <tr>
                                    <td class="align-middle"><img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/8/3/83882b8PP_USPOL00117647_1.jpg?rnd=20200526195200&tr=w-256" alt="" style={{ width: "50px;",height:"100px" }} /> Colorful Stylish Shirt</td>
                                    <td class="align-middle">$150</td>
                                    <td class="align-middle">
                                        <div class="input-group quantity mx-auto" style={{ width: "100px;" }}>
                                            <div class="input-group-btn">
                                                <button class="btn btn-sm btn-dark btn-minus" >
                                                    <i class="fa fa-minus"></i>
                                                </button>
                                            </div>
                                            <input type="text" class="form-control form-control-sm bg-secondary text-center" value="1" />
                                            <div class="input-group-btn">
                                                <button class="btn btn-sm btn-dark btn-plus">
                                                    <i class="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="align-middle">$150</td>
                                    <td class="align-middle"><button class="btn btn-sm btn-dark"><i class="fa-solid fa-trash" style={{color: "white"}}></i></button></td>
                                </tr>
                                <tr>
                                    <td class="align-middle"><img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/0/c/0c2e6b87005865501_1.jpg?rnd=20200526195200&tr=w-256" alt=""style={{ width: "50px;",height:"100px" }} /> Colorful Stylish Shirt</td>
                                    <td class="align-middle">$150</td>
                                    <td class="align-middle">
                                        <div class="input-group quantity mx-auto" style={{ width: "100px;" }}>
                                            <div class="input-group-btn">
                                                <button class="btn btn-sm btn-dark btn-minus" >
                                                    <i class="fa fa-minus"></i>
                                                </button>
                                            </div>
                                            <input type="text" class="form-control form-control-sm bg-secondary text-center" value="1" />
                                            <div class="input-group-btn">
                                                <button class="btn btn-sm btn-dark btn-plus">
                                                    <i class="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="align-middle">$150</td>
                                    <td class="align-middle"><button class="btn btn-sm btn-dark"><i class="fa-solid fa-trash" style={{color: "white"}}></i></button></td>
                                </tr>
                                <tr>
                                    <td class="align-middle"><img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/9/c9c1be2230239_1.jpg?rnd=20200526195200&tr=w-256" alt=""style={{ width: "50px;",height:"100px" }} /> Colorful Stylish Shirt</td>
                                    <td class="align-middle">$150</td>
                                    <td class="align-middle">
                                        <div class="input-group quantity mx-auto" style={{ width: "100px;" }}>
                                            <div class="input-group-btn">
                                                <button class="btn btn-sm btn-dark btn-minus" >
                                                    <i class="fa fa-minus"></i>
                                                </button>
                                            </div>
                                            <input type="text" class="form-control form-control-sm bg-secondary text-center" value="1" />
                                            <div class="input-group-btn">
                                                <button class="btn btn-sm btn-dark btn-plus">
                                                    <i class="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="align-middle">$150</td>
                                    <td class="align-middle"><button class="btn btn-sm btn-dark"><i class="fa-solid fa-trash" style={{color: "white"}}></i></button></td>
                                </tr>
                       
                            </tbody>
                        </table>
                    </div>
                    <div class="col-lg-4">
                        <form class="mb-5" action="">
                            <div class="input-group">
                                <input type="text" class="form-control p-4" placeholder="Coupon Code" />
                                <div class="input-group-append">
                                    <button class="btn btn-dark">Apply Coupon</button>
                                </div>
                            </div>
                        </form>
                        <div class="card border-secondary mb-5">
                            <div class="card-header bg-secondary border-0">
                                <h4 class="font-weight-semi-bold m-0">Cart Summary</h4>
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between mb-3 pt-1">
                                    <h6 class="font-weight-medium">Subtotal</h6>
                                    <h6 class="font-weight-medium">$150</h6>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <h6 class="font-weight-medium">Shipping</h6>
                                    <h6 class="font-weight-medium">$10</h6>
                                </div>
                            </div>
                            <div class="card-footer border-secondary bg-transparent">
                                <div class="d-flex justify-content-between mt-2">
                                    <h5 class="font-weight-bold">Total</h5>
                                    <h5 class="font-weight-bold">$160</h5>
                                </div>
                                <Link to='/payment' class="btn btn-block btn-dark my-3 py-3">Proceed To Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Cart End --> */}

            <Footer />
            <Helmet>
                <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
                <script src="/website/lib/easing/easing.min.js"></script>
                <script src="/website/lib/owlcarousel/owl.carousel.min.js"></script>
                <script src="/website/mail/jqBootstrapValidation.min.js"></script>
                <script src="/website/mail/contact.js"></script>
                <script src="/website/js/main.js"></script>
            </Helmet>

        </div>
    )
}

export default Add_cart