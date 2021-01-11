import "./App.css";
import SwipeButtons from "./components/swipeButtons/SwipeButtons";
import TinderCards from "./components/tinderCards/TinderCards";
import Header from "./containers/header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
