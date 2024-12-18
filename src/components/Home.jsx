
import { Banner } from '../components/Banner.jsx';
import { Products } from '../components/Products.jsx';
import { CardsContainer } from '../components/Cards.jsx';

export function Home() {
  return (
    <div>
      <Banner />
      <section>

        <Products/> {/* Mostrar solo productos destacados */}
      </section>
      <section>
        <h2>Categorías principales</h2>
        <CardsContainer /> {/* Muestra las categorías */}
      </section>
    </div>
  );
}

export default Home;
