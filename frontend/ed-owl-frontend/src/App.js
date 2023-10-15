import './App.css';
import React from 'react';

// import BodyComponent from './components/body/BodyComponent';
// import HeaderComponent from './components/header/HeaderComponent';
// import FooterComponent from './components/footer/FooterComponent';
// import Home from './containers/Home'
// import Activate from './containers/Activate'
// import Signup from './containers/Signup';
// import ResetPassword from './containers/ResetPassword';
// import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
// import {Provider} from 'react-redux';
// import store from './store';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './containers/Login';
// import Layout from './hocs/Layout';
import Main from './components/Main';

function App() {
  return (

    <div className="App">
      <Main/>
    </div>
    

    // <Provider store={store}>
     
    //  <Layout>
    //   <Routes>
       
    //     <Route exact path='/' element={<Home/>}/>
    //      <Route exact path='/login' element={<Login/>} />
         
    //      <Route exact path='/signup' element={<Signup/>}/>
    //      <Route exact path='/reset-password' element={<ResetPassword/>}/>
    //      <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm/>}/>
    //      <Route exact path='/activate/:uid/:token' element={<Activate/>}/>
        
    //   </Routes>
    //   </Layout>
    //  </Provider>
 
  );
}

export default App;
