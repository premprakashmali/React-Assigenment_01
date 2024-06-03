// import React from 'react'
// import Admin_header from '../Componets/Admin_header'
// import { Helmet } from 'react-helmet'

// function Admin_contact() {
//   return (
//     <div>
//       <Helmet>
//         <link rel="stylesheet" href="assets/plugins/bootstrap/css/bootstrap.min.css" />
//       </Helmet>
//       <div id="main_content">
//         <div className="page">
//           <div id="page_top" className="section-body top_dark">
//             <div className="container-fluid">
//               <div className="page-header">
//                 <div className="left">
//                   <a href="javascript:void(0)" className="icon menu_toggle mr-3"><i className="fa  fa-align-left" /></a>
//                   <h1 className="page-title">Products</h1>
//                 </div>
//                 <div className="right">
//                   <div className="input-icon xs-hide mr-4">
//                     <input type="text" className="form-control" placeholder="Search for..." />
//                     <span className="input-icon-addon"><i class="fa-solid fa-magnifying-glass" style={{ color: "#ffff" }}></i></span>
//                   </div>
//                   <div className="notification d-flex">
//                     <div className="dropdown d-flex">
//                       <a className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-2" data-toggle="dropdown"><i className="fa fa-language" /></a>
//                       <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
//                         <a className="dropdown-item" href="#"><img className="w20 mr-2" src="Admin/images/flags/us.svg" />English</a>
//                         <div className="dropdown-divider" />
//                         <a className="dropdown-item" href="#"><img className="w20 mr-2" src="Admin/images/flags/es.svg" />Spanish</a>
//                         <a className="dropdown-item" href="#"><img className="w20 mr-2" src="Admin/images/flags/jp.svg" />japanese</a>
//                         <a className="dropdown-item" href="#"><img className="w20 mr-2" src="Admin/images/flags/bl.svg" />France</a>
//                       </div>
//                     </div>
//                     <div className="dropdown d-flex">
//                       <a className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-2" data-toggle="dropdown"><i className="fa fa-envelope" /><span className="badge badge-success nav-unread" /></a>
//                       <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
//                         <ul className="right_chat list-unstyled w350 p-0">
//                           <li className="online">
//                             <a href="javascript:void(0);" className="media">
//                               <img className="media-object" src="Admin/images/xs/avatar4.jpg" alt />
//                               <div className="media-body">
//                                 <span className="name">Donald Gardner</span>
//                                 <div className="message">It is a long established fact that a reader</div>
//                                 <small>11 mins ago</small>
//                                 <span className="badge badge-outline status" />
//                               </div>
//                             </a>
//                           </li>
//                           <li className="online">
//                             <a href="javascript:void(0);" className="media">
//                               <img className="media-object " src="Admin/images/xs/avatar5.jpg" alt />
//                               <div className="media-body">
//                                 <span className="name">Wendy Keen</span>
//                                 <div className="message">There are many variations of passages of Lorem Ipsum</div>
//                                 <small>18 mins ago</small>
//                                 <span className="badge badge-outline status" />
//                               </div>
//                             </a>
//                           </li>
//                           <li className="offline">
//                             <a href="javascript:void(0);" className="media">
//                               <img className="media-object " src="Admin/images/xs/avatar2.jpg" alt />
//                               <div className="media-body">
//                                 <span className="name">Matt Rosales</span>
//                                 <div className="message">Contrary to popular belief, Lorem Ipsum is not simply</div>
//                                 <small>27 mins ago</small>
//                                 <span className="badge badge-outline status" />
//                               </div>
//                             </a>
//                           </li>
//                           <li className="online">
//                             <a href="javascript:void(0);" className="media">
//                               <img className="media-object " src="Admin/images/xs/avatar3.jpg" alt />
//                               <div className="media-body">
//                                 <span className="name">Phillip Smith</span>
//                                 <div className="message">It has roots in a piece of classical Latin literature from 45 BC</div>
//                                 <small>33 mins ago</small>
//                                 <span className="badge badge-outline status" />
//                               </div>
//                             </a>
//                           </li>
//                         </ul>
//                         <div className="dropdown-divider" />
//                         <a href="javascript:void(0)" className="dropdown-item text-center text-muted-dark readall">Mark all as read</a>
//                       </div>
//                     </div>
//                     <div className="dropdown d-flex">
//                       <a className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-2" data-toggle="dropdown"><i className="fa fa-bell" /><span className="badge badge-primary nav-unread" /></a>
//                       <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
//                         <ul className="list-unstyled feeds_widget">
//                           <li>
//                             <div className="feeds-left"><i className="fa fa-check" /></div>
//                             <div className="feeds-body">
//                               <h4 className="title text-danger">Issue Fixed <small className="float-right text-muted">11:05</small></h4>
//                               <small>WE have fix all Design bug with Responsive</small>
//                             </div>
//                           </li>
//                           <li>
//                             <div className="feeds-left"><i className="fa fa-user" /></div>
//                             <div className="feeds-body">
//                               <h4 className="title">New User <small className="float-right text-muted">10:45</small></h4>
//                               <small>I feel great! Thanks team</small>
//                             </div>
//                           </li>
//                           <li>
//                             <div className="feeds-left"><i className="fa fa-thumbs-o-up" /></div>
//                             <div className="feeds-body">
//                               <h4 className="title">7 New Feedback <small className="float-right text-muted">Today</small></h4>
//                               <small>It will give a smart finishing to your site</small>
//                             </div>
//                           </li>
//                           <li>
//                             <div className="feeds-left"><i className="fa fa-question-circle" /></div>
//                             <div className="feeds-body">
//                               <h4 className="title text-warning">Server Warning <small className="float-right text-muted">10:50</small></h4>
//                               <small>Your connection is not private</small>
//                             </div>
//                           </li>
//                           <li>
//                             <div className="feeds-left"><i className="fa fa-shopping-cart" /></div>
//                             <div className="feeds-body">
//                               <h4 className="title">7 New Orders <small className="float-right text-muted">11:35</small></h4>
//                               <small>You received a new oder from Tina.</small>
//                             </div>
//                           </li>
//                         </ul>
//                         <div className="dropdown-divider" />
//                         <a href="javascript:void(0)" className="dropdown-item text-center text-muted-dark readall">Mark all as read</a>
//                       </div>
//                     </div>
//                     <div className="dropdown d-flex">
//                       <a className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-2" data-toggle="dropdown"><i className="fa fa-user" /></a>
//                       <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
//                         <a className="dropdown-item" href="page-profile.html"><i className="dropdown-icon fe fe-user" /> Profile</a>
//                         <a className="dropdown-item" href="app-setting.html"><i className="dropdown-icon fe fe-settings" /> Settings</a>
//                         <a className="dropdown-item" href="javascript:void(0)"><span className="float-right"><span className="badge badge-primary">6</span></span><i className="dropdown-icon fe fe-mail" /> Inbox</a>
//                         <a className="dropdown-item" href="javascript:void(0)"><i className="dropdown-icon fe fe-send" /> Message</a>
//                         <div className="dropdown-divider" />
//                         <a className="dropdown-item" href="javascript:void(0)"><i className="dropdown-icon fe fe-help-circle" /> Need help?</a>
//                         <a className="dropdown-item" href="login.html"><i className="dropdown-icon fe fe-log-out" /> Sign out</a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Admin_header />
//         <div className="page">
//           <div>
//             <div className="section-body mt-3">
//               <div className="container-fluid">
//                 <div className="row clearfix">
//                   <div className="col-lg-12">
//                     <div className="card">
//                       <div className="card-body">
//                         <div className="d-md-flex justify-content-between">
//                           <ul className="nav nav-tabs b-none">
//                             <li className="nav-item"><a className="nav-link active" id="list-tab" data-toggle="tab" href="#list"><i className="fa fa-list-ul" />User List</a></li>
//                             <li className="nav-item"><a className="nav-link" id="grid-tab" data-toggle="tab" href="#grid"><i className="fa fa-th" /> Grid</a></li>
//                             <li className="nav-item"><a className="nav-link" id="addnew-tab" data-toggle="tab" href="#addnew"><i className="fa fa-plus" /> Add New</a></li>
//                           </ul>
//                           <div className="d-flex align-items-center sort_stat">
//                             <div className="d-flex">
//                               <span className="bh_income">2,5,1,8,3,6,7,5,3,6,7,5</span>
//                               <div className="ml-2">
//                                 <p className="mb-0 font-11">MY INCOME</p>
//                                 <h5 className="font-16 mb-0">$5,510</h5>
//                               </div>
//                             </div>
//                             <div className="d-flex ml-3">
//                               <span className="bh_traffic">5,8,9,10,5,2,5,8,9,10</span>
//                               <div className="ml-2">
//                                 <p className="mb-0 font-11">SITE TRAFFIC</p>
//                                 <h5 className="font-16 mb-0">53% Up</h5>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="input-group mt-2">
//                           <input type="text" className="form-control search" placeholder="Search..." />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="section-body">
//               <div className="container-fluid">
//                 <div className="tab-content">
//                   <div className="tab-pane fade show active" id="list" role="tabpanel">
//                     <div className="row clearfix">
//                       <div className="col-lg-12">
//                         <div className="table-responsive" id="users">
//                           <table className="table table-hover table-vcenter text-nowrap table_custom border-style list">
//                             <tbody>
//                               <tr className>
//                                 <td className="width35 hidden-xs">
//                                   <a href="javascript:void(0);" className="mail-star"><i className="fa fa-star" /></a>
//                                 </td>
//                                 <td className="text-center width40">
//                                   <div className="avatar d-block">
//                                     <img className="avatar" src="Admin/images/xs/avatar4.jpg" alt="avatar" />
//                                   </div>
//                                 </td>
//                                 <td>
//                                   <div><a href="javascript:void(0);">John Smith</a></div>
//                                   <div className="text-muted">+264-625-2583</div>
//                                 </td>
//                                 <td className="hidden-xs">
//                                   <div className="text-muted">johnsmith@info.com</div>
//                                 </td>
//                                 <td className="hidden-sm">
//                                   <div className="text-muted">455 S. Airport St. Moncks Corner, SC 29461</div>
//                                 </td>
//                                 <td className="text-right">
//                                   <a className="btn btn-sm btn-link" href="javascript:void(0)" data-toggle="tooltip" title="Phone"><i className="fa fa-phone" /></a>
//                                   <a className="btn btn-sm btn-link" href="javascript:void(0)" data-toggle="tooltip" title="Mail"><i className="fa fa-envelope" /></a>
//                                   <a className="btn btn-sm btn-link hidden-xs js-sweetalert" data-type="confirm" href="javascript:void(0)" data-toggle="tooltip" title="Delete"><i className="fa fa-trash" /></a>
//                                 </td>
//                               </tr>
//                               <tr className>
//                                 <td className="width35 hidden-xs">
//                                   <a href="javascript:void(0);" className="mail-star active"><i className="fa fa-star" /></a>
//                                 </td>
//                                 <td className="text-center width40">
//                                   <div className="avatar d-block">
//                                     <img className="avatar" src="Admin/images/xs/avatar2.jpg" alt="avatar" />
//                                   </div>
//                                 </td>
//                                 <td>
//                                   <div><a href="javascript:void(0);">Merri Diamond</a></div>
//                                   <div className="text-muted">+264-625-2583</div>
//                                 </td>
//                                 <td className="hidden-xs">
//                                   <div className="text-muted">hermanbeck@info.com</div>
//                                 </td>
//                                 <td className="hidden-sm">
//                                   <div className="text-muted">455 S. Airport St. Moncks Corner, SC 29461</div>
//                                 </td>
//                                 <td className="text-right">
//                                   <a className="btn btn-sm btn-link" href="javascript:void(0)" data-toggle="tooltip" title="Phone"><i className="fa fa-phone" /></a>
//                                   <a className="btn btn-sm btn-link" href="javascript:void(0)" data-toggle="tooltip" title="Mail"><i className="fa fa-envelope" /></a>
//                                   <a className="btn btn-sm btn-link hidden-xs js-sweetalert" data-type="confirm" href="javascript:void(0)" data-toggle="tooltip" title="Delete"><i className="fa fa-trash" /></a>
//                                 </td>
//                               </tr>
//                               <tr className>
//                                 <td className="hidden-xs">
//                                   <a href="javascript:void(0);" className="mail-star love"><i className="fa fa-heart" /></a>
//                                 </td>
//                                 <td className="text-center width40">
//                                   <div className="avatar d-block">
//                                     <img className="avatar" src="Admin/images/xs/avatar3.jpg" alt="avatar" />
//                                   </div>
//                                 </td>
//                                 <td>
//                                   <div className="from"><a href="javascript:void(0);">Sara Hopkins</a></div>
//                                   <div className="text-muted">+264-625-3333</div>
//                                 </td>
//                                 <td className="hidden-xs">
//                                   <div className="text-muted">maryadams@info.com</div>
//                                 </td>
//                                 <td className="hidden-sm">
//                                   <div className="text-muted">19 Ohio St. Snellville, GA 30039</div>
//                                 </td>
//                                 <td className="text-right">
//                                   <a className="btn btn-sm btn-link" href="javascript:void(0)" data-toggle="tooltip" title="Phone"><i className="fa fa-phone" /></a>
//                                   <a className="btn btn-sm btn-link" href="javascript:void(0)" data-toggle="tooltip" title="Mail"><i className="fa fa-envelope" /></a>
//                                   <a className="btn btn-sm btn-link hidden-xs js-sweetalert" data-type="confirm" href="javascript:void(0)" data-toggle="tooltip" title="Delete"><i className="fa fa-trash" /></a>
//                                 </td>
//                               </tr>
//                               <tr className>
//                                 <td className="hidden-xs">
//                                   <a href="javascript:void(0);" className="mail-star active"><i className="fa fa-star" /></a>
//                                 </td>
//                                 <td className="text-center width40">
//                                   <div className="avatar d-block">
//                                     <img className="avatar" src="Admin/images/xs/avatar7.jpg" alt="avatar" />
//                                   </div>
//                                 </td>
//                                 <td>
//                                   <div className="from"><a href="javascript:void(0);">Andrew Patrick</a></div>
//                                   <div className="text-muted">+264-625-2586</div>
//                                 </td>
//                                 <td className="hidden-xs">
//                                   <div className="text-muted">mikethimas@info.com</div>
//                                 </td>
//                                 <td className="hidden-sm">
//                                   <div className="text-muted">728 Blackburn St. Andover, MA 01810</div>
//                                 </td>
//                                 <td className="text-right">
//                                   <a className="btn btn-sm btn-link" href="javascript:void(0)" data-toggle="tooltip" title="Phone"><i className="fa fa-phone" /></a>
//                                   <a className="btn btn-sm btn-link" href="javascript:void(0)" data-toggle="tooltip" title="Mail"><i className="fa fa-envelope" /></a>
//                                   <a className="btn btn-sm btn-link hidden-xs js-sweetalert" data-type="confirm" href="javascript:void(0)" data-toggle="tooltip" title="Delete"><i className="fa fa-trash" /></a>
//                                 </td>
//                               </tr>
//                               <tr className>
//                                 <td className="hidden-xs">
//                                   <a href="javascript:void(0);" className="mail-star"><i className="fa fa-star" /></a>
//                                 </td>
//                                 <td className="text-center width40">
//                                   <div className="avatar d-block">
//                                     <img className="avatar" src="Admin/images/xs/avatar5.jpg" alt="avatar" />
//                                   </div>
//                                 </td>
//                                 <td>
//                                   <div className="from"><a href="javascript:void(0);">Claire Peters</a></div>
//                                   <div className="text-muted">+264-625-3333</div>
//                                 </td>
//                                 <td className="hidden-xs">
//                                   <div className="text-muted">clairepeters@info.com</div>
//                                 </td>
//                                 <td className="hidden-sm">
//                                   <div className="text-muted">19 Ohio St. Snellville, GA 30039</div>
//                                 </td>
//                                 <td className="text-right">
//                                   <a className="btn btn-sm btn-link" href="javascript:void(0)" data-toggle="tooltip" title="Phone"><i className="fa fa-phone" /></a>
//                                   <a className="btn btn-sm btn-link" href="javascript:void(0)" data-toggle="tooltip" title="Mail"><i className="fa fa-envelope" /></a>
//                                   <a className="btn btn-sm btn-link hidden-xs js-sweetalert" data-type="confirm" href="javascript:void(0)" data-toggle="tooltip" title="Delete"><i className="fa fa-trash" /></a>
//                                 </td>
//                               </tr>
//                               <tr className>
//                                 <td className="hidden-xs">
//                                   <a href="javascript:void(0);" className="mail-star"><i className="fa fa-star" /></a>
//                                 </td>
//                                 <td className="text-center width40">
//                                   <div className="avatar d-block">
//                                     <img className="avatar" src="Admin/images/xs/avatar6.jpg" alt="avatar" />
//                                   </div>
//                                 </td>
//                                 <td>
//                                   <div className="from"><a href="javascript:void(0);">Allen Collins</a></div>
//                                   <div className="text-muted">+264-625-4526</div>
//                                 </td>
//                                 <td className="hidden-xs">
//                                   <div className="text-muted">kenpatrick@info.com</div>
//                                 </td>
//                                 <td className="hidden-sm">
//                                   <div className="text-muted">728 Blackburn St. Andover, MA 01810</div>
//                                 </td>
//                                 <td className="text-right">
//                                   <a className="btn btn-sm btn-link" href="javascript:void(0)" data-toggle="tooltip" title="Phone"><i className="fa fa-phone" /></a>
//                                   <a className="btn btn-sm btn-link" href="javascript:void(0)" data-toggle="tooltip" title="Mail"><i className="fa fa-envelope" /></a>
//                                   <a className="btn btn-sm btn-link hidden-xs js-sweetalert" data-type="confirm" href="javascript:void(0)" data-toggle="tooltip" title="Delete"><i className="fa fa-trash" /></a>
//                                 </td>
//                               </tr>
//                               <tr className>
//                                 <td className="width35 hidden-xs">
//                                   <a href="javascript:void(0);" className="mail-star"><i className="fa fa-star" /></a>
//                                 </td>
//                                 <td className="text-center width40">
//                                   <div className="avatar d-block">
//                                     <img className="avatar" src="Admin/images/xs/avatar4.jpg" alt="avatar" />
//                                   </div>
//                                 </td>
//                                 <td>
//                                   <div><a href="javascript:void(0);">Erin Gonzales</a></div>
//                                   <div className="text-muted">+264-625-1593</div>
//                                 </td>
//                                 <td className="hidden-xs">
//                                   <div className="text-muted">eringonzales@info.com</div>
//                                 </td>
//                                 <td className="hidden-sm">
//                                   <div className="text-muted">455 S. Airport St. Moncks Corner, SC 29461</div>
//                                 </td>
//                                 <td className="text-right">
//                                   <a className="btn btn-sm btn-link" href="javascript:void(0)" data-toggle="tooltip" title="Phone"><i className="fa fa-phone" /></a>
//                                   <a className="btn btn-sm btn-link" href="javascript:void(0)" data-toggle="tooltip" title="Mail"><i className="fa fa-envelope" /></a>
//                                   <a className="btn btn-sm btn-link hidden-xs js-sweetalert" data-type="confirm" href="javascript:void(0)" data-toggle="tooltip" title="Delete"><i className="fa fa-trash" /></a>
//                                 </td>
//                               </tr>
//                               <tr className>
//                                 <td className="hidden-xs">
//                                   <a href="javascript:void(0);" className="mail-star"><i className="fa fa-star" /></a>
//                                 </td>
//                                 <td className="text-center width40">
//                                   <div className="avatar d-block">
//                                     <img className="avatar" src="Admin/images/xs/avatar5.jpg" alt="avatar" />
//                                   </div>
//                                 </td>
//                                 <td>
//                                   <div className="from"><a href="javascript:void(0);">Harry McCall</a></div>
//                                   <div className="text-muted">+264-625-2468</div>
//                                 </td>
//                                 <td className="hidden-xs">
//                                   <div className="text-muted">susiewillis@info.com</div>
//                                 </td>
//                                 <td className="hidden-sm">
//                                   <div className="text-muted">19 Ohio St. Snellville, GA 30039</div>
//                                 </td>
//                                 <td className="text-right">
//                                   <a className="btn btn-sm btn-link" href="javascript:void(0)" data-toggle="tooltip" title="Phone"><i className="fa fa-phone" /></a>
//                                   <a className="btn btn-sm btn-link" href="javascript:void(0)" data-toggle="tooltip" title="Mail"><i className="fa fa-envelope" /></a>
//                                   <a className="btn btn-sm btn-link hidden-xs js-sweetalert" data-type="confirm" href="javascript:void(0)" data-toggle="tooltip" title="Delete"><i className="fa fa-trash" /></a>
//                                 </td>
//                               </tr>
//                             </tbody>
//                           </table>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="tab-pane fade" id="grid" role="tabpanel">
//                     <div className="row row-deck">
//                       <div className="col-lg-3 col-md-6 col-sm-12">
//                         <div className="card ">
//                           <div className="card-body">
//                             <div className="card-status bg-blue" />
//                             <div className="mb-3"> <img src="Admin/images/sm/avatar1.jpg" className="rounded-circle w100" alt /> </div>
//                             <div className="mb-2">
//                               <h5 className="mb-0">Paul Schmidt</h5>
//                               <p className="text-muted">Aalizeethomas@info.com</p>
//                               <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt</span>
//                             </div>
//                             <span className="font-12 text-muted">Common Contact</span>
//                             <ul className="list-unstyled team-info margin-0 pt-2">
//                               <li><img src="Admin/images/xs/avatar1.jpg" alt="Avatar" /></li>
//                               <li><img src="Admin/images/xs/avatar8.jpg" alt="Avatar" /></li>
//                               <li><img src="Admin/images/xs/avatar2.jpg" alt="Avatar" /></li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-lg-3 col-md-6 col-sm-12">
//                         <div className="card ">
//                           <div className="card-body">
//                             <div className="mb-3"> <img src="Admin/images/sm/avatar2.jpg" className="rounded-circle w100" alt /> </div>
//                             <div className="mb-2">
//                               <h5 className="mb-0">Andrew Patrick</h5>
//                               <p>Aalizeethomas@info.com</p>
//                               <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt</span>
//                             </div>
//                             <span className="font-12 text-muted">Common Contact</span>
//                             <ul className="list-unstyled team-info margin-0 pt-2">
//                               <li><img src="Admin/images/xs/avatar1.jpg" alt="Avatar" /></li>
//                               <li><img src="Admin/images/xs/avatar2.jpg" alt="Avatar" /></li>
//                               <li><img src="Admin/images/xs/avatar3.jpg" alt="Avatar" /></li>
//                               <li><img src="Admin/images/xs/avatar4.jpg" alt="Avatar" /></li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-lg-3 col-md-6 col-sm-12">
//                         <div className="card ">
//                           <div className="card-body">
//                             <div className="mb-3"> <img src="Admin/images/sm/avatar3.jpg" className="rounded-circle w100" alt /> </div>
//                             <div className="mb-2">
//                               <h5 className="mb-0">Mary Schneider</h5>
//                               <p>Aalizeethomas@info.com</p>
//                               <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt</span>
//                             </div>
//                             <span className="font-12 text-muted">Common Contact</span>
//                             <ul className="list-unstyled team-info margin-0 pt-2">
//                               <li><img src="Admin/images/xs/avatar1.jpg" alt="Avatar" /></li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-lg-3 col-md-6 col-sm-12">
//                         <div className="card ">
//                           <div className="card-body">
//                             <div className="card-status bg-green" />
//                             <div className="mb-3"> <img src="Admin/images/sm/avatar4.jpg" className="rounded-circle w100" alt /> </div>
//                             <div className="mb-2">
//                               <h5 className="mb-0">Sean Black</h5>
//                               <p>Aalizeethomas@info.com</p>
//                               <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt</span>
//                             </div>
//                             <span className="font-12 text-muted">Common Contact</span>
//                             <ul className="list-unstyled team-info margin-0 pt-2">
//                               <li><img src="Admin/images/xs/avatar2.jpg" alt="Avatar" /></li>
//                               <li><img src="Admin/images/xs/avatar6.jpg" alt="Avatar" /></li>
//                               <li><img src="Admin/images/xs/avatar5.jpg" alt="Avatar" /></li>
//                               <li><img src="Admin/images/xs/avatar7.jpg" alt="Avatar" /></li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-lg-3 col-md-6 col-sm-12">
//                         <div className="card ">
//                           <div className="card-body">
//                             <div className="mb-3"> <img src="Admin/images/sm/avatar5.jpg" className="rounded-circle w100" alt /> </div>
//                             <div className="mb-2">
//                               <h5 className="mb-0">David Wallace</h5>
//                               <p>Aalizeethomas@info.com</p>
//                               <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt</span>
//                             </div>
//                             <span className="font-12 text-muted">Common Contact</span>
//                             <ul className="list-unstyled team-info margin-0 pt-2">
//                               <li><img src="Admin/images/xs/avatar3.jpg" alt="Avatar" /></li>
//                               <li><img src="Admin/images/xs/avatar4.jpg" alt="Avatar" /></li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-lg-3 col-md-6 col-sm-12">
//                         <div className="card ">
//                           <div className="card-body">
//                             <div className="card-status bg-pink" />
//                             <div className="mb-3"> <img src="Admin/images/sm/avatar6.jpg" className="rounded-circle w100" alt /> </div>
//                             <div className="mb-2">
//                               <h5 className="mb-0">Andrew Patrick</h5>
//                               <p>Aalizeethomas@info.com</p>
//                               <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt</span>
//                             </div>
//                             <span className="font-12 text-muted">Common Contact</span>
//                             <ul className="list-unstyled team-info margin-0 pt-2">
//                               <li><img src="Admin/images/xs/avatar5.jpg" alt="Avatar" /></li>
//                               <li><img src="Admin/images/xs/avatar6.jpg" alt="Avatar" /></li>
//                               <li><img src="Admin/images/xs/avatar1.jpg" alt="Avatar" /></li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-lg-3 col-md-6 col-sm-12">
//                         <div className="card ">
//                           <div className="card-body">
//                             <div className="mb-3"> <img src="Admin/images/sm/avatar2.jpg" className="rounded-circle w100" alt /> </div>
//                             <div className="mb-2">
//                               <h5 className="mb-0">Michelle Green</h5>
//                               <p>Aalizeethomas@info.com</p>
//                               <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt</span>
//                             </div>
//                             <span className="font-12 text-muted">Common Contact</span>
//                             <ul className="list-unstyled team-info margin-0 pt-2">
//                               <li><img src="Admin/images/xs/avatar8.jpg" alt="Avatar" /></li>
//                               <li><img src="Admin/images/xs/avatar7.jpg" alt="Avatar" /></li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-lg-3 col-md-6 col-sm-12">
//                         <div className="card ">
//                           <div className="card-body">
//                             <div className="mb-3"> <img src="Admin/images/sm/avatar4.jpg" className="rounded-circle w100" alt /> </div>
//                             <div className="mb-2">
//                               <h5 className="mb-0">Mary Schneider</h5>
//                               <p>Aalizeethomas@info.com</p>
//                               <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt</span>
//                             </div>
//                             <span className="font-12 text-muted">Common Contact</span>
//                             <ul className="list-unstyled team-info margin-0 pt-2">
//                               <li><img src="Admin/images/xs/avatar2.jpg" alt="Avatar" /></li>
//                               <li><img src="Admin/images/xs/avatar7.jpg" alt="Avatar" /></li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="tab-pane fade" id="addnew" role="tabpanel">
//                     <div className="row clearfix">
//                       <div className="col-lg-12">
//                         <div className="card">
//                           <div className="card-body">
//                             <div className="row clearfix">
//                               <div className="col-lg-4 col-md-12">
//                                 <div className="form-group">
//                                   <input type="text" className="form-control" placeholder="Enter Name" />
//                                 </div>
//                               </div>
//                               <div className="col-lg-4 col-md-12">
//                                 <div className="form-group">
//                                   <input type="number" className="form-control" placeholder="Enter Number" />
//                                 </div>
//                               </div>
//                               <div className="col-lg-4 col-md-12">
//                                 <div className="form-group">
//                                   <input type="email" className="form-control" placeholder="Enter Email" />
//                                 </div>
//                               </div>
//                               <div className="col-lg-12 col-md-12">
//                                 <div className="form-group">
//                                   <textarea type="text" className="form-control" rows={4} defaultValue={"Enter your Address"} />
//                                 </div>
//                               </div>
//                               <div className="col-lg-12">
//                                 <input type="file" className="dropify" />
//                               </div>
//                               <div className="col-lg-12 mt-3">
//                                 <button type="submit" className="btn btn-primary">Add</button>
//                                 <button type="submit" className="btn btn-default">Cancel</button>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>


//     </div>
//   )
// }

// export default Admin_contact


import React, { useEffect, useState } from 'react'
import Admin_header from '../Componets/Admin_header'
import { NavLink,useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { toast } from 'react-toastify'


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import axios from 'axios';

function Catgories_women() {

    const redirect = useNavigate();

    useEffect(() => {
        if (!(localStorage.getItem('uid_1'))) {
            redirect('/admin_login')
        }
        else{
            fetch()
        }
    },[])

  

    useEffect(() => {
        fetch()

    }, [])
    const [data, setData] = useState([])

    const fetch = async () => {

        const ress = await axios.get(`http://localhost:3000/contact`)
        console.log(ress.data);
        setData(ress.data)

    }
    const deleteHandel = async (id) => {
        const ress = await axios.delete(`http://localhost:3000/contact/${id}`)
        console.log(ress.data)
        fetch()
    }


    return (

        <div>
            <Helmet>
                {/* <link rel="stylesheet" type="text/css" href="Admin/css/style.css" /> */}
                {/* <link rel="stylesheet" type="text/css" href="Admin/css/select2.min.css" /> */}
                <link rel="stylesheet" type="text/css" href="Admin/css/font-awesome.min.css" />
            </Helmet>
            
            <Admin_header />
            <div className="page">
                <div className="section-body mt-3">
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-md-flex justify-content-between mb-2">
                                            <ul className="nav nav-tabs b-none">
                                                <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#list"><i className="fa fa-list-ul" /> Manage Contact</a></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-6">
                                                <div className="input-group mb-1">
                                                    <input type="text" className="form-control" placeholder="Clinet Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-4 col-sm-6">
                                                <div className="input-group mb-1">
                                                    <input type="text" className="form-control" placeholder="Order" />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-12">
                                                <a href="javascript:void(0);" className="btn btn-primary btn-block mb-1" title>Search</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-body">
                    <div className="container-fluid">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="list" role="tabpanel">

                            <table className="table table-striped custom-table">
                                            <thead>
                                                <tr>
                                                    <th style={{ color: 'black', fontWeight: "700" }}>URL</th>
                                                    <th style={{ color: 'black', fontWeight: "700" }}>User name</th>
                                                    <th style={{ color: 'black', fontWeight: "700" }}>Email</th>
                                                    <th style={{ color: 'black', fontWeight: "700" }}>Subject</th>
                                                    <th style={{ color: 'black', fontWeight: "700" }}>Message</th>

                                                    <th style={{ color: 'black', fontWeight: "700" }} className="text-right">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data && data.map(user => {
                                                    return (
                                                        <tr>
                                                            <td><img width={38} height={38} src={user.img} className="rounded-circle m-r-5" alt /></td>
                                                            <td>{user.name}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.subject}</td>
                                                            <td>{user.message}</td>
                                                       
                                                            <td className="text-right">
                                                                <PopupState variant="popover" popupId="demo-popup-menu">
                                                                    {(popupState) => (
                                                                        <React.Fragment>

                                                                            <i variant="contained" {...bindTrigger(popupState)} class="fa-solid fa-ellipsis-vertical me-2" style={{ color: "#000000", cursor: 'pointer' }}></i>

                                                                            <Menu {...bindMenu(popupState)} style={{ marginLeft: "-30px", cursor: 'pointer' }}>
                                                                                <MenuItem onClick={popupState.close}>Edit<i class="fa-solid fa-pen-to-square ml-1" style={{ color: "#000000" }}></i></MenuItem>
                                                                                <MenuItem onClick={popupState.close}><button onClick={() => deleteHandel(user.id)} style={{ border: 'none' }}>Delete<i class="fa-solid fa-trash ml-1" style={{ color: "#000000" }}></i></button></MenuItem>
                                                                            </Menu>
                                                                        </React.Fragment>
                                                                    )}
                                                                </PopupState>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}

                                                
                                            </tbody>
                                        </table>
                               

                            </div>

                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}
export default Catgories_women


