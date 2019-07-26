import React from "react"


// let rate=''
// const rating=(props)=>{
//     return <div className='rate'>
//             {rate.padStart(props.movie.rating,'★')}
//             {rate.padEnd(5-props.movie.rating,'☆')}
//     </div>
// }
// const changeRating=(props)=>{
//     for (let i=0;i<5;i++)
//     return <div onMouseOver={changeRating(props)} onClick={changeRating(props)}>
//         {i>props.movie.rating?rate[i]='★':rate[i]} 
//         </div>
    
// }
function MovieContainer(props){
    return <div className='addMovie'>
            <a href="#"><img src={props.movie.imgUrl} />
            <h3>{props.movie.name}</h3></a>
          
        </div>

}


export default MovieContainer