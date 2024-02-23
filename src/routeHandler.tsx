import { createBrowserRouter } from "react-router-dom";

import Homepage from "./app/landingPage/homepage"
import StoriesPage from "./app/stories/storiesDetailedPage"
import ShopAll from './app/shop/shopAll';
import AllStoriesPage from './app/stories/allStoriesPage';
import AllBlogs from './app/Blogs/allBlog';
import ContactUs from './app/contact/contactus';
import TermsAndCondition from './app/terms&condition/termsAndCondition';
import RequestInterView from './app/requestInterview/requestInterview';
import SingleShopItem from "./app/shop/singleShopitem";
import SignInComponent from "./app/signInAndCreateAccount/signIn/signIn";
import CreateAccount from "./app/signInAndCreateAccount/createAccount/createAccount";

import InvalidRoute from "@ui/invalidRoute/invalidRouteScreen";


import RedirectAfterLoginSuccess from "@ui/loadingScreen/redirectAfterLoginSuccess/redirectAfterLoginSuccess";
import ProtectSignInAndSignOutRoute from "@ui/protectRoute/signInAndSIgnOutProtect";
// import Test from "./app/test";


const routeHandler = createBrowserRouter([
  {
    path: "/",
    element: < Homepage />,
  },

  {
    path: "/allStories",
    element: < AllStoriesPage />
  },

  {
    path: "/shopall",
    element: < ShopAll />
  },

  {
    path: "/storiesDetail",
    element: < StoriesPage />
  },

  {
    path: "/blog",
    element: < AllBlogs />
  },

  {
    path: "/contactus",
    element: < ContactUs />
  },

  {
    path: "/termsandcondition",
    element: < TermsAndCondition />
  },

  {
    path: "/requestinterview",
    element: < RequestInterView />
  },
  {
    path: "/shopItemDetails/:id",
    element: <SingleShopItem />
  },
  {
    path: "/login",
    element: <SignInComponent />
  },
  {
    path: "/createAccount",
    element : <CreateAccount />
  },
  {
    path: "/test",
    element: <ProtectSignInAndSignOutRoute />
  },
  {
    path: '/loginSuccess',
    element: <RedirectAfterLoginSuccess message="Login Success! Redirecting to Homepage" redirectTo='/' />
  },
  {
    path: '/alreadyLoggedIn',
    element : <ProtectSignInAndSignOutRoute />
  },
  {
    path: '/*',
    element: <InvalidRoute/>
  },
  

]);


export default routeHandler;