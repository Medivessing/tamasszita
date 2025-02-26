"use client";
import React from "react";
import styles from "./test.module.css";

const TestPage = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.pageX - rect.left;
    const y = e.pageY - rect.top;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  return (
    <div className={`flex flex-col items-center mt-40 `}>
      <div className={`${styles.container} flex flex-row  `}>
        <div className={styles.card} onMouseMove={handleMouseMove}>
          <p className={styles.content}>asd</p>
        </div>
        <div className={styles.card} onMouseMove={handleMouseMove}>
                    <p className={styles.content}>asd</p>

        </div>
        <div className={styles.card} onMouseMove={handleMouseMove}>
                    <p className={styles.content}>asd</p>

        </div>
      </div>
      <div className={`${styles.container} flex flex-row  `}>
        <div className={styles.card} onMouseMove={handleMouseMove}>
                    <p className={styles.content}>asd</p>

        </div>
        <div className={styles.card} onMouseMove={handleMouseMove}>
                    <p className={styles.content}>asd</p>

        </div>
        <div className={styles.card} onMouseMove={handleMouseMove}>
                    <p className={styles.content}>asd</p>

        </div>
      </div>
    </div>
  );
};

export default TestPage;
