import { useLoaderData } from "react-router";
import "./App.css";
import Slider from "./Components/Slider";
// import logo from "./assets/logo.png"

function App() {
  const appData = useLoaderData();
console.log(appData);

  const slideApp = [appData[3], appData[2], appData[5]];
console.log(slideApp);

  return (
    <div>
    
        <div className="w-3/4 mx-auto py-4">
        <Slider app={slideApp}></Slider>
        </div>
     
    </div>
  );
}

export default App;
