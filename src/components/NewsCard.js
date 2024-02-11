import React from 'react'

const NewsCard = (props) => {
    return (
        <>
            <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
                style={{ width: "400px" }}>
                <img src={props.img_url ? props.img_url : "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"} className="card-img-top" style={{ height: "200px", width: "378 px" }} alt="..." />
                <div className="card-body" style={{ height: "200px", overflow: "hidden" }}>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href={props.article_url} style={{ position: "absolute", bottom: "20px", left: "20px" }} target='_blank' className="btn btn-primary">Link</a>
                </div>
            </div>
        </>
    )
}

export default NewsCard
