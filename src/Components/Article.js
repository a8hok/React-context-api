import React, { useContext } from "react";
import { ArticleContext } from '../Context/ArticleContext'
const Article = () => {
    const { articles } = useContext(ArticleContext);
    return (
        <>
            { articles.length && articles.map((article) => 
                <div key={article.id}>{article.name}, {article.age}</div>
            )}
        </>
    );
};

export default Article;
