export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
}

export const trendingBooks: Book[] = [
  {
    id: 'gatsby',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    coverImage: '/assets/generated/cover-gatsby.dim_600x900.png',
  },
  {
    id: '1984',
    title: '1984',
    author: 'George Orwell',
    coverImage: '/assets/generated/cover-1984.dim_600x900.png',
  },
  {
    id: 'mockingbird',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    coverImage: '/assets/generated/cover-mockingbird.dim_600x900.png',
  },
  {
    id: 'alchemist',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    coverImage: '/assets/generated/cover-alchemist.dim_600x900.png',
  },
];
