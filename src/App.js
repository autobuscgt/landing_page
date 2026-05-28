import AboutMe from "./components/AboutMe";
import Title from "./components/commonComponents/Title";
import Header from "./components/Header";

import clip_icon from './assets/icons/link.svg'
import pc_icon from './assets/icons/pc.svg'
import person_icon from './assets/icons/person.svg'
import Links from "./components/Links";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="main-container">
      <Header />
      <section className="main-section">
        <h1 className="anchors">#ABOUT_ME</h1>
        <Title link={person_icon}>
          Обо мне
        </Title>
        <AboutMe />
      </section>

      <section className="main-section">
        <h1 className="anchors">#LINKS</h1>
        <Title link={clip_icon}>
          Ссылки
        </Title>
        <Links />
      </section>
      <section className="main-section">
        <h1 className="anchors">#SKILLS</h1>
        <Title link={pc_icon}>
          Скиллы
        </Title>
        <Skills/>
      </section>

      <section className="main-section">
        <h1 className="anchors">#PROJECTS</h1>
        <Title>
          Проекты
        </Title>
        <Projects/>
      </section>



    </div>
  );
}

export default App;
