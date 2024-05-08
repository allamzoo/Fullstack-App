import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function DonorDetailsBook({ details, theme }) {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    if (currentPage < details.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentDetail = details[currentPage];

  return (
    <div className={`book-container ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <button
        onClick={handlePreviousPage}
        className="book-nav"
        disabled={currentPage === 0}
        title="Previous Page"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <div className="book-content"> {/* Consistent white box for content */}
        <h3>{currentDetail.name}</h3>
        <p>profession: {currentDetail.profession}</p>
        <p>Address: {currentDetail.address}</p>
      </div>

      <button
        onClick={handleNextPage}
        className="book-nav"
        disabled={currentPage === details.length - 1}
        title="Next Page"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default DonorDetailsBook;
