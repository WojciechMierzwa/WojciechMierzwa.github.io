import React from 'react';
import { HashRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

// Importuj komponenty dla poszczególnych laboratoriów
import Lab7Zad1 from './components/lab7/Zad1';
import Lab7Zad2 from './components/lab7/Zad2';
import Lab8Zad1 from './components/lab8/Zad1';
import Lab8Zad2 from './components/lab8/Zad2';
import Lab9 from './components/Lab9/Lab9';
import NotFound from './components/Lab9/NotFound';

// Komponenty dla laboratoriów
import Lab7 from './components/lab7/Lab7';
import Lab8 from './components/lab8/Lab8';

function App() {
  return (
    <Router>
      <div>
        {/* Nawigacja */}
        <nav style={styles.mainNav}>
          <NavLink to="/lab7" style={styles.navLink} className="nav-link" activeClassName="active-link">
            Lab 7
          </NavLink>
          <NavLink to="/lab8" style={styles.navLink} className="nav-link" activeClassName="active-link">
            Lab 8
          </NavLink>
          <NavLink to="/lab9" style={styles.navLink} className="nav-link" activeClassName="active-link">
            Lab 9
          </NavLink>
        </nav>

        {/* Trasy */}
        <Routes>
          <Route path="/lab7" element={<Lab7 />} />
          <Route path="/lab8" element={<Lab8 />} />
          <Route path="/lab9/*" element={<Lab9 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

// Zdefiniowanie stylów
const styles = {
  mainNav: {
    backgroundColor: '#333',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    margin: '0 15px',
  },
};

export default App;
