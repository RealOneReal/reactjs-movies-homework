import Header from "./components/header/Header";
import ActorPage from "./pages/ActorPage";
import { person } from "./mock-data/mockPersonDetails";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <ActorPage {...person} />
    </div>
  );
};

export default App;
