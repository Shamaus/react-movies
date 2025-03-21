import React from 'react'
import { Movies } from '../components/Movies'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: TransformStreamDefaultController
    }

    searchMovies = (str, type = 'all') => {
        this.setState({loading: true});
        fetch(`https://www.omdbapi.com/?apikey=5322316a&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(responce => responce.json())
            .then(data => this.setState({ movies: data.Search, loading: false}))
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=5322316a&s=matrix`)
            .then(responce => responce.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false })
            })
    }

    render() {
        const { movies, loading } = this.state;

        return <main className='container content'>
            <Search searchMovies={this.searchMovies} />
            {
                loading ? <Preloader /> : (<Movies movies={this.state.movies} />)
            }
            
        </main>
    }
}
export {Main}