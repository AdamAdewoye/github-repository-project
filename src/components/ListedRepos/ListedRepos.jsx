import styles from "./ListedRepos.module.css";
import CardRepo from "../CardRepo/CardRepo";
import useFetch from "../../useFetch/useFetch";
import { Pagination } from "@mui/material";
import { useState } from "react";
import Loader from "../loader/loader";

const ListedRepo = () => {
  const { data, isLoading, error } = useFetch("https://api.github.com/user/repos");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsToDisplay = data.slice(startIndex, endIndex);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  
  if (isLoading) return <Loader />;
  if (error) return <h1>something went wrong</h1>;
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Repository List</h2>
      <div className={styles.cardWrapper}>
        {itemsToDisplay?.map((data) => (
          <CardRepo key={data.id} data={data} />
        ))}
      </div>
      <div className={styles.paginationBox}>
        <Pagination
          page={currentPage}
          count={Math.ceil(data.length / itemsPerPage)}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </section>
  );
};

export default ListedRepo;
