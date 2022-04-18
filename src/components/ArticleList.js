import React from "react";
import Article from "../components/Article"

function ArticleList ({ articles }) {
    console.log(articles);
    const allArticles = articles.map((article) => {
        return <Article key={article.id} title={article.title} date={article.date} preview={article.preview}/>
    })
    return (
        <React.Fragment>
       <main>
           {allArticles}
       </main>
       </React.Fragment>
    )
}


export default ArticleList