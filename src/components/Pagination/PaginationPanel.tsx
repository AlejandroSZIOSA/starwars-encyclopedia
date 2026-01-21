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
    <div className={styles.PaginationPanelRootContainer}>
      <button onClick={onPrev} disabled={page === 1}>
        Prev
      </button>
      <div>Page {page}</div>
      <button onClick={onNext} disabled={!nextPageUrl}>
        Next
      </button>
    </div>
  );
};
