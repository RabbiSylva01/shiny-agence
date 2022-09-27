import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Header from "./Composants/Header";
import  Error from './Composants/Error';
import { BrowserRouter,Routes,Route,} from "react-router-dom";
import Results from './pages/Results';
import Freelances from './pages/Freelances';
import Footer  from './Composants/Footer';
import GlobalStyle from './utils/style/GlobalStyle';
import { ThemeProvider, SurveyProvider } from './utils/context';
import 'bootstrap/dist/css/bootstrap.css';
import {  } from "./sass/mon.scss";





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <ThemeProvider>
       <SurveyProvider>
         <GlobalStyle />
            <Header />
            <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Survey/:questionNumber" element={<Survey />} />
                  <Route path="/Results" element={<Results />} />
                  <Route path="/Freelances" element={<Freelances />}/>
                  <Route path="/*" element={<Error />} />    
            </Routes> 
            <Footer />
       </SurveyProvider>
         
       </ThemeProvider>
      
    </BrowserRouter>
      
        
        
  </React.StrictMode>
);


