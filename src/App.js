import React, { Component } from 'react';
import Nav from './Components/Nav';
import SearchArea from './Components/SearchArea';
import MovieList from './Components/MovieList';
import Pagination from './Components/Pagination';
import MovieInfo from './Components/MovieInfo';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  constructor()
  {
    super()
    this.state = {
       movies : [],
       searchTerm: '',
       totalResults: 0,
       currentPage: 1,
       currentMovie: null
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=84a46e97f3d14e1a1de0b86810f39d3c&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      console.log(data)
      this.setState( {movies: [...data.results], totalResults: data.total_results})
    })
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=84a46e97f3d14e1a1de0b86810f39d3c&query=${this.state.searchTerm}&page=${pageNumber}`)
    .then(data => data.json())
    .then(data => {
      console.log(data)
      this.setState( {movies: [...data.results], currentPage: pageNumber})
    })
  }

  viewMovieInfo = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id == id)

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null
    //kalo ada movienya kita masukkin ke newCurrentMovie

    this.setState({currentMovie: newCurrentMovie})
  }

  closeMovieInfo = () => {
    this.setState({currentMovie: null})
  }

  render() {
    const numberPages = Math.floor(this.state.totalResults/20)
    
    return (
      <Router>
        <div className="App">
          <Nav />
            <Switch>
              <Route exact path="/">
                <div>
                  <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
                  <MovieList movies={this.state.movies} viewMovieInfo={this.viewMovieInfo}/>
                  {this.state.totalResults > 20 ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : ''}
                </div>
              </Route>
              <Route path="/MovieInfo">
                <MovieInfo currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo}/>
              </Route>
            </Switch>
        </div>
      </Router> 
  );
  }
}

export default App;
