import { type FC, type ReactNode } from "react";

interface ResultSectionProps {
  currentPage?: number;
  nextPage?: string | null;
  prevPage?: string | null;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  children: ReactNode;
}

export const ResultSection: FC<ResultSectionProps> = ({
  currentPage,
  nextPage,
  prevPage,
  handleNextPage,
  handlePrevPage,
  children,
}) => {
  return (
    <section>
      <p>page: {currentPage}</p>
      <ol>{children}</ol>
      <button onClick={handlePrevPage} disabled={prevPage === null}>
        Previous
      </button>
      <button onClick={handleNextPage} disabled={nextPage === null}>
        Next
      </button>
    </section>
  );
};
