import React from 'react'
import Footer from '../Componets/Footer'
import Header from '../Componets/Header'
import Navbar from '../Componets/Navbar'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

function Checkout_1() {
    return (
        <div>
            <Header />
            <Navbar />
            {/* <!-- Page Header Start --> */}
            <div class="container-fluid bg-secondary mb-5" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%' }}>
                <div class="d-flex flex-column align-items-center justify-content-center" style={{ height: "300px" }}>
                    <h1 class="font-weight-semi-bold text-uppercase mb-3">Checkout</h1>
                    <div class="d-inline-flex">
                        <p class="m-0"><Link to="/">Home</Link></p>
                        <p class="m-0 px-2">-</p>
                        <p class="m-0">Checkout</p>
                    </div>
                </div>
            </div>
            {/* <!-- Page Header End --> */}

            {/* <!-- Checkout Start --> */}
            <div class="container-fluid pt-5">
                <div class="row px-xl-5">
                    <div class="col-lg-8">
                        <div class="mb-4">
                            <h4 class="font-weight-semi-bold mb-4">Billing Address</h4>
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <label>First Name</label>
                                    <input class="form-control" type="text" placeholder="John" />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Last Name</label>
                                    <input class="form-control" type="text" placeholder="Doe" />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>E-mail</label>
                                    <input class="form-control" type="text" placeholder="example@email.com" />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Mobile No</label>
                                    <input class="form-control" type="text" placeholder="+123 456 789" />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Address Line 1</label>
                                    <input class="form-control" type="text" placeholder="123 Street" />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Address Line 2</label>
                                    <input class="form-control" type="text" placeholder="123 Street" />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Country</label>
                                    <select class="custom-select">
                                        <option selected>United States</option>
                                        <option>Afghanistan</option>
                                        <option>Albania</option>
                                        <option>Algeria</option>
                                    </select>
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>City</label>
                                    <input class="form-control" type="text" placeholder="New York" />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>State</label>
                                    <input class="form-control" type="text" placeholder="New York" />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>ZIP Code</label>
                                    <input class="form-control" type="text" placeholder="123" />
                                </div>
                                <div class="col-md-12 form-group">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="newaccount" />
                                        <label class="custom-control-label" for="newaccount">Create an account</label>
                                    </div>
                                </div>
                                <div class="col-md-12 form-group">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="shipto" />
                                        <label class="custom-control-label" for="shipto" data-toggle="collapse" data-target="#shipping-address">Ship to different address</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="collapse mb-4" id="shipping-address">
                            <h4 class="font-weight-semi-bold mb-4">Shipping Address</h4>
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <label>First Name</label>
                                    <input class="form-control" type="text" placeholder="John" />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Last Name</label>
                                    <input class="form-control" type="text" placeholder="Doe" />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>E-mail</label>
                                    <input class="form-control" type="text" placeholder="example@email.com" />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Mobile No</label>
                                    <input class="form-control" type="text" placeholder="+123 456 789" />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Address Line 1</label>
                                    <input class="form-control" type="text" placeholder="123 Street" />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Address Line 2</label>
                                    <input class="form-control" type="text" placeholder="123 Street" />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Country</label>
                                    <select class="custom-select">
                                        <option selected>United States</option>
                                        <option>Afghanistan</option>
                                        <option>Albania</option>
                                        <option>Algeria</option>
                                    </select>
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>City</label>
                                    <input class="form-control" type="text" placeholder="New York" />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>State</label>
                                    <input class="form-control" type="text" placeholder="New York" />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>ZIP Code</label>
                                    <input class="form-control" type="text" placeholder="123" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card border-secondary mb-5">
                            <div class="card-header bg-secondary border-0">
                                <h4 class="font-weight-semi-bold m-0">Order Total</h4>
                            </div>
                            <div class="card-body">
                                <h5 class="font-weight-medium mb-3">Products</h5>
                                <div class="d-flex justify-content-between">
                                    <p>Colorful Stylish Shirt 1</p>
                                    <p>$150</p>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <p>Colorful Stylish Shirt 2</p>
                                    <p>$150</p>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <p>Colorful Stylish Shirt 3</p>
                                    <p>$150</p>
                                </div>
                                <hr class="mt-0" />
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
                            </div>
                        </div>
                        <div class="card border-secondary mb-5">
                            <div class="card-header bg-secondary border-0">
                                <h4 class="font-weight-semi-bold m-0">Payment</h4>
                            </div>
                            <div class="card-body">
                                <div class="form-group">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" name="payment" id="paypal" />
                                        <label class="custom-control-label" for="paypal">Paypal</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" name="payment" id="directcheck" />
                                        <label class="custom-control-label" for="directcheck">Direct Check</label>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" name="payment" id="banktransfer" />
                                        <label class="custom-control-label" for="banktransfer">Bank Transfer</label>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer border-secondary bg-transparent">
                                <button class="btn btn-lg btn-block btn-dark font-weight-bold my-3 py-3">Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Checkout End --> */}
            <Footer />
            <Helmet>
                <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
                <script src="website/lib/easing/easing.min.js"></script>
                <script src="website/lib/owlcarousel/owl.carousel.min.js"></script>
                <script src="website/mail/jqBootstrapValidation.min.js"></script>
                <script src="website/mail/contact.js"></script>
                <script src="website/js/main.js"></script>
            </Helmet>

        </div>
    )
}

export default Checkout_1