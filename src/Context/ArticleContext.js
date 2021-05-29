import React, { createContext, useState } from "react";

export const ArticleContext = createContext();

const ArticleProvider = ({children}) => {
    const [articles, setArticle] = useState([
        {id: 1, name: 'arun', age: 23},
        {id: 2, name: 'kumar', age: 29}
    ]);
    return(
        <ArticleContext.Provider value={{articles}}>
            {children}
        </ArticleContext.Provider>
    )
}
export default ArticleProvider;
