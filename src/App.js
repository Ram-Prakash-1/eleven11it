import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero';
import ValueProposition from './Components/ValueProposition';
import Features from './Components/Features';
import Industries from './Components/Industries';
import Testimonials from './Components/Testimonials';
import Pricing from './Components/Pricing';
import Footer from './Components/Footer';


function App() {
return (
<div className="app-root">
<Hero />
<ValueProposition />
<Features />
<Industries />
<Testimonials />
<Pricing />
<Footer />
</div>
);
}


export default App;
