import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <>
      <div class="vertical-menu">
        <div data-simplebar class="h-100">
          <div id="sidebar-menu">
            <ul class="metismenu list-unstyled" id="side-menu">
              <li class="menu-title" key="t-menu">
                Menu
              </li>

              <li>
              <div className="dropdown">
                <a href='#' className=" dropdown-toggle has-arrow waves-effect" data-bs-toggle="dropdown">
                <i class="bx bx-layout"></i>
                  Dropdown button
                </a>
                <ul className="dropdown-menu sub-menu">
                  <li><a className="dropdown-item" href="#">Link 1</a></li>
                  <li><a className="dropdown-item" href="#">Link 2</a></li>
                  <li><a className="dropdown-item" href="#">Link 3</a></li>
                </ul>
              </div>
              </li>

              <li>
                <a href="#" class="has-arrow waves-effect">
                  <i class="bx bx-layout"></i>
                  <span key="t-layouts">Layouts</span>
                </a>
                <ul class="sub-menu" aria-expanded="true">
                  <li>
                    <a
                      href="#"
                      class="has-arrow"
                      key="t-vertical"
                    >
                      Vertical
                    </a>
                    <ul class="sub-menu" aria-expanded="true">
                      <li>
                        <a
                          href="#"
                          key="t-light-sidebar"
                        >
                          Light Sidebar
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          key="t-compact-sidebar"
                        >
                          Compact Sidebar
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          key="t-icon-sidebar"
                        >
                          Icon Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="#" key="t-boxed-width">
                          Boxed Width
                        </a>
                      </li>
                      <li>
                        <a href="#" key="t-preloader">
                          Preloader
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          key="t-colored-sidebar"
                        >
                          Colored Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="#" key="t-scrollable">
                          Scrollable
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a
                      href="/"
                      class="has-arrow"
                      key="t-horizontal"
                    >
                      Horizontal
                    </a>
                    <ul class="sub-menu" aria-expanded="true">
                      <li>
                        <a href="#" key="t-horizontal">
                          Horizontal
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          key="t-topbar-light"
                        >
                          Topbar light
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          key="t-boxed-width"
                        >
                          Boxed width
                        </a>
                      </li>
                      <li>
                        <a href="#" key="t-preloader">
                          Preloader
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          key="t-colored-topbar"
                        >
                          Colored Header
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          key="t-scrollable"
                        >
                          Scrollable
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li class="menu-title" key="t-apps">
                Apps
              </li>

              <li>
                <Link to="/" class="waves-effect">
                  <i class="bx bx-calendar"></i>
                  <span class="badge rounded-pill bg-success float-end">
                    New
                  </span>
                  <span key="t-dashboards">Calendars</span>
                </Link>
                <ul class="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/datatable" key="t-tui-calendar">
                      TUI Calendar
                    </Link>
                  </li>
                  <li>
                    <Link to="/modal" key="t-full-calendar">
                      Full Calendar
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" class="waves-effect">
                  <i class="bx bx-chat"></i>
                  <span key="t-chat">Chat</span>
                </a>
              </li>

              <li>
                <a href="#" class="waves-effect">
                  <i class="bx bx-file"></i>
                  <span
                    class="badge rounded-pill bg-success float-end"
                    key="t-new"
                  >
                    New
                  </span>
                  <span key="t-file-manager">File Manager</span>
                </a>
              </li>

              <li>
                <div class="dropdown d-inline-block">
                  <button
                    type="button"
                    class="btn header-item waves-effect"
                    id="page-header-user-dropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Demo
                  </button>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="#">
                      <i class="bx bx-user font-size-16 align-middle me-1"></i>{" "}
                      <span key="t-profile">Profile</span>
                    </a>
                    <a class="dropdown-item" href="#">
                      <i class="bx bx-wallet font-size-16 align-middle me-1"></i>{" "}
                      <span key="t-my-wallet">My Wallet</span>
                    </a>
                    <a class="dropdown-item d-block" href="#">
                      <span class="badge bg-success float-end">11</span>
                      <i class="bx bx-wrench font-size-16 align-middle me-1"></i>{" "}
                      <span key="t-settings">Settings</span>
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <a href="#" class="has-arrow waves-effect">
                  <i class="bx bx-receipt"></i>
                  <span key="t-invoices">Invoices</span>
                </a>
                <ul class="sub-menu" aria-expanded="false">
                  <li>
                    <a href="#" key="t-invoice-list">
                      Invoice List
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-invoice-detail">
                      Invoice Detail
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" class="has-arrow waves-effect">
                  <i class="bx bx-briefcase-alt-2"></i>
                  <span key="t-projects">Projects</span>
                </a>
                <ul class="sub-menu" aria-expanded="false">
                  <li>
                    <a href="#" key="t-p-grid">
                      Projects Grid
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-p-list">
                      Projects List
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-p-overview">
                      Project Overview
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-create-new">
                      Create New
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" class="has-arrow waves-effect">
                  <i class="bx bx-task"></i>
                  <span key="t-tasks">Tasks</span>
                </a>
                <ul class="sub-menu" aria-expanded="false">
                  <li>
                    <a href="#" key="t-task-list">
                      Task List
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-kanban-board">
                      Kanban Board
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-create-task">
                      Create Task
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" class="has-arrow waves-effect">
                  <i class="bx bxs-user-detail"></i>
                  <span key="t-contacts">Contacts</span>
                </a>
                <ul class="sub-menu" aria-expanded="false">
                  <li>
                    <a href="#" key="t-user-grid">
                      Users Grid
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-user-list">
                      Users List
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-profile">
                      Profile
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" class="waves-effect">
                  <span
                    class="badge rounded-pill bg-success float-end"
                    key="t-new"
                  >
                    New
                  </span>
                  <i class="bx bx-detail"></i>
                  <span key="t-blog">Blog</span>
                </a>
                <ul class="sub-menu" aria-expanded="false">
                  <li>
                    <a href="#" key="t-blog-list">
                      Blog List
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-blog-grid">
                      Blog Grid
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-blog-details">
                      Blog Details
                    </a>
                  </li>
                </ul>
              </li>

              <li class="menu-title" key="t-pages">
                Pages
              </li>

              <li>
                <a href="#" class="waves-effect">
                  <span
                    class="badge rounded-pill bg-success float-end"
                    key="t-new"
                  >
                    New
                  </span>
                  <i class="bx bx-user-circle"></i>
                  <span key="t-authentication">Authentication</span>
                </a>
                <ul class="sub-menu" aria-expanded="false">
                  <li>
                    <a href="#" key="t-login">
                      Login
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-login-2">
                      Login 2
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-register">
                      Register
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-register-2">
                      Register 2
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-recover-password">
                      Recover Password
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-recover-password-2">
                      Recover Password 2
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-lock-screen">
                      Lock Screen
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-lock-screen-2">
                      Lock Screen 2
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-confirm-mail">
                      Confirm Email
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-confirm-mail-2">
                      Confirm Email 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      key="t-email-verification"
                    >
                      Email verification
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      key="t-email-verification-2"
                    >
                      Email Verification 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      key="t-two-step-verification"
                    >
                      Two Step Verification
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      key="t-two-step-verification-2"
                    >
                      Two Step Verification 2
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" class="has-arrow waves-effect">
                  <i class="bx bx-file"></i>
                  <span key="t-utility">Utility</span>
                </a>
                <ul class="sub-menu" aria-expanded="false">
                  <li>
                    <a href="#" key="t-starter-page">
                      Starter Page
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-maintenance">
                      Maintenance
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-coming-soon">
                      Coming Soon
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-timeline">
                      Timeline
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-faqs">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-pricing">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-error-404">
                      Error 404
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-error-500">
                      Error 500
                    </a>
                  </li>
                </ul>
              </li>

              <li class="menu-title" key="t-components">
                Components
              </li>

              <li>
                <a href="#" class="has-arrow waves-effect">
                  <i class="bx bx-tone"></i>
                  <span key="t-ui-elements">UI Elements</span>
                </a>
                <ul class="sub-menu" aria-expanded="false">
                  <li>
                    <a href="#" key="t-alerts">
                      Alerts
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-buttons">
                      Buttons
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-cards">
                      Cards
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-carousel">
                      Carousel
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-dropdowns">
                      Dropdowns
                    </a>
                  </li>
                  <li>
                    <a href="#" key="t-grid">
                      Grid
                    </a>
                  </li>
                  <li>
                    <a href="ui-images.html" key="t-images">
                      Images
                    </a>
                  </li>
                  <li>
                    <a href="ui-lightbox.html" key="t-lightbox">
                      Lightbox
                    </a>
                  </li>
                  <li>
                    <a href="ui-modals.html" key="t-modals">
                      Modals
                    </a>
                  </li>
                  <li>
                    <a href="ui-offcanvas.html" key="t-offcanvas">
                      Offcanvas
                    </a>
                  </li>
                  <li>
                    <a href="ui-rangeslider.html" key="t-range-slider">
                      Range Slider
                    </a>
                  </li>
                  <li>
                    <a href="ui-session-timeout.html" key="t-session-timeout">
                      Session Timeout
                    </a>
                  </li>
                  <li>
                    <a href="ui-progressbars.html" key="t-progress-bars">
                      Progress Bars
                    </a>
                  </li>
                  <li>
                    <a href="ui-placeholders.html" key="t-placeholders">
                      Placeholders
                    </a>
                  </li>
                  <li>
                    <a href="ui-sweet-alert.html" key="t-sweet-alert">
                      Sweet-Alert
                    </a>
                  </li>
                  <li>
                    <a href="ui-tabs-accordions.html" key="t-tabs-accordions">
                      Tabs & Accordions
                    </a>
                  </li>
                  <li>
                    <a href="ui-typography.html" key="t-typography">
                      Typography
                    </a>
                  </li>
                  <li>
                    <a href="ui-toasts.html" key="t-toasts">
                      Toasts
                    </a>
                  </li>
                  <li>
                    <a href="ui-video.html" key="t-video">
                      Video
                    </a>
                  </li>
                  <li>
                    <a href="ui-general.html" key="t-general">
                      General
                    </a>
                  </li>
                  <li>
                    <a href="ui-colors.html" key="t-colors">
                      Colors
                    </a>
                  </li>
                  <li>
                    <a href="ui-rating.html" key="t-rating">
                      Rating
                    </a>
                  </li>
                  <li>
                    <a href="ui-notifications.html" key="t-notifications">
                      Notifications
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="/" class="waves-effect">
                  <i class="bx bxs-eraser"></i>
                  <span class="badge rounded-pill bg-danger float-end">10</span>
                  <span key="t-forms">Forms</span>
                </a>
                <ul class="sub-menu" aria-expanded="false">
                  <li>
                    <a href="form-elements.html" key="t-form-elements">
                      Form Elements
                    </a>
                  </li>
                  <li>
                    <a href="form-layouts.html" key="t-form-layouts">
                      Form Layouts
                    </a>
                  </li>
                  <li>
                    <a href="form-validation.html" key="t-form-validation">
                      Form Validation
                    </a>
                  </li>
                  <li>
                    <a href="form-advanced.html" key="t-form-advanced">
                      Form Advanced
                    </a>
                  </li>
                  <li>
                    <a href="form-editors.html" key="t-form-editors">
                      Form Editors
                    </a>
                  </li>
                  <li>
                    <a href="form-uploads.html" key="t-form-upload">
                      Form File Upload
                    </a>
                  </li>
                  <li>
                    <a href="form-xeditable.html" key="t-form-xeditable">
                      Form Xeditable
                    </a>
                  </li>
                  <li>
                    <a href="form-repeater.html" key="t-form-repeater">
                      Form Repeater
                    </a>
                  </li>
                  <li>
                    <a href="form-wizard.html" key="t-form-wizard">
                      Form Wizard
                    </a>
                  </li>
                  <li>
                    <a href="form-mask.html" key="t-form-mask">
                      Form Mask
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="/" class="has-arrow waves-effect">
                  <i class="bx bx-list-ul"></i>
                  <span key="t-tables">Tables</span>
                </a>
                <ul class="sub-menu" aria-expanded="false">
                  <li>
                    <a href="tables-basic.html" key="t-basic-tables">
                      Basic Tables
                    </a>
                  </li>
                  <li>
                    <a href="tables-datatable.html" key="t-data-tables">
                      Data Tables
                    </a>
                  </li>
                  <li>
                    <a href="tables-responsive.html" key="t-responsive-table">
                      Responsive Table
                    </a>
                  </li>
                  <li>
                    <a href="tables-editable.html" key="t-editable-table">
                      Editable Table
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="/" class="has-arrow waves-effect">
                  <i class="bx bxs-bar-chart-alt-2"></i>
                  <span key="t-charts">Charts</span>
                </a>
                <ul class="sub-menu" aria-expanded="false">
                  <li>
                    <a href="charts-apex.html" key="t-apex-charts">
                      Apex Charts
                    </a>
                  </li>
                  <li>
                    <a href="charts-echart.html" key="t-e-charts">
                      E Charts
                    </a>
                  </li>
                  <li>
                    <a href="charts-chartjs.html" key="t-chartjs-charts">
                      Chartjs Charts
                    </a>
                  </li>
                  <li>
                    <a href="charts-flot.html" key="t-flot-charts">
                      Flot Charts
                    </a>
                  </li>
                  <li>
                    <a href="charts-tui.html" key="t-ui-charts">
                      Toast UI Charts
                    </a>
                  </li>
                  <li>
                    <a href="charts-knob.html" key="t-knob-charts">
                      Jquery Knob Charts
                    </a>
                  </li>
                  <li>
                    <a href="charts-sparkline.html" key="t-sparkline-charts">
                      Sparkline Charts
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="/" class="has-arrow waves-effect">
                  <i class="bx bx-aperture"></i>
                  <span key="t-icons">Icons</span>
                </a>
                <ul class="sub-menu" aria-expanded="false">
                  <li>
                    <a href="icons-boxicons.html" key="t-boxicons">
                      Boxicons
                    </a>
                  </li>
                  <li>
                    <a href="icons-materialdesign.html" key="t-material-design">
                      Material Design
                    </a>
                  </li>
                  <li>
                    <a href="icons-dripicons.html" key="t-dripicons">
                      Dripicons
                    </a>
                  </li>
                  <li>
                    <a href="icons-fontawesome.html" key="t-font-awesome">
                      Font Awesome
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="/" class="has-arrow waves-effect">
                  <i class="bx bx-map"></i>
                  <span key="t-maps">Maps</span>
                </a>
                <ul class="sub-menu" aria-expanded="false">
                  <li>
                    <a href="maps-google.html" key="t-g-maps">
                      Google Maps
                    </a>
                  </li>
                  <li>
                    <a href="maps-vector.html" key="t-v-maps">
                      Vector Maps
                    </a>
                  </li>
                  <li>
                    <a href="maps-leaflet.html" key="t-l-maps">
                      Leaflet Maps
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="/" class="has-arrow waves-effect">
                  <i class="bx bx-share-alt"></i>
                  <span key="t-multi-level">Multi Level</span>
                </a>
                <ul class="sub-menu" aria-expanded="true">
                  <li>
                    <a href="/" key="t-level-1-1">
                      Level 1.1
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      class="has-arrow"
                      key="t-level-1-2"
                    >
                      Level 1.2
                    </a>
                    <ul class="sub-menu" aria-expanded="true">
                      <li>
                        <a href="/" key="t-level-2-1">
                          Level 2.1
                        </a>
                      </li>
                      <li>
                        <a href="/" key="t-level-2-2">
                          Level 2.2
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

// Navbar.propTypes = {
//    Brand: PropTypes.string.isRequired,
//    secondMenu:PropTypes.string,

// }
// Navbar.defaultProps ={
//     Brand: "Braincave soft pvt ltd",
//     secondMenu: "About us menu"
// }
