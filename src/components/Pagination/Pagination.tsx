import { type FC } from "react";

type Props = {
  page: number;
  nextPageUrl: null | string;
  onNext: () => void;
  onPrev: () => void;
};

export const Pagination: FC<Props> = ({
  page,
  nextPageUrl,
  onNext,
  onPrev,
}) => {
  return (
    <div>
      <button onClick={onPrev} disabled={page === 1}>
        Prev
      </button>
      <span>Page {page}</span>
      <button onClick={onNext} disabled={!nextPageUrl}>
        Next
      </button>
    </div>
  );
};
