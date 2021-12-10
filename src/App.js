import { FeedbackList } from './components/FeedbackList';
import { Header } from './components/Header';
import { FeedbackStats } from './components/FeedbackStats';
import { FeedbackForm } from './components/FeedbackForm';
import { About } from './routes/About'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutIconLink } from "./components/AboutIconLink";
import { FeedbackProvider} from "./context/FeedbackContext";
import './index.css'


function App() {

 


  


  return (

    <>
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStats  />
                <FeedbackList  />
              </>
            }>

            </Route>
            <Route path='/about' element={<About />}/>
            
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
      </FeedbackProvider>
    </>

  );
}

export default App;
