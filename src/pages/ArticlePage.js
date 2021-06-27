import { useParams } from "react-router"
import articles from "./articles";

import { NotFoundPage } from "./NotFoundPage";
export const ArticlePage = () => {

    const {name} = useParams();
    // const urlParams = useParams();
    // const name = urlParams.name;
    console.log(name);
    
    const article = articles.find( m =>(m.name === name ));
    //const a = articles.find( (m) => {return m.name === name }  );
    console.log(article);
    
    return article ? (
        <>
        <h1>Articles</h1>
        <h2>{article.title}</h2>
        {article.content.map((para,i)=>(<p key={i}>{para}</p>))}
        </>
    ) : <NotFoundPage />
    
    // return (
    //     <>
    //     <h1>Articles</h1>
    //     <h2>{article.title}</h2>
    //     {article.content.map((para,i)=>(<p key={i}>{para}</p>))}
    //     </>
    // )
}