import AboutMe from "./components/AboutMe";
import Title from "./components/commonComponents/Title";
import Header from "./components/Header";

function App() {
  return (
    <div className="main-container">
      <Header/>
        <Title> 
          Обо мне
        </Title>
      <AboutMe/>
    </div>
  );
}

export default App;
