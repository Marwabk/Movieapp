import React from 'react'

class StarRating extends React.Component  {
    constructor(props){
        super(props)
    }
    render(){
    let rate=[]
for (let i=0;i<5;i++){
    this.props.rating>i? 
     rate.push(<span onClick={()=>this.props.handleClick(i!=0?i+1:i)}>★</span>):
     rate.push(<span onClick={()=>this.props.handleClick(i+1)}>☆</span>)
}

    return(
        <div className='rating'>{rate}</div>
    )
}
}

export default StarRating