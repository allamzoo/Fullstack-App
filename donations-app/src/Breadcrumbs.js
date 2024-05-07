import React from 'react';
import './Breadcrumbs.css'; // Styles for breadcrumbs

function Breadcrumbs({ activeView }) {
  const getBreadcrumbText = () => {
    switch (activeView) {
      case 'fulfilled-donations':
        return 'Fulfilled Donation Post';
      case 'donor-details':
        return 'Donor Details';
      case 'donor-contact-details':
        return 'Donor Contact Details';
      default:
        return 'Home'; // Default breadcrumb
    }
  };

  return (
    <div className="breadcrumbs">
      <span>{getBreadcrumbText()}</span> {/* Breadcrumb text */}
    </div>
  );
}

export default Breadcrumbs;
