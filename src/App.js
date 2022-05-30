import CardList from "./cardList";
import FilterPage from "./filterPage";
import RobotArr  from "./data.json";
import { useState } from "react";


function App() {

  const [list, setList] = useState(RobotArr.robots)

  return (
    <div>
      <div className="flex flex-col items-center">
        <h1>Robots Project </h1>
        <FilterPage changeList={setList} />        
      </div>
      <CardList robotList={list} />            
    </div>
  );
}

export default App;
