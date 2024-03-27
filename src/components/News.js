import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>NewMonkey - Top Headlines</h2>
        
        <div className="row">
            <div className="col md-4">
                <NewsItem title="myTitle" description="mydesc" imageUrl="https://www.aljazeera.com/wp-content/uploads/2024/01/AP24011591123228-1705221078-1705221465.jpg?resize=1200%2C630&quality=80"/>
            </div>
            <div className="col md-4">
                <NewsItem title="myTitle" description="mydesc"/>
            </div>
            <div className="col md-4">
                <NewsItem title="myTitle" description="mydesc"/>
            </div>
         </div>
      </div>
    )
  }
}

export default News
