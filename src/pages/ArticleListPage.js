import articles from "./articles"
import { Link } from "react-router-dom";

export const ArticleListPage = () => {
    return (
        <>
            <h1>Articles</h1>
            {
                articles.map( (m) => ( 
                    <Link to={`/articles/${m.name}`} key={m.name} className='article-list-item'>
                        `{m.name}`
                        <h3>{m.title}</h3>
                        <p>{m.content[0].substring(0,15)}...</p>
                    </Link> 
                ))
            }
        </>
    )
};
