import Buttons from "./components/Buttons.js";
import Table from "./components/Table.js";
import Banner from "./components/Banner.js";
import useState from "react";
import satData from "./components/satData.js";
import React from "react";

function App() {
  const [sat,setSat] = React.useState(satData);
  const displaySats = [new Set(satData.map((data) => data.orbitType))];
    // code continues ...
    const filterByType = (currentType) => {
      const displaySats = satData.filter((newSatDisplay) => {
        return newSatDisplay.orbitType === currentType;
      });
      setSat(displaySats);
    };

  return(
    <div>
      <Banner />
      <Buttons
      // Step 3: Update App.js #6 this has several "undefined errors"
      // Do I need to do "const" or "let"? Syntax is wrong!
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table sat={sat} />
    </div>
  )
  }
export default App;
