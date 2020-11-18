import React, { Component } from "react";
import { getMovies, getUniqueGenres } from "../services/moviesService.jsx";
import { Like } from "./common/like";
import { Paginate } from "./common/pagination";
import { PaginateData, paginateData } from "../utils/paginate";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: getUniqueGenres(),
    selectedGenre: getUniqueGenres()[0],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "movieName", order: "asc" },
  };

  handleGenreClick = (genre) => {
    const movies = getMovies().filter((movie) => {
      return movie.genre === genre || genre === "All Genres";
    });

    this.setState({ movies, selectedGenre: genre, currentPage: 1 });
  };

  handleDeleteMovie = (movie) => {
    const movies = this.state.movies.filter((m) => m.movieId !== movie.movieId);
    this.setState({ movies });
  };

  handleLikeComponent = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  paginateData = (page) => {
    this.setState({ currentPage: page });
  };

  sortMovies = (movies, sortColumn) => {
    return _.orderBy(movies, [sortColumn.path], [sortColumn.order]);
  };

  handleSort = (path) => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.setState({ sortColumn });
  };

  renderSortIcons = (path) => {};

  render() {
    const { length: totalCount } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies, sortColumn } = this.state;
    const sortedMovies = this.sortMovies(allMovies, sortColumn);
    const movies = PaginateData(sortedMovies, currentPage, pageSize);
    return (
      <div className="row mt-5">
        <div className="col-md-4">
          <ul className="list-group">
            {this.state.genres.map((genre) => {
              return (
                <li
                  key={genre}
                  className={
                    this.state.selectedGenre === genre
                      ? "list-group-item active cursor-pointer"
                      : "list-group-item cursor-pointer"
                  }
                  onClick={() => {
                    this.handleGenreClick(genre);
                  }}
                >
                  {genre}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-md-8">
          <label>
            Displaying total {movies.length} of {this.state.movies.length}{" "}
            movies
          </label>
          <table className="table">
            <thead>
              <tr>
                <th
                  className="cursor-pointer"
                  onClick={() => {
                    this.handleSort("movieName");
                  }}
                >
                  Title
                </th>
                <th
                  className="cursor-pointer"
                  onClick={() => {
                    this.handleSort("genre");
                  }}
                >
                  Genre
                </th>
                <th
                  className="cursor-pointer"
                  onClick={() => {
                    this.handleSort("rating");
                  }}
                >
                  Rating
                </th>
                <th>Like</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => {
                return (
                  <tr key={movie.movieId}>
                    <td>{movie.movieName}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.rating}</td>
                    <td>
                      <Like
                        onClick={() => {
                          this.handleLikeComponent(movie);
                        }}
                        liked={movie.liked}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => this.handleDeleteMovie(movie)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Paginate
            itemCount={totalCount}
            pageSize={pageSize}
            onClick={this.paginateData}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
