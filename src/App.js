import CardList from "./cardList";
import FilterPage from "./filterPage";


function App() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1>Robots Project </h1>
        <FilterPage />        
      </div>
      <CardList />            
    </div>
  );
}

export default App;
