import React,{Component} from 'react'

class Search extends Component{
    constructor(props){
        super(props)
        this.state={shelf:''}
    }
    render(){
        const {UpdateShelf,books}=this.props
        const validatedBooks = books.map((searchedBook) => {
            const myBook = this.props.mainbooks.filter((myBook) => (myBook.id === searchedBook.id))[0]
            searchedBook.shelf = myBook ? myBook.shelf : "none"
            return searchedBook})
        return(
            <div className="search-books-results">
            {books === 0 &&(
              <h1 style={{'text-align':'center'}}>not found</h1>
            )}
            <ol className="books-grid">{validatedBooks.map(book=>(
              book.imageLinks &&(
              <div key={book.id}>
              <div className="book-cover" style={{width: 128, height: 193,
                  backgroundImage:`url(${book.imageLinks.thumbnail})`
                  }}>
              <div className="book-shelf-changer">
              <select value={book.shelf}
              onChange={event=>UpdateShelf(book,event.target.value)}>   
              <option value="move">Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>  
             </select>
              </div>   
                  </div>
                  <li>
                      { book.title} 
                  </li>
                 </div> 
                  ))
                  )}
                  </ol>
          </div> 
        )
    }
}

export default Search