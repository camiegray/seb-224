// src/App.jsx

import { useState } from 'react';
import './App.css';

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  console.log('Our isDarkMode state value is:', isDarkMode);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [userInfo, setUserInfo] = useState({
    firstName: 'Jane',  // Change 'Jane' to your first name.
    lastName: 'Doe',    // Change 'Doe' to your last name.
    hasPets: false,      // Change to true if you have pets, false if not.
    age: 25             // Change 25 to your age.
  });

  console.log('User Info:', userInfo);

  const petMessage = userInfo.hasPets ? 'have pets' : 'do not have pets';

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      {/* Dark Mode Button */}
      <button onClick={toggleDarkMode}>
        Dark Mode? {isDarkMode ? "On" : "Off"}
      </button>

      <h1>
        Hello, my name is {userInfo.firstName} {userInfo.lastName}, I am {userInfo.age} years old, and I {petMessage}.
      </h1>
    </div>
  );
};

export default App;
