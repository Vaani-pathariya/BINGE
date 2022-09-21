import {useState,useEffect} from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard  from "./MovieCard";
//be93c317
const API_URL='http://www.omdbapi.com?apikey=be93c317';

const App=()=>{
    const [movies,setMovies]= useState([]);
    const [searchTerm,setSearchTerm]= useState('');
    const searchMovies=async (title)=>{
        const response =await fetch(`${API_URL}&s=${title}`);
        const data=await response.json();
        setMovies(data.Search);
        //use of this .Search function ??
    }
    useEffect(()=>{
        searchMovies('Doraemon')
    },[])
    return (
        <div className="app">
            <h1>BINGE</h1>
            <div className="search">
                <input placeholder="Search for movies"
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}/>
                <img src={SearchIcon}
                alt="Search" 
                onClick={()=>searchMovies(searchTerm)}/>
            </div>
            {movies?.length>0
                ?(
                    <div className="container">
                        {movies.map((movie)=>(
                            <MovieCard movie={movie}/>
                        ))}
                </div>
                ):
                (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
            
        </div>
    );
}
export default App;
