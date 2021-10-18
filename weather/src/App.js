import React from "react";
const api = {
  key: "13a7dfe63027b6bf6434c3e2e257b08f",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeHolder="Search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
