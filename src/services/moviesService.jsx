const movies = [
  {
    movieId: "J7FDYUDF4I445655YUJHBFSFS",
    movieName: "The Last Devil",
    genre: "Romance",
    rating: 4.5,
    liked: false,
  },
  {
    movieId: "J7FDYUfF4I4YUJHBFSFS",
    movieName: "Z Last Devil",
    genre: "Thriller Crime",
    rating: 4.5,
    liked: false,
  },
  {
    movieId: "J7FDYUDDFDFDFYUJHBFSFS",
    movieName: "The Last Life",
    genre: "Horror Comedy",
    rating: 4.5,
    liked: false,
  },
  {
    movieId: "J7FSSDFUDF4I4YUJHBFSFS",
    movieName: "The Last Devil",
    genre: "Thriller Crime",
    rating: 4.5,
    liked: false,
  },
  {
    movieId: "J7FDYFGFDFUJHBFSFS",
    movieName: "The Last Devil",
    genre: "Thriller Crime",
    rating: 5.0,
    liked: false,
  },
  {
    movieId: "J7FDY6464YUJHBFSFS",
    movieName: "The Last Devil",
    genre: "Thriller Crime",
    rating: 1.5,
    liked: false,
  },
  {
    movieId: "J7FDYU45546BFSFS",
    movieName: "The Last Devil",
    genre: "Thriller Crime",
    rating: 4.5,
    liked: false,
  },
  {
    movieId: "J7FDY434535DFGDFUJHBFSFS",
    movieName: "The Last Devil",
    genre: "Horror Comedy",
    rating: 4.9,
    liked: false,
  },
  {
    movieId: "J7FDYUDF34FDFDUJHBFSFS",
    movieName: "The Last Devil",
    genre: "Action",
    rating: 3.5,
    liked: false,
  },
  {
    movieId: "J7FDYUDF4I434534YUJHBFSFS",
    movieName: "The Last Devil",
    genre: "Technology",
    rating: 4.5,
    liked: false,
  },
  {
    movieId: "J7FDYUDF3464564564I4YUJHBFSFS",
    movieName: "The Last Devil",
    genre: "Thriller Crime",
    rating: 4.5,
    liked: false,
  },
  {
    movieId: "J7FDYU35FFFGFHBFSFS",
    movieName: "The Last Devil",
    genre: "Comedy",
    rating: 4.5,
    liked: false,
  },
  {
    movieId: "J7FDY4U35FFFGFHBFSFS",
    movieName: "The Last Devil",
    genre: "Comedy",
    rating: 4.5,
    liked: false,
  },
];

export const getMovies = () => {
  return movies;
};

export const getMovie = (movieId) => {
  return movies.filter((movie) => {
    return movie.movieId === movieId;
  });
};

export const getUniqueGenres = () => {
  const distinctGenres = [
    "All Genres",
    ...new Set(movies.map((movie) => movie.genre)),
  ];
  return distinctGenres;
};
