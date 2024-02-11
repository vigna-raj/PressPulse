import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'

const News = (props) => {
    let [data, setData] = useState([]);

    const update = async () => {
        let fet = await (await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=99584efc62004542936d6c5212cb74ad`)).json();
        setData(fet.articles);
    }
    useEffect(() => {
        update();
    }, [props.category])
    return (
        <div className='container'>
            <div className="row">{data.map((element) => {
                return <div className="col-md-4" key={element.url}><NewsCard key={element.url} img_url={element.urlToImage} title={element.title ? element.title.slice(0, 82) + '...' : "Title"} description={element.description ? element.description.slice(0, 76) + '...' : "Description"} article_url={element.url} /></div>
            })}
            </div>
        </div>
    )
}

export default News
