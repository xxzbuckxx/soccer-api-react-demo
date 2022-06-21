import ReactHtmlParser from 'react-html-parser'

type repoType = {
  id: number,
  title: string,
  embed: string
}

type listProps = {
  repos: Array<repoType>
}

const List = (props: listProps) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Available Public Repositories</h2>
      {repos.map((repo) => {
        return (
          <li key={repo.id} className='list'>
            <span className='repo-text'>{repo.title} </span>
            <div>{ ReactHtmlParser(repo.embed) }</div> 
          </li>
        );
      })}
    </ul>
  );
};

export default List;