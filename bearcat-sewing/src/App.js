import './App.css';
import TopNav from './sections/TopNav';
import Main from './sections/Main';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="App">
      <TopNav />
      <Main />
      <Contact />
    </div>
  );
}