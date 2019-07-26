import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieContainer from './movieContainer';
import AddMovie from "./AddMovie";
import StarRating from './StarRating'
import LoadingHoc from './Loading'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      movieContent:[{imgUrl:'https://d1jo0zet24jmxt.cloudfront.net/content/3809/fi-FI/9dd902250d864011aee02800dfa09301_340x501.jpg',
         name:'Batman returns',
         rating:4},
         {imgUrl:'https://i.pinimg.com/originals/a5/ae/48/a5ae48861b19751372fdb0af6344e1b9.jpg',
         name:'Shrek',
         rating:4},
         {imgUrl:'https://images-na.ssl-images-amazon.com/images/I/618uZRUCKkL.jpg',
         name:'Alice in wonderland',
         rating:3},
         {imgUrl:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1548893746-51kT05ugyOL.jpg?crop=0.889xw:1xh;center,top&resize=480:*',
         name:'The lion king',
         rating:5}],
         search:0,
         searchName:''
     }
  }
  addNewMovie = newMovie => {
    this.setState({
      movieContent: this.state.movieContent.concat(newMovie)
    });
  };

  newRating = (rate) => {
    this.setState({
      search:rate,
    })
  }
  handleSearch=(searched)=>{
    this.setState({
      searchName:searched,
    })
  }

  render(){
    console.log(this.state.search)
  return (
    <div className="App-1">
       <div className='SearchBar'>
         <input type="text" className='inputSearch' value={this.state.searchName} onChange={(event) => this.handleSearch(event.target.value)}/>
         <StarRating rating={this.state.search} handleClick={this.newRating}/>
         </div>
        <div className="App">
      {this.state.movieContent.filter(el=>el.name.toUpperCase().startsWith(this.state.searchName.toUpperCase())&&(this.state.search==0||el.rating==this.state.search))
        .map(el => (<div>
          <StarRating rating={el.rating} />
          <MovieContainer movie={el} className="movieContent"/></div>))}
          <AddMovie buttonLabel="+" addMovie={this.addNewMovie} />
    </div>
    </div>
  );
}
}

export default LoadingHoc(App);
