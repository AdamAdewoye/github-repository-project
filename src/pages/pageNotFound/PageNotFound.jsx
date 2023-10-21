import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <main className={styles.container}>
      <div className={styles.title}>
        <h1>Error 404</h1>
        <h1>Page not found</h1>
      </div>

      <p>
        Sorry it seemed like this page does not exist please click here to go
        back <Link to="/">Home.</Link>
      </p>
    </main>
  );
};

export default PageNotFound;

