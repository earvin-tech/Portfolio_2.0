import Background from './components/Background';
import Header from './components/Header';

export default function App() {
  return (
    <>
    <Header />
    <Background>
      <h1 className="text-5xl font-extrabold font-orbitron mb-4">Earvin Tumpao</h1>
      <p className="text-xl">Full-stack Developer.</p>
    </Background>
    </>
  );
}