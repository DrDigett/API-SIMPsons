import "./Pagination.css";

interface Props {
  currentPage: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  hasNext,
  hasPrev,
  onPageChange,
}: Props) => {
  return (
    <nav className="pagination">
      <button
        disabled={!hasPrev}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ◀
      </button>

      <span>
        Página {currentPage} de {totalPages}
      </span>

      <button
        disabled={!hasNext}
        onClick={() => onPageChange(currentPage + 1)}
      >
        ▶
      </button>
    </nav>
  );
};
