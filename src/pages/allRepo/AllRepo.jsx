import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import ListedRepo from "../../components/ListedRepos/ListedRepos";
import styles from "./allrepo.module.css";


const AllRepo = () => {
  return (
    <ErrorBoundary>
    <div className={styles.container}>
     <header className={styles.heading}>
        <h1>
            Welcome to Repository List Project
        </h1>
        <p>
            This is my AltSchool Africa Second Semester Exam for the FrontEnd Engineering Track.
            in a bid to test our skil set and proficiency in Reactjs, Fro.ntend Design principles and responsive web design
        </p>
     </header>
     <ListedRepo />
    </div>
    </ErrorBoundary>
  )
}

export default AllRepo
