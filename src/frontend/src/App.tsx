import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrendingBooks } from './components/TrendingBooks';
import { Footer } from './components/Footer';
import { CartPanel } from './components/CartPanel';
import { CartProvider } from './features/cart/cartStore';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Header onCartClick={() => setIsCartOpen(true)} />
        <Hero />
        <main className="flex-1">
          <TrendingBooks />
        </main>
        <Footer />
        <CartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
}

export default App;
