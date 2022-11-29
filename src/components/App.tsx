import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class  App extends React.Component<any,any> {
  state={images:[]}
   onSearchSubmit= async (term:string)=>{
 const response = await axios.get('https://api.unsplash.com/search/photos',{
  params :{
query: term
  },
  headers:{
    Authorization: 'Client-ID MZiTV3Et6jmiR2qrN_Abd1BqsNJlHuxS7cDuSgB7EPY'
  }

  })
  console.log(this)
  this.setState({images:response.data.results}); 
};
  render(){
  return (
    <div className="ui container" style={{marginTop :'10 px'}}>
     <SearchBar onSubmit={this.onSearchSubmit} />
     Found : {this.state.images.length} images
    </div>
  );
}
}

export default App;
