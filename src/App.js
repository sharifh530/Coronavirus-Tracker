import React from "react";

import { MenuItem, FormControl, Select } from "@material-ui/core";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <div className="app">
      <div className="app_header">
        <FormControl className="app_dropdown">
          <Select variant="outlined" value="abc">
            {/* Loop through all the countries and show a dropdown list of the options  */}

            {/* <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Worldwide</MenuItem> */}
          </Select>
        </FormControl>
      </div>
      <h1>COVID 19 TRACKER</h1>

      {/* header */}
      {/* Title+selec input dropdown field */}

      {/* InfoBoxs */}
      {/* InfoBoxs */}
      {/* InfoBoxs */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
