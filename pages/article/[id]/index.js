import Link from "next/link";

const Article = ({article}) => {
    console.log("article");
    console.log(article);
    return (
        <>
            <h1 className="h1 text-3xl mb-8">{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href='/'>Go Back</Link>
        </>
    );
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

    const articles = await res.json()
    const ids = articles.map(article => article.id)
    const paths = ids.map((id) => { return {params: {id: id.toString()}}})
    console.log("paths");
    console.log(paths);
    return {
        paths,
        // paths: [
        //     {params: {id: '1'}},
          
        // ],
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export default Article;