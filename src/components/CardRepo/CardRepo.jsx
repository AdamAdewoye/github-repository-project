/* eslint-disable react/prop-types */
import styles from "./CardRepo.module.css";
// import OpenInNewIcon from "@mui/icons-material/OpenInNew";
// import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
// import DoDisturb from "@mui/icons-material/DoDisturb";
// import { data } from "../../dummy";

const CardRepo = ({ data }) => {
  return (
    <Link to={`/adamadewoye/${data?.name}`} className={styles.wrapper}>
          <span className={styles.language}>{data.language}</span>
        <h4 className={styles.repoName}>{data?.name} repo</h4>
    </Link>
  );
};

export default CardRepo;
