import React from 'react';
import loader from './imgs/loader.gif';

class StarWarsMovies extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    console.log('componentDidMount');

    fetch('https://swapi.co/api/films/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const movies = data.results.map(movie => movie.title);
        console.log(movies);
        this.setState({ movies: movies, isLoading: false })
      });
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return <div>
      {this.state.isLoading
        ? <div><img src={loader} alt="loading" style={{ width: '15px' }} /> Loading</div>
        : <ul>
          {this.state.movies.map(movie => <li key={movie}>{movie}</li>)}
        </ul>
      }
    </div>;
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = { renderComponent: false }
  }

  toggleRenderComponent = () => {
    this.setState(prevState => ({ renderComponent: !prevState.renderComponent }));
  }

  render() {
    console.log(this.state.renderComponent);
    return (
      <div className="App" >
        <button onClick={this.toggleRenderComponent}>{!this.state.renderComponent ? 'Show Component' : 'Hide Component'}</button>
        {this.state.renderComponent ? <StarWarsMovies /> : null}
      </div>
    );
  }
}

export default App;
