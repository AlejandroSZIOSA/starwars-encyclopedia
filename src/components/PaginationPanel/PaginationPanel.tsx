import { type FC } from "react";

import styles from "./PaginationPanel.module.css";

type Props = {
  page: number;
  nextPageUrl: null | string;
  onNext: () => void;
  onPrev: () => void;
};

export const PaginationPanel: FC<Props> = ({
  page,
  nextPageUrl,
  onNext,
  onPrev,
}) => {
  return (
    <>
      <button
        className={styles.paginationPanelbutton}
        onClick={onPrev}
        disabled={page === 1}
      >
        Prev
      </button>
      <p className={styles.paginationPanelText}>Page {page}</p>
      <button
        className={styles.paginationPanelbutton}
        onClick={onNext}
        disabled={!nextPageUrl}
      >
        Next
      </button>
    </>
  );
};
