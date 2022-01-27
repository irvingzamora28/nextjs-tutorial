import ArticleList from '../components/ArticleList';
import { server } from '../config';

export default function Home({articles}) {
	console.log(articles);
	return (
		<div>
			<main>
				Hello World
				<br />
                <p className="text-cyan-700 text-2xl">Irving Zamora</p>
			</main>
			<ArticleList articles={articles} />
		</div>
	);
}


export const getStaticProps = async () => {
	const res = await fetch(`${server}/api/articles`)
	const articles = await res.json()

	return {
		props: {articles}
	}
}