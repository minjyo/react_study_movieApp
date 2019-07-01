import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

//Render: componentWillMount() -> render() -> componentDidMount()
//Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

//promise: javadscript concept, asynchronous
//동기: a가 끝나야 b실행 가능 / 비동기: 이전 라인의 작업이 끝날 때까지 기다리지 않음, 된다/안된다 2개의 시나리오 관리 가능 
class App extends Component {

  state = {
    //greeting: 'Hello!'
  }

  componentDidMount(){
    this._getMovies();
    // setTimeout(() => {
    //   this.setState({ //setState(state 업데이트)시마다 render
    //     movies: [
    //     ...this.state.movies, //기존의 영화 리스트 유지
    //     {
    //       title: "abc",
    //       poster: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
    //     }
    //     ]
    //   })
    // }, 2000)


  }
  
  _getMovies = async () => {
    const movies = await this._callApi() //await: callApi의 작업이 완료되면 성공여부에 상관없이, 리턴값이 무엇이든, movies에 넣음
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.lt/api/v2/list_movies.json?sort=rating')
    .then(response => response.json()) //작업
    .then(json => json.data.movies)
    .catch(err => console.log(err)) //에러발생시 실행 
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return <Movie 
      title={movie.title_english} 
      poster={movie.medium_cover_image} 
      key={movie.id} 
      genres={movie.genres} 
      synopsis={movie.synopsis}/>
    })
    return movies
  }

  render(){
    const{ movies } = this.state;
    return (
      <div className={movies ? "App" : "App-loading"}>
        {movies ? this._renderMovies() : 'Loading'}
        {/* {this.state.greeting} */}
        {/* {this.state.movies ? this._renderMovies() : "Loading"} */}
        {/* {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}></Movie>
        })} */}
      </div>
    );
  }
}

export default App;
