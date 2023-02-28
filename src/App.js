import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';

function App() {
  return (
    <div className="App">
      <section className="cards-gallery">
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </section>
      <section>
        <Greetings lang="de">Linus</Greetings>
        <Greetings lang="fr">Lucie</Greetings>
        <Greetings lang="es">Afranio</Greetings>
        <Greetings lang="en">Joel</Greetings>
      </section>
    </div>
  );
}

export default App;
