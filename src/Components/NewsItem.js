import React from 'react';

const NewsItem = ({ title, description, imgUrl, newsUrl, author, date, source }) => {
    return (
        <div className="news-card">
            <img src={imgUrl} alt="News" className="card-img-top" />
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description}</p>
                <p className="card-date">{new Date(date).toLocaleString()} by {author} | Source: {source}</p>
                <a href={newsUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
        </div>
    );
};

export default NewsItem;
