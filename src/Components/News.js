import React, { useEffect, useState } from 'react'; 
import NewsItem from './NewsItem';
import Spinner from './Ghost';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        
        try {
            setLoading(true);
            let response = await fetch(url);
            props.setProgress(30);

            if (!response.ok) throw new Error('Network response was not ok');

            let parsedData = await response.json();
            props.setProgress(70);
            setArticles(parsedData.articles);
            setTotalResults(parsedData.totalResults);
        } catch (error) {
            console.error('Error fetching news:', error);
        } finally {
            setLoading(false);
            props.setProgress(100);
        }
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews();
        // eslint-disable-next-line
    }, []);

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(prevPage => prevPage + 1); 

        try {
            let response = await fetch(url);
            if (!response.ok) throw new Error('Network response was not ok');

            let parsedData = await response.json();
            setArticles(prevArticles => [...prevArticles, ...parsedData.articles]);
            setTotalResults(parsedData.totalResults);
        } catch (error) {
            console.error('Error fetching more news:', error);
        }
    };

    return (
        <>
            <h1 className="header-title text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>
                NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
            </h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults} // Adjust this to ensure it checks for remaining articles
                loader={<Spinner />}
            > 
                <div className="news-container"> 
                    {articles.map((element) => {
                        return (
                            <div className="news-item" key={element.url}>
                                <NewsItem 
                                    title={element.title ? element.title : ""}
                                    description={element.description ? element.description : ""}
                                    imgUrl={element.urlToImage}
                                    newsUrl={element.url}
                                    author={element.author}
                                    date={element.publishedAt}
                                    source={element.source.name} 
                                />
                            </div>
                        );
                    })}
                </div>
            </InfiniteScroll>
        </>
    );
}

News.defaultProps = {
    country: 'us',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News;

