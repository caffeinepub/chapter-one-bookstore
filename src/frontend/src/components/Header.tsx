import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '../features/cart/cartStore';

interface HeaderProps {
  onCartClick: () => void;
}

export function Header({ onCartClick }: HeaderProps) {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">📚</span>
          <span className="text-xl font-semibold tracking-tight text-foreground">
            Chapter One
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Categories
          </a>
          <a
            href="#"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Bestsellers
          </a>
          <Button
            variant="outline"
            size="sm"
            onClick={onCartClick}
            className="relative"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Cart ({totalItems})
          </Button>
        </nav>

        <Button
          variant="outline"
          size="sm"
          onClick={onCartClick}
          className="md:hidden relative"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Cart ({totalItems})
        </Button>
      </div>
    </header>
  );
}
