import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component{
  state = { images: [] } ;
  onSearchSubmit=async (term)=>{ 
     const response = await axios
     .get('http://api.unsplash.com/search/photos',{
      params: {
        query:term ,
        client_id: 'hL8K-tSkDGSGu0yT5O40KMSqPhTdR-TAWLkD18Ukdyo'
      }
     });
      this.setState({images:response.data.results});
}

//headers:{
//Authorization: 'Client-ID hL8K-tSkDGSGu0yT5O40KMSqPhTdR-TAWLkD18Ukdyo'}

  render() {
 return ( 
  <div className='ui container' style={{marginTop:'20px'}}>
  <SearchBar onSubmit= {this.onSearchSubmit} />  <br/>
  <ImageList images= {this.state.images}/>
    </div>
  );
   }
}
export default App;  