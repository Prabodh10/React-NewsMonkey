import React, { Component } from 'react'

import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize : 5,
        category : 'general '
      }

    static propTypes = {
        country: PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string
      }
      
    Capitalize = (str)=>{
        return str.charAt(0).toUpperCase() + str.slice(1);
        }

    constructor(props){
        super(props);
        console.log("I am constructor of news component");

        this.state = {
            articles : [],
            loading : false,
            page : 1
            
        }
        document.title = `${this.Capitalize(this.props.category)} - NewsMonkey`
    }

    async updateNews(){

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=019299585c9c49a8816bbc82530d7fd0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles : parsedData.articles,
                    totalResults : parsedData.totalResults,
                    loading : false
                })

    }

async componentDidMount(){

  this.updateNews();
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=019299585c9c49a8816bbc82530d7fd0&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading : true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({articles : parsedData.articles,
    //                 totalResults : parsedData.totalResults,
    //                 loading : false
    //             })
}

handlePrevpage = async()=>{
// let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=019299585c9c49a8816bbc82530d7fd0&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
// this.setState({loading : true});
// let data = await fetch(url);
// let parsedData = await data.json();
// console.log(parsedData);
// this.setState({
//     page : this.state.page - 1,
//     articles : parsedData.articles,
//     loading : false

// })
  this.setState({page: this.state.page -1});
  this.updateNews();


}

handleNextpage = async ()=>{
    // console.log("next");
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=019299585c9c49a8816bbc82530d7fd0&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading : true});
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     console.log(parsedData);
    //     this.setState({
    //         page : this.state.page + 1,
    //         articles : parsedData.articles,
    //         loading : false
    
    //     })
    // }
    this.setState({page: this.state.page + 1});
    this.updateNews();

   
}
  render() {
    return (
      <div className = "container my-3">
        <h1 className='text-center' style={{margin: '25px'}}> Top Head Lines from {this.Capitalize(this.props.category)}</h1>
        {this.state.loading && <Spinner />}
         <div className="row my-3">

            {!this.state.loading && this.state.articles.map((element)=>{

                return  <div className="col-md-4 my-3" key={element.url}>
                <NewsItem title={element.title? element.title: ""} description={element.description? element.description: ""} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>

            })}
           


        </div>
        <div className="container d-flex justify-content-between">
        <button disabled = {this.state.page<=1} type="button" onClick={this.handlePrevpage} className="btn btn-dark">&larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" onClick={this.handleNextpage} className="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
