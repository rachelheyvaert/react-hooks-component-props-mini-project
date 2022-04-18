import React from "react";
import ArticleList from "../components/ArticleList"

function Article ({ title, date, preview }) {
    return (
<React.Fragment>
<article>
    <h3>{title}</h3>
    <small>{date || "January 1, 1970"}</small>
    <p>{preview}</p>
</article>
</React.Fragment>
    )}

export default Article