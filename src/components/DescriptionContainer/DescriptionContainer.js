import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/Button";
import classes from "./DescriptionContainer.module.css";

const DescriptionContainer = () => (
  <div className={classes.DescriptionContainer}>
    <div className={classes.DescriptionContainerLeft}>
      <h1 className={classes.AboutMeTitle}>WHO AM I ?</h1>
      <p className={classes.AboutMeText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unch</p>
    </div>
    <div className={classes.DescriptionContainerRight}>
      <div className={classes.DescriptionContainerRightUpper}>
        <div className={classes.DescriptionContainerRightUpper2}>
          <FontAwesomeIcon icon={faFileDownload} className={classes.FileIcon} size="6x" />
          <a className={classes.Redirect} href="../../files/List-Motywacyjny.pdf" download target="_blank">
            <Button variant="contained" color="secondary">DOWNLOAD MY COVER LETTER</Button>
          </a>
        </div>
        <div className={classes.DescriptionContainerRightUpper3}>
          <FontAwesomeIcon icon={faFileDownload} className={classes.FileIcon} size="6x" />
          <a className={classes.Redirect} href="../../files/CV-Daniel%20Gola-Junior-React-Developer.pdf" download target="_blank">
            <Button variant="contained" color="secondary">DOWNLOAD MY CURRICULUM VITAE</Button>
          </a>
        </div>
      </div>
      <div className={classes.DescriptionContainerRightBottom}>
        <p className={classes.FileDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unch</p>
      </div>
    </div>
  </div>
);

export default DescriptionContainer;
