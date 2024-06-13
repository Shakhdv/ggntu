import React from 'react';
import styles from './Pagination.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <button onClick={handlePrevious} disabled={currentPage === 1}>
      <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
      </button>
      <span>
        Cтраница {currentPage} из {totalPages}
      </span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
      <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Pagination;
