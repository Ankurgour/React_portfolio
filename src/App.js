import "./App.css";
import Homee from "./pages/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Ankurlogo from './assets/Ankurlogo.jpg';
import Aboutpage from "./components/aboutpage/aboutpage";
import Footer from "./components/footer/footer";



function App(){
    // const [load, upadateLoad] = useState(true);





    return(<>
    <div className="app">

       <Homee/>
      {/* <Aboutpage/> */}
      <Footer/>
      
       
       </div>
       </>
    );
}
export default App;