import { randomUUID } from 'node:crypto';

export const database = [
  {
    id: randomUUID(),
    title: 'Percy Jackson and The Olympians, The Lightning Thief',
    author: 'Rick Riordan',
    releaseYear: 2005,
    pages: 377,
    picture: 'https://i.postimg.cc/3rGkHxsT/01-Percy-Jackson.jpg'
  },
  {
    id: randomUUID(),
    title: 'The Lord of the Rings, The Fellowship of the Ring',
    author: 'John Ronald Reuel Tolkien',
    releaseYear: 1954,
    pages: 423,
    picture: 'https://i.postimg.cc/4dNQShLs/01-The-Lord-Of-The-Rings.jpg'
  },
  {
    id: randomUUID(),
    title: 'Crónica de una Muerte Anunciada',
    author: 'Gabriel García Márquez',
    releaseYear: 1981,
    pages: 122,
    picture: 'https://i.postimg.cc/mgp9g68f/03-Cr-nica.jpg'
  }
];