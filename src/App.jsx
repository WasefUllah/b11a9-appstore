import { Link, useLoaderData } from "react-router";
import "./App.css";
import Slider from "./Components/Slider";
import AppCard from "./Components/appCard";

function App() {
  const { appData, faqData } = useLoaderData();
  const slideApp = [appData[7], appData[6], appData[5]];

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

  return (
    <div className="w-full lg:w-3/4 mx-auto py-4 px-4 sm:px-6 md:px-8">
      <title>AppStore | Home</title>

      <Slider app={slideApp}></Slider>

      <div>
        <h1 className="py-2 sm:py-3 md:py-4 font-bold text-lg sm:text-xl">Trending apps</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {topApp.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      </div>

      <div>
        <h1 className="py-2 sm:py-3 md:py-4 font-bold text-lg sm:text-xl">Health and fitness apps</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {healthApps.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      </div>

      <div>
        <h1 className="py-2 sm:py-3 md:py-4 font-bold text-lg sm:text-xl">Productivity apps</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {productivityApps.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      </div>

      <div>
        <h1 className="py-2 sm:py-3 md:py-4 font-bold text-lg sm:text-xl">Education apps</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {educationApps.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      </div>

      <div>
        <h1 className="py-2 sm:py-3 md:py-4 font-bold text-lg sm:text-xl">FAQ</h1>
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
