import React from 'react'

class Books extends React.Component{

render(){
    const {books,UpdateShelf}=this.props

    return(
    <div className="list-books-content">
            <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.filter(fil=>fil.shelf.includes('currentlyReading')
                    ).map(b=>(
                    <div key={b.id}>
                <div className="book-cover" style={{width: 128, height: 193,
                    backgroundImage:`url(${b.imageLinks.thumbnail})`
                    }}> 
            <div className="book-shelf-changer">
                    <select value={b.shelf}
                     onChange={event=>UpdateShelf(b,event.target.value)}>
                        <option value="move" >Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                        </select>
                    </div>                       
                    </div>
                    <li>
                        { b.title} 
                    </li>
                    <li className='subtitle'>{b.subtitle}</li>
                    <li className='book-authors'>{b.authors}</li>
                    </div>
                    ))}
                    
                </ol>
                </div>
            </div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.filter(fil=>fil.shelf.includes('wantToRead')                   
                    ).map(b=>(
                    <div key={b.id}>
                    <div className="book-cover" style={{width: 128, height: 193,
                    backgroundImage:`url(${b.imageLinks.thumbnail})`
                    }}>            
            <div className="book-shelf-changer">
                    <select value={b.shelf}
                     onChange={event=>UpdateShelf(b,event.target.value)}>
                        <option value="move" >Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                        </select>
                    </div>                       
                    </div>
                    <li>
                        { b.title} 
                    </li>
                    <li className='subtitle'>{b.subtitle}</li>
                    <li className='book-authors'>{b.authors}</li>
                    </div>
                    ))}
                    
                </ol>
                <ol className="books-grid">
                </ol>
                </div>
            </div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>

                <div className="bookshelf-books">
                <ol className="books-grid">
                {books.filter(fil=>fil.shelf.includes('read')
                    ).map(b=>(
                    <div key={b.id}>
                    <div className="book-cover" style={{width: 128, height: 193,
                    backgroundImage:`url(${b.imageLinks.thumbnail})`
                    }}>               
            <div className="book-shelf-changer">
                <select value={b.shelf}
                onChange={event=>UpdateShelf(b,event.target.value)}>
                    <option value="move" >Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    </select>
                </div>                   
                </div>
                    <li>
                        { b.title} 
                    </li>
                    <li className='subtitle'>{b.subtitle}</li>
                    <li className='book-authors'>{(b.authors&& b.authors.length>1 )?
                b.authors.join(', '):b.authors    
                }</li>

                    </div>
                    ))}
                </ol>
                </div>
            </div>
            </div>
        </div>
    );
}
}
export default Books

