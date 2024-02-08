import { Link } from 'react-router-dom';
import style from './not-found-page.module.css';

const NotFoundPage = () => {
  return (
    <div className={style.notFoundDiv}>
      <p className={style.src}>🛠</p>
      <h1 className={style.text}>Sorry, this page not found</h1>
      <Link className={style.link} to="/">
        Go home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
