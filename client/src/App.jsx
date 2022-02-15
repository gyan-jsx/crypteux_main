import {  Welcome, Footer, Features, Transactions } from "./components";
import HeroWithNavbar from "./components/HeroWithNavbar";

const App = () => (
  <div className="min-h-screen">
   
     <HeroWithNavbar />
      <Welcome />
   <Features />
    
  </div>
);

export default App;