import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'

const News = (props) => {
    let [data, setData] = useState([]);
    // props.setCategory("general")
    const update = async () => {
        console.log(props.category)
        let fet = await (await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=99584efc62004542936d6c5212cb74ad`)).json();
        setData(fet.articles);
    }
    // useEffect(() => {
    //     update();
    // }, [props.category])
    return (
        <div className='container'>
            {data.map((element) => {
                return <NewsCard key={element.url} img_url={element.urlToImage} title={element.title} description={element.description} article_url={element.url} />
            })}
        </div>
    )
}

export default News
