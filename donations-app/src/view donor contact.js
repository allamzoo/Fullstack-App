import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
function DonorContactDetailsBook({ contactDetails, theme }) {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    if (currentPage < contactDetails.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentContact = contactDetails[currentPage];

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
        <h3>{currentContact.name}</h3>
        <p>Email: {currentContact.email}</p>
        <p>Phone: {currentContact.phone}</p>
      </div>

      <button
        onClick={handleNextPage}
        className="book-nav"
        disabled={currentPage === contactDetails.length - 1}
        title="Next Page"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default DonorContactDetailsBook;
