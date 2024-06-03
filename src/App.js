import React, { lazy } from 'react'
import { Suspense } from 'react'



import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Website/Pages/Home'
import Shop_details from './Website/Pages/Shop_details'
import Shopping_cart from './Website/Pages/Shopping_cart'
import Checkout_1 from './Website/Pages/Checkout_1'
import Contact from './Website/Pages/Contact'
import Login_1 from './Website/Pages/Login_1'
import Sign_up from './Website/Pages/Sign_up'
import View_shop from './Website/Pages/View_shop'
import Shop from './Website/Pages/Shop'
import View_product from './Website/Pages/View_product'
import Add_cart from './Website/Pages/Add_cart'
import Beauty_product from './Website/Pages/Beauty_product'
import Single_beauty from './Website/Pages/Single_beauty'
import Payment from './Website/Pages/Payment'
import Order_placed from './Website/Pages/Order_placed'
import Web_profile from './Website/Pages/Web_profile'
import Edit_profile from './Website/Pages/Edit_profile'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './Admin/Componets/Spinner'



 // <-----------------------// Admin side--------------------> 

const Dashboard = lazy(() => import('./Admin/pages/Dashboard'))
const Manage_prodct = lazy(() => import('./Admin/pages/Manage_prodct'))
const Catgories_manage = lazy(() => import('./Admin/pages/Catgories_manage'))
const Beauty = lazy(() => import('./Admin/pages/Beauty'))
const Admin_employee = lazy(() => import('./Admin/pages/Admin_employee'))
const Manage_custo = lazy(() => import('./Admin/pages/Manage_custo'))
const Admin_contact = lazy(() => import('./Admin/pages/Admin_contact'))
const Admin_profile = lazy(() => import('./Admin/pages/Admin_profile'))
const Admin_edit_prf = lazy(() => import('./Admin/pages/Admin_edit_prf'))
const Add_categories = lazy(() => import('./Admin/pages/Add_categories'))
const Add_customer = lazy(() => import('./Admin/pages/Add_customer'))
const Add_prodct = lazy(() => import('./Admin/pages/Add_prodct'))
const Admin_order = lazy(() => import('./Admin/pages/Admin_order'))
const Order_list = lazy(() => import('./Admin/pages/Order_list'))
const Add_beauty = lazy(() => import('./Admin/pages/Add_beauty'))
const Admin_Login = lazy(() => import('./Admin/pages/Admin_login'))
const Add_employee = lazy(() => import('./Admin/pages/Add_employee'))
const Admin_404 = lazy(() => import('./Admin/pages/Admin_404'))





function App() {
  return (
    <div>
      <BrowserRouter>

        <ToastContainer></ToastContainer>
        <Routes>


          {/* Webiste side */}

          <Route path='/' element={<Home />} />
          <Route path='/web_profile' element={<Web_profile />} />
          <Route path='/view_shop/:Cate_id' element={<View_shop />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop_details' element={<Shop_details />} />
          <Route path='/shopping_cart' element={<Shopping_cart />} />
          <Route path='/checkout_1' element={<Checkout_1 />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login_1 />} />
          <Route path='/signup' element={<Sign_up />} />
          <Route path='/edit_profile/:id' element={<Edit_profile />} />
          <Route path='/view_product/:ne_id' element={<View_product />} />
          <Route path='/add_to_cart/:neww_id' element={<Add_cart />} />
          <Route path='/Beauty_pages' element={<Beauty_product />} />
          <Route path='/single_beauty/:new_id' element={<Single_beauty />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/Placed_order' element={<Order_placed />} />





          {/* Admin side------> */}



          <Route path='/dashboard' element={
            <Suspense fallback={<Spinner />}>
              <Dashboard />
            </Suspense>
          } />

          <Route path='/manage_prodct' element={
            <Suspense fallback={<Spinner />}>
              <Manage_prodct />
            </Suspense>
          } />


          <Route path='/categories_manage' element={
            <Suspense fallback={<Spinner />}>
              < Catgories_manage />
            </Suspense>
          } />

          <Route path='/beauty_page' element={
            <Suspense fallback={<Spinner />}>
              < Beauty />
            </Suspense>
          } />

          <Route path='/employee' element={
            <Suspense fallback={<Spinner />}>
              < Admin_employee />
            </Suspense>
          } />

          <Route path='/manage_custom' element={
            <Suspense fallback={<Spinner />}>
              < Manage_custo />
            </Suspense>
          } />

          <Route path='/contact_1' element={
            <Suspense fallback={<Spinner />}>
              < Admin_contact />
            </Suspense>
          } />

          <Route path='/Admin_profile' element={
            <Suspense fallback={<Spinner />}>
              < Admin_profile />
            </Suspense>
          } />
          <Route path='/admin_edit_profile/:id' element={
            <Suspense fallback={<Spinner />}>
              < Admin_edit_prf />
            </Suspense>
          } />

          <Route path='/add_categories' element={
            <Suspense fallback={<Spinner />}>
              < Add_categories />
            </Suspense>
          } />


          <Route path='/add_customer' element={
            <Suspense fallback={<Spinner />}>
              < Add_customer />
            </Suspense>
          } />

          <Route path='/add_prod' element={
            <Suspense fallback={<Spinner />}>
              < Add_prodct />
            </Suspense>
          } />

          <Route path='/Admin_order' element={
            <Suspense fallback={<Spinner />}>
              < Admin_order />
            </Suspense>
          } />


          <Route path='/order list' element={
            <Suspense fallback={<Spinner />}>
              < Order_list />
            </Suspense>
          } />

          <Route path='/beauty_prod' element={
            <Suspense fallback={<Spinner />}>
              < Add_beauty />
            </Suspense>
          } />

          <Route path='/admin_login' element={
            <Suspense fallback={<Spinner />}>
              < Admin_Login />
            </Suspense>
          } />

          <Route path='/admin_login' element={
            <Suspense fallback={<Spinner />}>
              < Admin_Login />
            </Suspense>
          } />

          <Route path='/add_employee' element={
            <Suspense fallback={<Spinner />}>
              < Add_employee />
            </Suspense>
          } />

          <Route path='/add_employee' element={
            <Suspense fallback={<Spinner />}>
              < Add_employee />
            </Suspense>
          } />

          <Route path='/add_employee' element={
            <Suspense fallback={<Spinner />}>
              < Add_employee />
            </Suspense>
          } />
          <Route path='*' element={
            <Suspense fallback={<Spinner />}>
              < Admin_404 />
            </Suspense>
          } />

        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App