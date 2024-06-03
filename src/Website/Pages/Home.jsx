import React, { useEffect, useState } from 'react'
import Header from '../Componets/Header'
import Header_1 from '../Componets/Header_1'
import Footer from '../Componets/Footer'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Profile_clr.css'

// import { Helmet } from 'react-helmet'

function Home() {

    useEffect(() => {

        fetch()
        fetchh()
        fetc()
        fetchwomen()
        fetchkids()
    }, [])

    const [data, setData] = useState([])

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/Products?prdvalue=True`);
        console.log(res.data)
        setData(res.data)
    }

    const [datawomen, setDatawom] = useState([])

    const fetchwomen = async () => {
        const res = await axios.get(`http://localhost:3000/Products?prdvalue=True`);
        console.log(res.data)
        setDatawom(res.data)
    }
    const [datakids, setDatakids] = useState([])

    const fetchkids = async () => {
        const res = await axios.get(`http://localhost:3000/Products?prdvalue=True`);
        console.log(res.data)
        setDatakids(res.data)
    }




    const [data1, setData1] = useState([]);

    const fetchh = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setData1(res.data)
    }

    const [data2, setDataa] = useState([]);

    const fetc = async () => {
        const res = await axios.get(`http://localhost:3000/Beauty`);
        console.log(res.data);
        setDataa(res.data)
    }
    return (
        <div>
            <Helmet>
                {/* <!-- JavaScript Libraries -->  */}
                {/* <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script> */}
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
                <script src="/website/lib/easing/easing.min.js"></script>
                <script src="/website/lib/owlcarousel/owl.carousel.min.js"></script>

                {/* <!-- Contact Javascript File -->  */}
                <script src="/website/mail/jqBootstrapValidation.min.js"></script>
                <script src="/website/mail/contact.js"></script>

                {/* <!-- Template Javascript -->  */}
                <script src="/website/js/main.js"></script>

            </Helmet>
            <Header />
            <Header_1 />
            {/* <!-- Featured Start --> */}
            <div class="container-fluid pt-5">
                <div class="row px-xl-5 pb-3">
                    <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div class="d-flex align-items-center border mb-4" style={{ padding: "30px" }}>
                            <h1 class="fa fa-check text-danger m-0 mr-3"></h1>
                            <h5 class="font-weight-semi-bold m-0">Quality Product</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div class="d-flex align-items-center border mb-4" style={{ padding: "30px" }}>
                            <h1 class="fa fa-shipping-fast text-danger m-0 mr-2"></h1>
                            <h5 class="font-weight-semi-bold m-0">Free Shipping</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div class="d-flex align-items-center border mb-4" style={{ padding: "30px" }}>
                            <h1 class="fas fa-exchange-alt text-danger m-0 mr-3"></h1>
                            <h5 class="font-weight-semi-bold m-0">14-Day Return</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div class="d-flex align-items-center border mb-4" style={{ padding: "30px" }}>
                            <h1 class="fa fa-phone-volume text-danger m-0 mr-3"></h1>
                            <h5 class="font-weight-semi-bold m-0">24/7 Support</h5>
                        </div>
                    </div>
                </div>
                {/* <!-- Featured End --> */}

                <div class="row px-xl-5" >
                    <div class="col">
                        {/* <div class="nav nav-tabs justify-content-center border-secondary mb-4 ">
                            <a class="nav-item nav-link active" data-toggle="tab" href="#tab-pane-1">Category dresses(50)</a>
                            <a class="nav-item nav-link" data-toggle="tab" href="#tab-pane-2">Women's dresses(60)</a>
                            <a class="nav-item nav-link" data-toggle="tab" href="#tab-pane-3">Baby's dresses (45)</a>
                        </div> */}

                        {/* <!-- Categories Start --> */}
                        <div class="row px-xl-5 pb-3">
                            <div className='row '>
                                {
                                    data1 && data1.map((data, index) => {
                                        return (
                                            <div className="col-lg-4 col-md-3 col-sm-6 pb-1 mt-5">
                                                <Link to={'/view_shop/' + data.id} style={{ textDecoration: "none" }}>

                                                    <div class="cat-item d-flex flex-column border mb-4" style={{ padding: "0px" }}>

                                                        <div href="" class="cat-img position-relative overflow-hidden mb-3 rounded-2">
                                                            <img class="img-fluid" src={data.url} />
                                                        </div>
                                                        <h5 class="font-weight-semi-bold m-0 text-center">{data.Category}</h5>
                                                    </div>

                                                </Link>
                                            </div>

                                        )
                                    })
                                }

                            </div>
                        </div>
                        {/* <!-- Categories End --> */}

                    </div>
                </div>
            </div>


            {/* <!-- Offer Start --> */}
            <div class="container-fluid offer pt-5">
                <div class="row px-xl-5">
                    <div class="col-md-6 pb-4">
                        <div class="position-relative text-center text-md-right text-white mb-2 py-5 px-5" style={{ backgroundColor: "#efeee8" }}>
                            <img src="Website/img/aside1_preview.png" alt="" />
                            <div class="position-relative" style={{ zindex: "1" }}>
                                <h5 class="text-uppercase text-danger mb-3">20% off the all order</h5>
                                <h1 class="mb-4 font-weight-semi-bold">Men Collection</h1>
                                <Link to='/view_shop/1714191085453' class="btn btn-outline-danger py-md-2 px-md-3">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 pb-4">
                        <div class="position-relative  text-center text-md-left text-white mb-2 py-5 px-5" style={{ backgroundColor: "#efeee8" }}>
                            <img src="Website/img/aside-preview.png" />
                            <div class="position-relative" style={{ zindex: "1" }}>
                                <h5 class="text-uppercase text-danger mb-3">20% off the all order</h5>
                                <h1 class="mb-4 font-weight-semi-bold">Women Collection</h1>
                                <Link to='view_shop/1714191164401' class="btn btn-outline-danger py-md-2 px-md-3">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Offer End --> */}

            {/* Carousel */}
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
                {/* Indicators/dots */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
                    <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
                    <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
                </div>
                {/* The slideshow/carousel */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://assets.tatacliq.com/medias/sys_master/images/48190417207326.jpg" alt="Los Angeles" className="d-block w-100" />
                    </div>
                   
                </div>
                {/* Left and right controls/icons */}
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon" />
                </button>
            </div>





            {/* <!-- Products Start --> */}
            <div class="container-fluid pt-5">
                <div class="text-center mb-4">
                    <h2 class="section-title px-5"><span class="px-2">Men Products</span></h2>
                </div>
                <div class="row px-xl-5 pb-3">
                    <div className="row">
                        {
                            data && data.map(value =>
                                value.Cate_id == '1714191085453' && (
                                    (

                                        <div className="col-md-3 col-sm-6 mt-5">
                                            <Link to={`/view_shop/${value.Cate_id}`} style={{ textDecoration: "none" }}>
                                                <div className="product-grid">
                                                    <div className="product-image">
                                                        <a className="image">
                                                            <img className="img-1" src={value.url} />
                                                            <img className="img-2" src={value.secndIMG} />
                                                        </a>
                                                        <ul className="product-links">
                                                            {/* <li><a href="#"><i className="fa fa-heart" /></a></li> */}
                                                            {/* <li><a href="#"><i className="fa fa-random" /></a></li> */}
                                                            {/* <li><a href="#"><i className="fa fa-shopping-cart" /></a></li> */}
                                                        </ul>
                                                        <a className="product-view"><i className="fa fa-search" /></a>
                                                    </div>
                                                    <div className="product-content">
                                                        <ul className="rating">
                                                            <li className="fas fa-star" />
                                                            <li className="fas fa-star" />
                                                            <li className="fas fa-star" />
                                                            <li className="fas fa-star" />
                                                            <li className="fas fa-star disable" />
                                                            <li className="disable">(100+ reviews)</li>
                                                        </ul>
                                                        <h3 className="title product_na">{value.Prod_name}</h3>
                                                        <div className="price">RS.{value.price}</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>

                                    )

                                )
                            )
                        }

                    </div>






                </div>
            </div>
            {/* <!-- Products End --> */}


            {/* <!-- Products Start --> */}
            <div class="container-fluid pt-5">
                <div class="text-center mb-4">
                    <h2 class="section-title px-5"><span class="px-2">Women Products</span></h2>
                </div>
                <div class="row px-xl-5 pb-3">
                    <div className="row">
                        {
                            datawomen && datawomen.map(value =>
                                value.Cate_id == '1714191164401' && (
                                    (
                                        <div className="col-md-3 col-sm-6 mt-5">
                                            <Link to={`/view_shop/${value.Cate_id}`} style={{ textDecoration: "none" }}>
                                                <div className="product-grid">
                                                    <div className="product-image">
                                                        <a className="image">
                                                            <img className="img-1" src={value.url} />
                                                            <img className="img-2" src={value.secndIMG} />
                                                        </a>
                                                        <ul className="product-links">
                                                            {/* <li><a href="#"><i className="fa fa-heart" /></a></li> */}
                                                            {/* <li><a href="#"><i className="fa fa-random" /></a></li> */}
                                                            {/* <li><a href="#"><i className="fa fa-shopping-cart" /></a></li> */}
                                                        </ul>
                                                        <a className="product-view"><i className="fa fa-search" /></a>
                                                    </div>
                                                    <div className="product-content">
                                                        <ul className="rating">
                                                            <li className="fas fa-star" />
                                                            <li className="fas fa-star" />
                                                            <li className="fas fa-star" />
                                                            <li className="fas fa-star" />
                                                            <li className="fas fa-star disable" />
                                                            <li className="disable">(100+ reviews)</li>
                                                        </ul>
                                                        <h3 className="title product_na">{value.Prod_name}</h3>
                                                        <div className="price">RS.{value.price}</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>

                                    )

                                )
                            )
                        }

                    </div>

                </div>
            </div>
            {/* <!-- Products End --> */}




            {/* <!-- Products Start --> */}
            <div class="container-fluid pt-5">
                <div class="text-center mb-4">
                    <h2 class="section-title px-5"><span class="px-2">Kid's Products</span></h2>
                </div>
                <div class="row px-xl-5 pb-3">
                    <div className="row">
                        {
                            datakids && datakids.map(value =>
                                value.Cate_id == '1714191123083' && (
                                    (
                                        <div className="col-md-3 col-sm-6 mt-5">
                                            <Link to={`/view_shop/${value.Cate_id}`} style={{ textDecoration: "none" }}>
                                                <div className="product-grid">
                                                    <div className="product-image">
                                                        <a className="image">
                                                            <img className="img-1" src={value.url} />
                                                            <img className="img-2" src={value.secndIMG} />
                                                        </a>
                                                        <ul className="product-links">
                                                            {/* <li><a href="#"><i className="fa fa-heart" /></a></li> */}
                                                            {/* <li><a href="#"><i className="fa fa-random" /></a></li> */}
                                                            {/* <li><a href="#"><i className="fa fa-shopping-cart" /></a></li> */}
                                                        </ul>
                                                        <a className="product-view"><i className="fa fa-search" /></a>
                                                    </div>
                                                    <div className="product-content">
                                                        <ul className="rating">
                                                            <li className="fas fa-star" />
                                                            <li className="fas fa-star" />
                                                            <li className="fas fa-star" />
                                                            <li className="fas fa-star" />
                                                            <li className="fas fa-star disable" />
                                                            <li className="disable">(100+ reviews)</li>
                                                        </ul>
                                                        <h3 className="title product_na">{value.Prod_name}</h3>
                                                        <div className="price">RS.{value.price}</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>

                                    )

                                )
                            )
                        }

                    </div>

                </div>
            </div>
            {/* <!-- Products End --> */}


            {/* <!-- Subscribe Start --> */}
            <div class="container-fluid bg-secondary my-5">
                <div class="row justify-content-md-center py-5 px-xl-5">
                    <div class="col-md-6 col-12 py-5">
                        <div class="text-center mb-2 pb-2">
                            <h2 class="section-title px-5 mb-3"><span class="bg-secondary px-2">Stay Updated</span></h2>
                            <p>Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam labore at justo ipsum eirmod duo labore labore.</p>
                        </div>
                        <form action="">
                            <div class="input-group">
                                <input type="text" class="form-control border-white p-4" placeholder="Email Goes Here" />
                                <div class="input-group-append">
                                    <button class="btn btn-dark px-4">Subscribe</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- Subscribe End --> */}


            <div class="card">
                    <img src="https://images-static.nykaa.com/uploads/6cdad7f9-ef11-4c61-a3bc-8dde7679c4eb.jpg?tr=w-1800,cm-pad_resize" alt="" width={'100%'} />
            </div>
           


            {/* <!-- Products Start --> */}

            <div class="container-fluid py-5">
                <div class="text-center mb-4">
                    <h2 class="section-title px-5"><span class="px-2">Beauty Category</span></h2>
                </div>
                <div class="row px-xl-5">
                    <div class="col">
                        <div class="owl-carousel related-carousel">

                            {
                                data2 && data2.map((valuee, index) => {

                                    return (
                                        <div className="col-md-3 col-sm-6 mt-5">
                                            <Link to={`/Beauty_pages`} style={{ textDecoration: "none" }}>
                                                <div className="product-grid " style={{ width: "300px" }}>
                                                    <div className="product-image">
                                                        <a href="#" className="image">
                                                            <img className="img-1" src={valuee.url} />
                                                            <img className="img-2" src={valuee.BeautySecimg} />
                                                        </a>
                                                        <ul className="product-links">
                                                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                            <li><a href="#"><i className="fa fa-random" /></a></li>
                                                            <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                                        </ul>
                                                        <a href="#" className="product-view"><i className="fa fa-search" /></a>
                                                    </div>
                                                    <div className="product-content">
                                                        <ul className="rating">
                                                            <li className="fas fa-star" />
                                                            <li className="fas fa-star" />
                                                            <li className="fas fa-star" />
                                                            <li className="fas fa-star" />
                                                            <li className="fas fa-star disable" />
                                                            <li className="disable">(1 reviews)</li>
                                                        </ul>
                                                        <h3 className="title"><a href="#">{valuee.Prod_name}</a></h3>
                                                        <div className="price">RS.{valuee.price}</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Products End --> */}


            <div className="container-fluid py-5">
                <div className="row px-xl-5">
                    <div className="col">
                        <div className="owl-carousel vendor-carousel">
                            <div className="vendor-item border p-4">
                                <img src="Website/img/vendor-1.jpg" alt />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="Website/img/vendor-2.jpg" alt />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="Website/img/vendor-3.jpg" alt />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="Website/img/vendor-4.jpg" alt />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="Website/img/vendor-5.jpg" alt />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="Website/img/vendor-6.jpg" alt />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="Website/img/vendor-7.jpg" alt />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="Website/img/vendor-8.jpg" alt />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Home























{/* <!-- Categories Start --> */ }
//  <div class="container-fluid pt-5">
//  <div class="row px-xl-5 pb-3">
//      <div class="col-lg-4 col-md-6 pb-1" >
//          <div class="cat-item d-flex flex-column border mb-4" style={{ padding: "10px" }}>
{/* <p class="text-right">15 Products</p> */ }
{/* <a href="" class="cat-img position-relative overflow-hidden mb-3 rounded-2">
                 <img class="img-fluid" src="https://i.pinimg.com/564x/0d/ee/4c/0dee4cf9e66028f67c28da19cdebebc6.jpg" alt="" />
             </a>
             <h5 class="font-weight-semi-bold m-0">Men dresses</h5>
         </div>
     </div> */}

{/* <div class="col-lg-4 col-md-6 pb-1">
         <div class="cat-item d-flex flex-column border mb-4" style={{ padding: "10px" }}>

             <a href="" class="cat-img position-relative overflow-hidden mb-3 rounded-2">
                 <img class="img-fluid" src="https://i.pinimg.com/564x/44/f4/73/44f473e82ab909bbdf772841e010bf83.jpg" alt="" />
             </a>
             <h5 class="font-weight-semi-bold m-0">Women's dresses</h5>
         </div>
     </div>
     <div class="col-lg-4 col-md-6 pb-1">
         <div class="cat-item d-flex flex-column border mb-4" style={{ padding: "10px" }}> */}
{/* <p class="text-right">15 Products</p> */ }
{/* <a href="" class="cat-img position-relative overflow-hidden mb-3 rounded-2">
                 <img class="img-fluid" src="https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/8/w/w/9-10-years-hoode-suit-black-9-10-blood-panther-original-imagx45qnhngvt4h.jpeg?q=70" alt="" />
             </a>
             <h5 class="font-weight-semi-bold m-0">Baby's dresses</h5>
         </div>
     </div>
     <div class="col-lg-4 col-md-6 pb-1">
         <div class="cat-item d-flex flex-column border mb-4" style={{ padding: "10px" }}> */}
{/* <p class="text-right">15 Products</p> */ }
{/* <a href="" class="cat-img position-relative overflow-hidden mb-3 rounded-2">
                 <img class="img-fluid" src="https://i.pinimg.com/564x/bb/95/c2/bb95c27ad795e48dcd607b36eb4c95c6.jpg" alt="" />
             </a>
             <h5 class="font-weight-semi-bold m-0"> Smart watch</h5>
         </div>
     </div>
     <div class="col-lg-4 col-md-6 pb-1">
         <div class="cat-item d-flex flex-column border mb-4" style={{ padding: "10px" }}> */}
{/* <p class="text-right">15 Products</p> */ }
{/* <a href="" class="cat-img position-relative overflow-hidden mb-3 rounded-2">
                 <img class="img-fluid" src="https://i.pinimg.com/564x/a5/a3/4b/a5a34b51491d8d9586773fe9617035bd.jpg" alt="" />
             </a>
             <h5 class="font-weight-semi-bold m-0">Bags</h5>
         </div>
     </div>
     <div class="col-lg-4 col-md-6 pb-1">
         <div class="cat-item d-flex flex-column border mb-4" style={{ padding: "10px" }}> */}
{/* <p class="text-right">15 Products</p> */ }
{/* <a href="" class="cat-img position-relative overflow-hidden mb-3 rounded-2">
                 <img class="img-fluid" src="https://i.pinimg.com/564x/8e/c2/db/8ec2dbe64a3bbf913809adc2370f81e5.jpg" alt="" />
             </a>
             <h5 class="font-weight-semi-bold m-0">Shoes</h5>
         </div>
     </div>
 </div>
</div> */}
{/* <!-- Categories End --> */ }