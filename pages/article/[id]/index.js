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

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export default Article;