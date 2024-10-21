import FotterComp from './Components/FotterComp';
import HeaderComp from './Components/Navbar';
import './App.css';
import './Data/cursos.json';
function App() {
  return (
    <div className="app-container">
      <header className="header">
        <HeaderComp />
      </header>
      
      <main className="main-content">
       
      </main>

      <footer className="footer">
        <FotterComp />
      </footer>
    </div>
  );
}

export default App;
