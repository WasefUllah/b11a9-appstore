import { Link, useLoaderData } from "react-router";
import "./App.css";
import Slider from "./Components/Slider";
import AppCard from "./Components/appCard";
// import logo from "./assets/logo.png"

function App() {
  const { appData, faqData } = useLoaderData();
  console.log(appData);
  console.log(faqData);
  const slideApp = [appData[7], appData[6], appData[5]];
  console.log(slideApp);
  const getTopRatedApps = (data, count = 4) => {
    return [...data].sort((a, b) => b.rating - a.rating).slice(0, count);
  };
  const topApp = getTopRatedApps(appData);

  const educationApps = appData.filter((app) => app.category === "Education");
  const healthApps = appData.filter(
    (app) => app.category === "Health & Fitness"
  );
  const productivityApps = appData.filter(
    (app) => app.category === "Productivity"
  );
  console.log(topApp);
  return (
    <div className="w-3/4 mx-auto py-4">
      <title>AppStore | Home</title>

      <Slider app={slideApp}></Slider>
      <div>
        <h1 className="py-4 font-bold text-xl">Trending apps</h1>
        <div className="grid grid-cols-3 gap-4">
          {topApp.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      </div>
      <div>
        <h1 className="py-4 font-bold text-xl">Health and fitness apps</h1>
        <div className="grid grid-cols-3 gap-4">
          {healthApps.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      </div>
      <div>
        <h1 className="py-4 font-bold text-xl">Productivity apps</h1>
        <div className="grid grid-cols-3 gap-4">
          {productivityApps.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      </div>
      <div>
        <h1 className="py-4 font-bold text-xl">Eduction apps</h1>
        <div className="grid grid-cols-3 gap-4">
          {educationApps.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      </div>

      <div>
        <h1 className="py-4 font-bold text-xl">FAQ</h1>
        <div className="join join-vertical bg-base-100">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="collapse collapse-arrow join-item border border-base-300"
            >
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title font-semibold">{faq.question}</div>
              <div className="collapse-content text-sm">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
