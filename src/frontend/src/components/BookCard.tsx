import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useCart } from '../features/cart/cartStore';
import type { Book } from '../features/books/trendingBooks';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(book);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="aspect-[2/3] overflow-hidden bg-muted">
        <img
          src={book.coverImage}
          alt={`Cover of ${book.title}`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="flex-1 pt-4 pb-2">
        <h3 className="font-semibold text-lg text-foreground mb-1 line-clamp-2">
          {book.title}
        </h3>
        <p className="text-sm text-muted-foreground">{book.author}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full"
          variant="default"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
