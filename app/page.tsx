import Hero from './components/hero';
import About from './components/about';
import Products from './components/products';
import Contact from './components/contact';
import Recipes from './components/recipes';
import Gallery from './components/gallery';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Products />
      <Recipes />
      <Gallery />
      <Contact />
    </main>
  );
}