import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Books from './Components/books'
import Search from './Components/search'
import {Link,Switch,Route} from 'react-router-dom'
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books:[],
    booksinsearch:[],
    loading:false
    }

      componentDidMount(){
        this.getAllBooks();
      }
      getAllBooks=async()=>{
        this.setState({
          loading:true
        })
      await BooksAPI.getAll().then(book=>this.setState({
          books:book,
          loading:false
        }))

      }
    UpdateShelf=async(book,shelf)=>{
      this.setState({
        loading:true
      })
      BooksAPI.update(book,shelf).then(()=>{
        BooksAPI.getAll().then(Newbooks=>{
          this.setState({
            books:Newbooks,
            loading:false
          })
          this.UpdateSearch(this.state.booksinsearch)
        })
      })
    }
  UpdateSearch=async(values)=>{
      try{ for(let value of values){
      for(let books of this.state.books){
      if(value.id.trim() === books.id){
      value.shelf=books.shelf
      }}
      this.setState({
        booksinsearch:values
      })
      }
      }catch(error){
      this.setState({
        booksinsearch:[]
      })  
      }
      }
    Search=async(query)=>{
      this.setState({
        loading:false
      })
      if(query){
    await BooksAPI.search(query).then(book=>{
      this.UpdateSearch(book)
      if(query===''){
        this.setState({
          booksinsearch:book,
          loading:false
        })
      }else{
        this.setState({
          booksinsearch:[],
          loading:false
      })
    this.UpdateSearch(book)
    this.property1=(this.setState({error: null}))
    console.log(this.hasOwnProperty('property1'));
      if(query !==this.hasOwnProperty('property1')){
    this.setState({booksinsearch: []})
      this.setState(() => ({ loading: false }));
      this.UpdateSearch(book)
    
    }else{
      BooksAPI.get(query).then((result) => {
        this.setState({booksinsearch: []})
        console.log('seef')
      if(query.id===this.hasOwnProperty('property1')){
        console.error('not find');
        this.setState({booksinsearch: result})
          this.setState(() => ({ loading: false }));
          this.UpdateSearch(result)
    }
  }
  )
    }
  }
  })
  }}



    render() {
      return (
        <div className="app">
          <Switch>
      {this.state.loading===true &&(
      <div>
    <h1>Loading...</h1>
      </div>
            )}
      <Route exact path='/search' render={()=>(

        <div className="search-books">
        <div className="search-books-bar">
        <Link to='/'>
          <button className="close-search">
          Close
          </button>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" 
            onChange={event=> this.Search(event.target.value)}/>
          </div>
        </div>

        <Search mainbooks={this.state.books} books={this.state.booksinsearch} UpdateShelf={(book,shelf)=>this.UpdateShelf(book,shelf)}/>
        </div>
      )}/>

      <Route exact path='/' render={()=>(
            <div className="list-books">
              <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
              <Books books={this.state.books} UpdateShelf={(book,shelf)=>this.UpdateShelf(book,shelf)}/>
              
              <Link to='/search'>
              <div className="open-search">
                <button>Add a book</button>
              </div>
              </Link>
              </div>
      )}/>
      </Switch>
        </div>
      )
    }
    }

export default BooksApp
