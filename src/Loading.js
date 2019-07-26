import React from 'react';
const LoadingHoc=(WrappedComponent)=>{
  return  class Loading extends React.Component{
      state={isLoading:true}
        
        componentDidMount=()=>
        {setTimeout(() => {
            this.setState({isLoading:false})
        }, 3000);
            
        }
        render(){
            return this.state.isLoading? <i class="fas fa-spinner fa-spin"></i>:
            <WrappedComponent {...this.props} />
        }
        
    }
}


export default LoadingHoc