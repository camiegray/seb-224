// src/App.jsx

import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import FounderListItem from './components/FounderListItem/FounderListItem.jsx';



// src/App.jsx

const App = () => {
  const founders = [
    {
      name: 'Elizabeth Holmes',
      title: 'CEO',
      credential: 'MBA from SuperLegit University',
      id: 1,
    },
    {
      name: 'Sam Bankman-Fried',
      title: 'CFO',
      credential: 'CPA from TotallyReal State',
      id: 2,
    },
    {
      name: 'Matt Damon',
      title: 'CMO',
      credential: 'Was in that movie you saw',
      id: 3,
    },
    {
      name: 'Camie Gray',
      title: "Da Best",
      credential: "Always da bessssst",
      id: 4,
   },
  ];

  return (
    <>
      <Navbar />
      <main>
        <h1>Welcome to Hyperbo.ly</h1>
        <h2>The future is firmly in front of us!</h2>
        <p>If you can't explain it to a fifth-grader, our product does it.</p>
      </main>
      <h2>Our Founders</h2>
      <ul>
        {founders.map((founder) => (
          <FounderListItem
            key={founder.id}
            founder={founder}
          />
        ))}
      </ul>
    </>
  );
};


export default App;
