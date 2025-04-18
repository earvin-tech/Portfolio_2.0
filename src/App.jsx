import Background from './components/Background';
import Header from './components/Header';
import { HomeTitles } from './components/HomeTitle';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
  return (
    <>
    <Header />
    <Background>
      <HomeTitles />
      <Skills />
    </Background>

    <Projects />
    </>
  );
}