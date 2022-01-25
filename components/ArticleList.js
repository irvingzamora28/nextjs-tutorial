import ArticleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem';

const ArticleList = ({articles}) => {
    return (
        <div className={ArticleStyles.grid}>
            {articles.map(article => { 
				return <ArticleItem article={article} />
			})}
        </div>
    );
}

export default ArticleList;