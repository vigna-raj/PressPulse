import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
const News = (props) => {
    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(false);
    let [totresults, setTotresults] = useState(0);
    let [page, setPage] = useState(1);
    const update = async () => {
        setLoading(true)
        props.setProgress(30)
        let raw = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}`);
        props.setProgress(60)
        let jsondata = await raw.json();
        props.setProgress(90)
        setData(jsondata.articles);
        setLoading(false)
        setTotresults(jsondata.totalResults)
        props.setProgress(100)
    }
    useEffect(() => {
        update();
    }, [props.category])
    const fetchmore = async () => {
        let raw = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&page=${page + 1}&apiKey=${props.apikey}`);
        setPage(page + 1);
        let jsondata = await raw.json();
        setData(data.concat(jsondata.articles));
        // setTotresults(jsondata.length)

    }
    return (
        <>

            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '25px' }}>PressPulse - Top {props.category[0].toUpperCase() + props.category.slice(1)} Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={data.length}
                next={fetchmore}
                hasMore={totresults !== data.length}
                loader={<Spinner />}
            >
                <div className='container'>
                    <div className="row">{data.map((element) => {
                        return <div className="col-md-4" key={element.url}><NewsCard key={element.url} img_url={element.urlToImage} title={element.title ? element.title.slice(0, 82) + '...' : "Title"} description={element.description ? element.description.slice(0, 76) + '...' : "Description"} article_url={element.url} /></div>
                    })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

export default News
