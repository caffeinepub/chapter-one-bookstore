import { BookCard } from './BookCard';
import { trendingBooks } from '../features/books/trendingBooks';

export function TrendingBooks() {
  return (
    <section id="trending-books" className="py-16 md:py-24">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-12 text-center">
          Trending Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trendingBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}
