import React from 'react'

import styles from "./Banner.module.css"

const Banner = ({buttonText, handleBtnClick}) => {
  return (
     <div>
        <h1>
           <span className={styles.title1}>
           Coffee 
           </span>
           <span className={styles.title2}>
            Connoisseur
           </span>
        </h1>
        <p className={styles.subTitle}>Descover local coffee shops</p>
        <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={handleBtnClick}>
           {buttonText}
        </button>
        </div>
    </div>
  )
}

export default Banner