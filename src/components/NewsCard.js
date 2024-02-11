import React from 'react'

const NewsCard = (props) => {
    return (
        <>
            <div className="card bg-dark text-light mb-3 d-inline-block" style={{ "width": "18rem" }}>
                <img src={props.img_url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href={props.article_url} className="btn btn-primary">Link</a>
                </div>
            </div>
        </>
    )
}

export default NewsCard
