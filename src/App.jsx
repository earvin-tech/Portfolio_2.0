import Background from './components/Background';
import Header from './components/Header';
import { HomeTitles } from './components/HomeTitle';

export default function App() {
  return (
    <>
    <Header />
    <Background>
      <HomeTitles />
    </Background>
    </>
  );
}