import React from "react";
import CalculateScore from "./Components/CalculateScore";

function App() {
  return (
    <div>
      <CalculateScore
        name="Rahul"
        school="ABC Public School"
        total={480}
        goal={6}
      />
    </div>
  );
}

export default App;