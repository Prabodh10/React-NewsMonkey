import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageurl, newsUrl, author, date, source} = this.props;
    return (
   
      <div>
        <div className="card">
          <div style={{ display: 'flex',
                        justifyContent: 'end',
                        position: 'absolute',
                        right: '0'
                      }}>
              <span className="badge rounded-pill bg-danger" >
                {source}
                <span className="visually-hidden">unread messages</span>
              </span>
          </div>
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
