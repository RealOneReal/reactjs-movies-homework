import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainPage></MainPage>
    </div>
  );
};

export default App;
