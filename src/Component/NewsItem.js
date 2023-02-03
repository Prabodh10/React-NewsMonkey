import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageurl, newsUrl, author, date, source} = this.props;
    return (
   
      <div>
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{'left':'90%', 'zIndex':1}}>
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
            <img src={!imageurl ? "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-idrr8cl0jng3dsg31931mkgvr6-20170401155349.Medi.jpeg" : imageurl} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>

                  <div className="card-footer my-2">
                    <small className="text-muted">By {!author? "Unknown" : author} on {new Date(date).toGMTString()}</small>
                  </div>

              </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
