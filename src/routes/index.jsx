import React from "react";
import { Navigate } from "react-router-dom";

// // Profile
import UserProfile from "../pages/Authentication/user-profile";

// // //Ecommerce Pages
import EcommerceProducts from "../pages/Ecommerce/EcommerceProducts";
import EcommerceProductDetail from "../pages/Ecommerce/EcommerceProductDetail/index";
import EcommerceOrders from "../pages/Ecommerce/EcommerceOrders/index";
import EcommerceCustomers from "../pages/Ecommerce/EcommerceCustomers/index";
import EcommerceCart from "../pages/Ecommerce/EcommerceCart";
import EcommerceCheckout from "../pages/Ecommerce/EcommerceCheckout";
import EcommerceShops from "../pages/Ecommerce/EcommerceShops/index";
import EcommerenceAddProduct from "../pages/Ecommerce/EcommerceAddProduct";

// // Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

// //  // Inner Authentication
import Login1 from "../pages/AuthenticationInner/Login";
import Login2 from "../pages/AuthenticationInner/Login2";
import Register1 from "../pages/AuthenticationInner/Register";
import Register2 from "../pages/AuthenticationInner/Register2";
import Recoverpw from "../pages/AuthenticationInner/Recoverpw";
import Recoverpw2 from "../pages/AuthenticationInner/Recoverpw2";
import ForgetPwd1 from "../pages/AuthenticationInner/ForgetPassword";
import ForgetPwd2 from "../pages/AuthenticationInner/ForgetPassword2";
import LockScreen from "../pages/AuthenticationInner/auth-lock-screen";
import LockScreen2 from "../pages/AuthenticationInner/auth-lock-screen-2";
import ConfirmMail from "../pages/AuthenticationInner/page-confirm-mail";
import ConfirmMail2 from "../pages/AuthenticationInner/page-confirm-mail-2";
import EmailVerification from "../pages/AuthenticationInner/auth-email-verification";
import EmailVerification2 from "../pages/AuthenticationInner/auth-email-verification-2";
import TwostepVerification from "../pages/AuthenticationInner/auth-two-step-verification";
import TwostepVerification2 from "../pages/AuthenticationInner/auth-two-step-verification-2";

// // Dashboard
import Dashboard from "../pages/Dashboard/index";

// // Charts
import ChartApex from "../pages/Charts/Apexcharts";
import ChartjsChart from "../pages/Charts/ChartjsChart";
import EChart from "../pages/Charts/EChart";
import SparklineChart from "../pages/Charts/SparklineChart";
import ChartsKnob from "../pages/Charts/charts-knob";
import ReCharts from "../pages/Charts/ReCharts";

// //Icons
import IconBoxicons from "../pages/Icons/IconBoxicons";
import IconDripicons from "../pages/Icons/IconDripicons";
import IconMaterialdesign from "../pages/Icons/IconMaterialdesign";
import IconFontawesome from "../pages/Icons/IconFontawesome";

// //Tables
import BasicTables from "../pages/Tables/BasicTables";
import DatatableTables from "../pages/Tables/DatatableTables";

// // Forms
import FormElements from "../pages/Forms/FormElements";
import FormLayouts from "../pages/Forms/FormLayouts";
import FormAdvanced from "../pages/Forms/FormAdvanced/index";
import FormEditors from "../pages/Forms/FormEditors";
import FormValidations from "../pages/Forms/FormValidations";
import FormMask from "../pages/Forms/FormMask";
import FormRepeater from "../pages/Forms/FormRepeater";
import FormUpload from "../pages/Forms/FormUpload";
import FormWizard from "../pages/Forms/FormWizard";
import DualListbox from "../pages/Tables/DualListbox";

// //Ui
import UiAlert from "../pages/Ui/UiAlerts/index";
import UiButtons from "../pages/Ui/UiButtons/index";
import UiCards from "../pages/Ui/UiCard/index";
import UiCarousel from "../pages/Ui/UiCarousel";
import UiColors from "../pages/Ui/UiColors";
import UiDropdown from "../pages/Ui/UiDropdown/index";
import UiOffCanvas from "../pages/Ui/UiOffCanvas";

import UiGeneral from "../pages/Ui/UiGeneral";
import UiGrid from "../pages/Ui/UiGrid";
import UiImages from "../pages/Ui/UiImages";
import UiLightbox from "../pages/Ui/UiLightbox";
import UiModal from "../pages/Ui/UiModal/index";


import UiTabsAccordions from "../pages/Ui/UiTabsAccordions";
import UiTypography from "../pages/Ui/UiTypography";
import UiVideo from "../pages/Ui/UiVideo";
import UiSessionTimeout from "../pages/Ui/UiSessionTimeout";
import UiRating from "../pages/Ui/UiRating";
import UiRangeSlider from "../pages/Ui/UiRangeSlider";
import UiNotifications from "../pages/Ui/UINotifications";

import UiPlaceholders from "../pages/Ui/UiPlaceholders";
import UiToasts from "../pages/Ui/UiToast";
import UiUtilities from "../pages/Ui/UiUtilities";

// //Contacts
import ContactsGrid from "../pages/Contacts/contacts-grid";
import ContactsList from "../pages/Contacts/ContactList/contacts-list";
import ContactsProfile from "../pages/Contacts/ContactsProfile/index";
import UiProgressbar from "../pages/Ui/UiProgressbar";
// import UiProgressbar from "../../src/pages/Ui/UiProgressbar"

//addImport
//categoriesImport
import CategoriesList from "../page/categories/List";
import CategoriesAdd from "../page/categories/Add";
import CategoriesEdit from "../page/categories/Edit";

//acteursImport
import ActeursList from "../page/acteurs/List";
import ActeursAdd from "../page/acteurs/Add";
import ActeursEdit from "../page/acteurs/Edit";

//editeurImport
import EditeurList from "../page/editeurs/List";
import EditeurAdd from "../page/editeurs/Add";
import EditeurEdit from "../page/editeurs/Edit";

//languesImport
import LanguesList from "../page/langues/List";
import LanguesAdd from "../page/langues/Add";
import LanguesEdit from "../page/langues/Edit";

//realisateurImport
import RealisateursList from "../page/realisateurs/List";
import RealisateursAdd from "../page/realisateurs/Add";
import RealisateursEdit from "../page/realisateurs/Edit";

//filmUserImport
import FilmsListUser from "../page/filmsUser/ListUser";
//filmImport
import FilmsList from "../page/films/List";
import FilmsAdd from "../page/films/Add";
import FilmsEdit from "../page/films/Edit";

//userImport
import UserList from "../page/users/List";
import UserAdd from "../page/users/Add";
import UserEdit from "../page/users/Edit";

const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },

  //   // //profile
  { path: "/profile", component: <UserProfile /> },

  //   //Ecommerce
  {
    path: "/ecommerce-product-detail/:id",
    component: <EcommerceProductDetail />,
  },
  { path: "/ecommerce-products", component: <EcommerceProducts /> },
  { path: "/ecommerce-orders", component: <EcommerceOrders /> },
  { path: "/ecommerce-customers", component: <EcommerceCustomers /> },
  { path: "/ecommerce-cart", component: <EcommerceCart /> },
  { path: "/ecommerce-checkout", component: <EcommerceCheckout /> },
  { path: "/ecommerce-shops", component: <EcommerceShops /> },
  { path: "/ecommerce-add-product", component: <EcommerenceAddProduct /> },

  // Contacts
  { path: "/contacts-grid", component: <ContactsGrid /> },
  { path: "/contacts-list", component: <ContactsList /> },
  { path: "/contacts-profile", component: <ContactsProfile /> },

  //   //Charts
  { path: "/apex-charts", component: <ChartApex /> },
  { path: "/chartjs-charts", component: <ChartjsChart /> },
  { path: "/e-charts", component: <EChart /> },
  { path: "/sparkline-charts", component: <SparklineChart /> },
  { path: "/charts-knob", component: <ChartsKnob /> },
  { path: "/re-charts", component: <ReCharts /> },

  //   // Icons
  { path: "/icons-boxicons", component: <IconBoxicons /> },
  { path: "/icons-dripicons", component: <IconDripicons /> },
  { path: "/icons-materialdesign", component: <IconMaterialdesign /> },
  { path: "/icons-fontawesome", component: <IconFontawesome /> },

  //   // Tables
  { path: "/tables-basic", component: <BasicTables /> },
  { path: "/tables-datatable", component: <DatatableTables /> },

  //   // Forms
  { path: "/form-elements", component: <FormElements /> },
  { path: "/form-layouts", component: <FormLayouts /> },
  { path: "/form-advanced", component: <FormAdvanced /> },
  { path: "/form-editors", component: <FormEditors /> },
  { path: "/form-mask", component: <FormMask /> },
  { path: "/form-repeater", component: <FormRepeater /> },
  { path: "/form-uploads", component: <FormUpload /> },
  { path: "/form-wizard", component: <FormWizard /> },
  { path: "/form-validation", component: <FormValidations /> },
  { path: "/dual-listbox", component: <DualListbox /> },

  //   // Ui
  { path: "/ui-alerts", component: <UiAlert /> },
  { path: "/ui-buttons", component: <UiButtons /> },
  { path: "/ui-cards", component: <UiCards /> },
  { path: "/ui-carousel", component: <UiCarousel /> },
  { path: "/ui-colors", component: <UiColors /> },
  { path: "/ui-dropdowns", component: <UiDropdown /> },
  { path: "/ui-offcanvas", component: <UiOffCanvas /> },
  { path: "/ui-general", component: <UiGeneral /> },
  { path: "/ui-grid", component: <UiGrid /> },
  { path: "/ui-images", component: <UiImages /> },
  { path: "/ui-lightbox", component: <UiLightbox /> },
  { path: "/ui-modals", component: <UiModal /> },
  { path: "/ui-progressbars", component: <UiProgressbar /> },
  { path: "/ui-tabs-accordions", component: <UiTabsAccordions /> },
  { path: "/ui-typography", component: <UiTypography /> },
  { path: "/ui-video", component: <UiVideo /> },
  { path: "/ui-session-timeout", component: <UiSessionTimeout /> },
  { path: "/ui-rating", component: <UiRating /> },
  { path: "/ui-rangeslider", component: <UiRangeSlider /> },
  { path: "/ui-notifications", component: <UiNotifications /> },
  { path: "/ui-placeholders", component: <UiPlaceholders /> },
  { path: "/ui-toasts", component: <UiToasts /> },
  { path: "/ui-utilities", component: <UiUtilities /> },

  { path: "/", exact: true, component: <Navigate to="/login" /> },

  //add
  //categories:
  { path: "/categoriesList", component: <CategoriesList /> },
  { path: "/categoriesAdd", component: <CategoriesAdd /> },
  { path: "/categoriesEdit/:id", component: <CategoriesEdit /> },

  //acteurs:
  { path: "/acteursList", component: <ActeursList /> },
  { path: "/acteursAdd", component: <ActeursAdd /> },
  { path: "/acteursEdit/:id", component: <ActeursEdit /> },

  //editeur:
  { path: "/editeursList", component: <EditeurList /> },
  { path: "/editeursAdd", component: <EditeurAdd /> },
  { path: "/editeursEdit/:id", component: <EditeurEdit /> },

  //langues:
  { path: "/languesList", component: <LanguesList /> },
  { path: "/languesAdd", component: <LanguesAdd /> },
  { path: "/languesEdit/:id", component: <LanguesEdit /> },
  
  //realisateurs:
  { path: "/realisateursList", component: <RealisateursList /> },
  { path: "/realisateursAdd", component: <RealisateursAdd /> },
  { path: "/realisateursEdit/:id", component: <RealisateursEdit /> },

  //filmsUser:
  { path: "/filmsList", component: <FilmsListUser /> },
  //films:
  { path: "/filmsListAdmin", component: <FilmsList /> },
  { path: "/filmsAdd", component: <FilmsAdd /> },
  { path: "/filmsEdit/:id", component: <FilmsEdit /> },

  //users:
  { path: "/usersList", component: <UserList /> },
  { path: "/usersAdd", component: <UserAdd /> },
  { path: "/usersEdit/:id", component: <UserEdit /> },
];

const publicRoutes = [
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPwd /> },
  { path: "/register", component: <Register /> },

  //   // Authentication Inner
  { path: "/pages-login", component: <Login1 /> },
  { path: "/pages-login-2", component: <Login2 /> },
  { path: "/pages-register", component: <Register1 /> },
  { path: "/pages-register-2", component: <Register2 /> },
  { path: "/page-recoverpw", component: <Recoverpw /> },
  { path: "/page-recoverpw-2", component: <Recoverpw2 /> },
  { path: "/pages-forgot-pwd", component: <ForgetPwd1 /> },
  { path: "/pages-forgot-pwd-2", component: <ForgetPwd2 /> },
  { path: "/auth-lock-screen", component: <LockScreen /> },
  { path: "/auth-lock-screen-2", component: <LockScreen2 /> },
  { path: "/page-confirm-mail", component: <ConfirmMail /> },
  { path: "/page-confirm-mail-2", component: <ConfirmMail2 /> },
  { path: "/auth-email-verification", component: <EmailVerification /> },
  { path: "/auth-email-verification-2", component: <EmailVerification2 /> },
  { path: "/auth-two-step-verification", component: <TwostepVerification /> },
  {
    path: "/auth-two-step-verification-2",
    component: <TwostepVerification2 />,
  },
];

// export { authProtectedRoutes, publicRoutes };
export { authProtectedRoutes, publicRoutes }
