import { Welcome, Footer, Services, Transactions } from "./components";
import HeroWithNavbar from "./components/HeroWithNavbar";


const App = () => (
  <div className="min-h-screen">
  
     
 <HeroWithNavbar/>
 <div className="gradient-bg-welcome">
 <Welcome />
    </div>
  </div>
);

export default App;
