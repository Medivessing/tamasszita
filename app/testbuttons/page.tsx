"use client";
import React, { useEffect } from "react";
import styles from "./testbuttons.module.css";

const TestButtons = () => {
  useEffect(() => {
    const handleOnMouseMove = (e: MouseEvent) => {
      const cards = document.getElementsByClassName(styles.card);
      for (const card of cards) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      }
    };

    document
      .getElementById(styles.cards)
      ?.addEventListener("mousemove", handleOnMouseMove);

    return () => {
      document
        .getElementById(styles.cards)
        ?.removeEventListener("mousemove", handleOnMouseMove);
    };
  }, []);

  return (
    <>
      <div id={styles.cards}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.cardImage}>
              <i className="fa-duotone fa-apartment"></i>
            </div>
            <div className={styles.cardInfoWrapper}>
              <div className={styles.cardInfo}>
                <i className="fa-duotone fa-apartment"></i>
                <div className={styles.cardInfoTitle}>
                  <h3>Apartments</h3>
                  <h4>Places to be apart. Wait, what?</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.cardImage}>
            <i className="fa-duotone fa-apartment"></i>
          </div>
          <div className={styles.cardInfoWrapper}>
            <div className={styles.cardInfo}>
              <i className="fa-duotone fa-apartment"></i>
              <div className={styles.cardInfoTitle}>
                <h3>Apartments</h3>
                <h4>Places to be apart. Wait, what?</h4>
              </div>
            </div>
          </div>
        </div>
        {/* Repeat for other cards... */}
      </div>

      <a
        id={styles.sourceLink}
        className={styles.link}
        href="https://linear.app/features"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-solid fa-link"></i>
        <span className={styles.robotoMono}>Source</span>
      </a>

      <a
        id={styles.youtubeLink}
        className={styles.link}
        href="https://youtu.be/htGfnF1zN4g"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-youtube"></i>
        <span>5 min Tutorial</span>
      </a>
    </>
  );
};

export default TestButtons;
