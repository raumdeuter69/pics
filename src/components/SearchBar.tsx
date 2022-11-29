import React from "react";


class SearchBar extends React.Component<any,any>{
   state= {term:''};
    onFormSubmit=  (event: { preventDefault: () => void; })=>{
      event.preventDefault();
      this.props.onSubmit(this.state.term)
    }
     render(): React.ReactNode {
         {
            return <div className="ui segment">
<form onSubmit={this.onFormSubmit} className="ui form ">
<div className="field">  
<label>Image Searchs</label>
  <input type="text" value={this.state.term } onChange={e=> this.setState({term:e.target.value})}/>
</div>
</form>
            </div>
         }
     }
}
export default SearchBar;