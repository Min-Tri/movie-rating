import React,{Suspense,lazy} from "react";

// routing
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


// context
import UserProvider from "./context";

// styles
import { GlobalStyle } from "./GlobalStyle";

// components
const Header =lazy(()=>import("./components/Layout/Header")) ;
const Home =lazy(()=>import("./pages/Home"));
const Movie =lazy(()=>import("./pages/Movie")) ;
const NotFound =lazy(()=>import("./pages/NotFound")) ;
const Login =lazy(()=>import("./pages/Login")) ;
const Footer =lazy(()=>import("./components/Layout/Footer")) ;

const App=()=> (
  <Router>
    <UserProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/:movieId' element={<Movie/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
        
        <Footer/>
      </Suspense>
      <GlobalStyle/>
    </UserProvider>

  </Router>
);


export default App;
