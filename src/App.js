import React from "react";
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import MovieList from "./components/MovieList";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: "",
      totalResult: 0,
      currentPage: 1,
    };
    //mengambil API key dari .env file
    this.apiKey = process.env.REACT_APP_API;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //masukan API ke di link search dari document MDB, dan query = judul film yang di cari
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState({
          movies: [...data.results],
          totalResult: data.total_results,
        });
      });
  };

  //Untuk mengupdate state setiap input diubah
  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <div>
          <Search
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
          <MovieList
            viewMovieInfo={this.viewMovieInfo}
            movies={this.state.movies}
          />
        </div>
      </div>
    )
  }
}

export default App;
