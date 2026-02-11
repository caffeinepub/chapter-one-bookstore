import { Button } from '@/components/ui/button';

export function Hero() {
  const handleBrowseClick = () => {
    const trendingSection = document.getElementById('trending-books');
    if (trendingSection) {
      trendingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-background via-muted/30 to-accent/10">
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/assets/generated/chapter-one-hero.dim_1600x900.png)',
        }}
      />
      <div className="container relative z-10 flex flex-col items-center justify-center px-4 py-24 md:py-32 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 max-w-3xl">
          Find Your Next Great Escape
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
          From timeless classics to modern thrillers, we have it all.
        </p>
        <Button
          size="lg"
          onClick={handleBrowseClick}
          className="text-base px-8 py-6 h-auto font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          Browse Collection
        </Button>
      </div>
    </section>
  );
}
