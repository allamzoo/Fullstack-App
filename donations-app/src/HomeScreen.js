import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import './HomeScreen.css';
import DonationPopup from './DonationPopup';

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [clothesFilters, setClothesFilters] = useState({ age: '', gender: '', season: '' });
  const [schoolSuppliesFilters, setSchoolSuppliesFilters] = useState({ type: '' });
  const [toyFilters, setToyFilters] = useState({ age: '', gender: '', toyCategory: '' });
  const [foodFilters, setFoodFilters] = useState({ type: '' });
  const [medicalSuppliesFilters, setMedicalSuppliesFilters] = useState({ type: '' });
  const [bloodFilters, setBloodFilters] = useState({ hospital: '', governorate: '', area: '' });
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonsRendered, setButtonsRendered] = useState(false);
  const [donationItemsState, setDonationItemsState] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const availableTimeSlots = ['Morning', 'Afternoon', 'Evening']; // Define available time slots
  const transportationOptions = ['Truck', 'Car', 'Motorcycle']; // Define transportation options

  

  useEffect(() => {
    setButtonsRendered(true);
    setDonationItemsState(donationItems);
  }, []);

  const handleCategorySelection = (category) => {
    setSelectedCategory(category.toLowerCase());
    setSearchQuery('');
    setSelectedItem(null);
    if (category === 'Clothes') {
      setClothesFilters({ age: '', gender: '', season: '' });
    } else if (category === 'School Supplies') {
      setSchoolSuppliesFilters({ type: '' });
    } else if (category === 'Toys') {
      setToyFilters({ age: '', gender: '', toyCategory: '' });
    } else if (category === 'Food') {
      setFoodFilters({ type: '' });
    } else if (category === 'Medical Supplies') {
      setMedicalSuppliesFilters({ type: '' });
    } else if (category === 'Blood Donations') {
      setBloodFilters({ hospital: '', governorate: '', area: '' });
    }
  };
  const handleDonationButtonClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
    if (category === 'School Supplies') {
      setSchoolSuppliesFilters({ type: '' });
    } else if (category === 'Toys') {
      setToyFilters({ age: '', gender: '', toyCategory: '' });
    } else if (category === 'Food') {
      setFoodFilters({ type: '' });
    } else if (category === 'Medical Supplies') {
      setMedicalSuppliesFilters({ type: '' });
    } else if (category === 'Blood Donations') {
      setBloodFilters({ hospital: '', governorate: '', area: '' });
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setSelectedCategory(null);
    setSelectedItem(null);
  };
  

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleFilterChange = (category, filterType, value) => {
    switch (category) {
      case 'Clothes':
        setClothesFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
        break;
      case 'School Supplies':
        setSchoolSuppliesFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
        break;
      case 'Toys':
        setToyFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
        break;
      case 'Food':
        setFoodFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
        break;
      case 'Medical Supplies':
        setMedicalSuppliesFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
        break;
      case 'Blood Donations':
        setBloodFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
        break;
      default:
        break;
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleQuantitySelection = (itemId, quantity) => {
    setDonationItemsState((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantitySelected: quantity };
        }
        return item;
      });
    });
  };

  const handleDonation = () => {
    console.log('Donating item:', selectedItem);
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const donationItems = [
    { id: 1, name: 'Winter Jacket', category: 'Clothes', age: 'Adult', gender: 'Unisex', season: 'Winter', description: 'Warm winter jacket for adults', quantity: 10, quantitySelected: 0 },
    
    { id: 2, name: 'LEGO Set', category: 'Toys', toyCategory: 'Building Blocks', description: 'LEGO set for children aged 6-12', quantity: 5, quantitySelected: 0 },
    { id: 3, name: 'Canned Soup', category: 'Food', description: 'Canned soup for emergency food aid', quantity: 20, quantitySelected: 0 },
    { id: 4, name: 'Math Workbook', category: 'School Supplies', type: 'Books', description: 'Math workbook for primary school students', quantity: 15, quantitySelected: 0 },
    { id: 5, name: 'Drawing Pencils', category: 'School Supplies', type: 'Stationary', description: 'Set of drawing pencils for art classes', quantity: 30, quantitySelected: 0 },
    { id: 6, name: 'Board Game', category: 'Toys', age: 'Child', gender: 'Unisex', toyCategory: 'Board Games', description: 'Classic board game for children', quantity: 8, quantitySelected: 0 },
    { id: 7, name: 'Stethoscope', category: 'Medical Supplies', type: 'Medical Devices', description: 'Stethoscope for medical examinations', quantity: 10, quantitySelected: 0 },
    { id: 8, name: 'X-ray Machine', category: 'Medical Supplies', type: 'Medical Equipment', description: 'X-ray machine for diagnostic imaging', quantity: 5, quantitySelected: 0 },
    { id: 9, name: 'Pain Reliever', category: 'Medical Supplies', type: 'Medication', description: 'Pain reliever medication for various conditions', quantity: 30, quantitySelected: 0 },
    // Blood donation items
    { id: 10, name: 'O- Blood Type', category: 'Blood Donations', hospital: 'Hospital A', governorate: 'Governorate X', area: 'Area Y', description: 'Blood type O- urgently needed', quantity: 5, quantitySelected: 0 },
    { id: 11, name: 'A+ Blood Type', category: 'Blood Donations', hospital: 'Hospital B', governorate: 'Governorate Y', area: 'Area Z', description: 'Blood type A+ urgently needed', quantity: 7, quantitySelected: 0 },
    { id: 12, name: 'Summer Jacket', category: 'Clothes', age: 'Child', gender: 'Male', season: 'Summer', description: 'Thin summer jacket for adults', quantity: 15, quantitySelected: 0 },
  ];

 const filteredItems = donationItemsState.filter((item) => {
  const searchMatch = !searchQuery || item.name.toLowerCase().includes(searchQuery);
  const categoryMatch = !selectedCategory || item.category.toLowerCase() === selectedCategory.toLowerCase();
  const clothesFilterMatch = categoryMatch && (
    (!clothesFilters.age || item.age === clothesFilters.age) &&
    (!clothesFilters.gender || item.gender === clothesFilters.gender) &&
    (!clothesFilters.season || item.season === clothesFilters.season)
  );
  const schoolSuppliesFilterMatch = categoryMatch && (
    (!schoolSuppliesFilters.type || item.type === schoolSuppliesFilters.type)
  );
  const toyFilterMatch = categoryMatch && (
    (!toyFilters.age || item.age === toyFilters.age) &&
    (!toyFilters.gender || item.gender === toyFilters.gender) &&
    (!toyFilters.toyCategory || item.toyCategory === toyFilters.toyCategory)
  );
  const foodFilterMatch = categoryMatch && (
    (!foodFilters.type || item.type === foodFilters.type)
  );
  const medicalSuppliesFilterMatch = categoryMatch && (
    (!medicalSuppliesFilters.type || item.type === medicalSuppliesFilters.type)
  );
  const bloodFilterMatch = categoryMatch && (
    (!bloodFilters.hospital || item.hospital.toLowerCase().includes(bloodFilters.hospital.toLowerCase())) &&
    (!bloodFilters.governorate || item.governorate.toLowerCase().includes(bloodFilters.governorate.toLowerCase())) &&
    (!bloodFilters.area || item.area.toLowerCase().includes(bloodFilters.area.toLowerCase()))
  );
  return searchMatch && (
    (selectedCategory === 'Clothes' && clothesFilterMatch) ||
    (selectedCategory === 'School Supplies' && schoolSuppliesFilterMatch) ||
    (selectedCategory === 'Toys' && toyFilterMatch) ||
    (selectedCategory === 'Food' && foodFilterMatch) ||
    (selectedCategory === 'Medical Supplies' && medicalSuppliesFilterMatch) ||
    (selectedCategory === 'Blood Donations' && bloodFilterMatch)
  );
});


  return (
    
    <div className={isDarkTheme ? 'home-container dark-theme' : 'home-container'}>
      <div className="top-bar">
        <img src={logo} alt="Logo" className="logo" />
        <label className="theme-switch" htmlFor="theme-switch">
          <input
            type="checkbox"
            id="theme-switch"
            checked={isDarkTheme}
            onChange={toggleTheme}
          />
          <div className="slider round"></div>
        </label>
        {/* Added buttons */}
        
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by category..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="categories">
        <h2>Categories</h2>
        <div className="category-buttons">
          {buttonsRendered &&
            ['Clothes', 'Toys', 'Food', 'Medical Supplies', 'School Supplies', 'Blood Donations'].map((category, index) => (
              <button
                key={index}
                className={selectedCategory === category ? 'selected' : ''}
                onClick={() => handleButtonClick(category)}
              >
                {category === 'Clothes' && '👕 Clothes'}
                {category === 'Toys' && '🧸 Toys'}
                {category === 'Food' && '🍲 Food'}
                {category === 'Medical Supplies' && '⚕️ Medical Supplies'}
                {category === 'School Supplies' && '📚 School Supplies'}
                {category === 'Blood Donations' && '💉 Blood Donations'}
              </button>
            ))}
        </div>
      </div>
      {(selectedCategory === 'Clothes' || selectedCategory === 'School Supplies' || selectedCategory === 'Toys' || selectedCategory === 'Food' || selectedCategory === 'Medical Supplies' || selectedCategory === 'Blood Donations') && (
        <div className="filters">
          <h2>{selectedCategory === 'Clothes' ? 'Clothes Filters' : selectedCategory === 'School Supplies' ? 'School Supplies Filters' : selectedCategory === 'Toys' ? 'Toy Filters' : selectedCategory === 'Food' ? 'Food Filters' : selectedCategory === 'Medical Supplies' ? 'Medical Supplies Filters' : 'Blood Filters'}</h2>
          <div className="filter-options">
            {selectedCategory === 'Clothes' && (
              <>
                <label>
                  Age:
                  <select value={clothesFilters.age} onChange={(e) => handleFilterChange('Clothes', 'age', e.target.value)}>
                    <option value="">Any</option>
                    <option value="Adult">Adult</option>
                    <option value="Child">Child</option>
                  </select>
                </label>
                <label>
                  Gender:
                  <select value={clothesFilters.gender} onChange={(e) => handleFilterChange('Clothes', 'gender', e.target.value)}>
                    <option value="">Any</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unisex">Unisex</option>
                  </select>
                </label>
                <label>
                  Season:
                  <select value={clothesFilters.season} onChange={(e) => handleFilterChange('Clothes', 'season', e.target.value)}>
                    <option value="">Any</option>
                    <option value="Summer">Summer</option>
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                    <option value="Fall">Fall</option>
                  </select>
                </label>
              </>
            )}
            {isPopupOpen && (
        <DonationPopup
          onClose={closePopup}
          availableTimeSlots={availableTimeSlots} // Pass available time slots as props
          transportationOptions={transportationOptions} // Pass transportation options as props
        />
      )}
            {selectedCategory === 'School Supplies' && (
              <label>
                Type:
                <select value={schoolSuppliesFilters.type} onChange={(e) => handleFilterChange('School Supplies', 'type', e.target.value)}>
                  <option value="">Any</option>
                  <option value="Books">Books</option>
                  <option value="Stationary">Stationary</option>
                </select>
              </label>
            )}
            {selectedCategory === 'Toys' && (
              <>
                <label>
                  Age:
                  <select value={toyFilters.age} onChange={(e) => handleFilterChange('Toys', 'age', e.target.value)}>
                    <option value="">Any</option>
                    <option value="Child">Child</option>
                  </select>
                </label>
                <label>
                  Gender:
                  <select value={toyFilters.gender} onChange={(e) => handleFilterChange('Toys', 'gender', e.target.value)}>
                    <option value="">Any</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unisex">Unisex</option>
                  </select>
                </label>
                <label>
                  Category:
                  <select value={toyFilters.toyCategory} onChange={(e) => handleFilterChange('Toys', 'toyCategory', e.target.value)}>
                    <option value="">Any</option>
                    <option value="Board Games">Board Games</option>
                    <option value="Stuffed Toys">Stuffed Toys</option>
                    <option value="Dolls">Dolls</option>
                    <option value="Sports">Sports</option>
                    <option value="Cars">Cars</option>
                    <option value="Outdoor">Outdoor</option>
                    <option value="Building Blocks">Building Blocks</option>
                  </select>
                </label>
              </>
            )}
            {selectedCategory === 'Food' && (
              <label>
                Type:
                <select value={foodFilters.type} onChange={(e) => handleFilterChange('Food', 'type', e.target.value)}>
                  <option value="">Any</option>
                  <option value="Fruits and Vegetables">Fruits and Vegetables</option>
                  <option value="Canned Foods">Canned Foods</option>
                  <option value="Fresh Meals">Fresh Meals</option>
                  <option value="Baked Goods">Baked Goods</option>
                </select>
              </label>
            )}
            {selectedCategory === 'Medical Supplies' && (
              <label>
                Type:
                <select value={medicalSuppliesFilters.type} onChange={(e) => handleFilterChange('Medical Supplies', 'type', e.target.value)}>
                  <option value="">Any</option>
                  <option value="Medical Devices">Medical Devices</option>
                  <option value="Medical Equipment">Medical Equipment</option>
                  <option value="Medication">Medication</option>
                </select>
              </label>
            )}
            {selectedCategory === 'Blood Donations' && (
              <>
                <label>
                  Hospital:
                  <input type="text" value={bloodFilters.hospital} onChange={(e) => handleFilterChange('Blood Donations', 'hospital', e.target.value)} />
                </label>
                <label>
                  Governorate:
                  <input type="text" value={bloodFilters.governorate} onChange={(e) => handleFilterChange('Blood Donations', 'governorate', e.target.value)} />
                </label>
                <label>
                  Area:
                  <input type="text" value={bloodFilters.area} onChange={(e) => handleFilterChange('Blood Donations', 'area', e.target.value)} />
                </label>
              </>
            )}
          </div>
        </div>
      )}
      {(selectedCategory || searchQuery) && (
        <div className="requested-items">
          <h2>Requested Donation Items</h2>
          <ul>
            {filteredItems.map(item => (
              <li key={item.id} className={selectedItem && selectedItem.id === item.id ? 'selected' : ''}>
                {(item.category === 'Clothes' || item.category === 'School Supplies' || item.category === 'Toys' || item.category === 'Food' || item.category === 'Medical Supplies' || item.category === 'Blood Donations') && (
                  <select value={item.quantitySelected} onChange={(e) => handleQuantitySelection(item.id, parseInt(e.target.value))}>
                    {[...Array(item.quantity + 1).keys()].map(qty => (
                      <option key={qty} value={qty}>{qty}</option>
                    ))}
                  </select>
                )}
                <span className="popup-trigger" onClick={() => handleItemClick(item)}>👁️</span>
                <button className="confirm-button" onClick={handleDonationButtonClick}>Donate</button>
                
                <div>
                  <h3>{item.name}</h3>
                  <p><strong>Category:</strong> {item.category}</p>
                  {item.hospital && <p><strong>Hospital:</strong> {item.hospital}</p>}
                  {item.governorate && <p><strong>Governorate:</strong> {item.governorate}</p>}
                  {item.area && <p><strong>Area:</strong> {item.area}</p>}
                  <p><strong>Quantity Requested:</strong> {item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {isModalOpen && selectedItem && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedItem.name}</h2>
            <p><strong>Category:</strong> {selectedItem.category}</p>
            {selectedItem.age && <p><strong>Age:</strong> {selectedItem.age}</p>}
            {selectedItem.gender && <p><strong>Gender:</strong> {selectedItem.gender}</p>}
            {selectedItem.season && <p><strong>Season:</strong> {selectedItem.season}</p>}
            {selectedItem.material && <p><strong>Material:</strong> {selectedItem.material}</p>}
            {selectedItem.hospital && <p><strong>Hospital:</strong> {selectedItem.hospital}</p>}
            {selectedItem.governorate && <p><strong>Governorate:</strong> {selectedItem.governorate}</p>}
            {selectedItem.area && <p><strong>Area:</strong> {selectedItem.area}</p>}
            <p><strong>Description:</strong> {selectedItem.description}</p>
            <p><strong>Quantity Requested:</strong> {selectedItem.quantity}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
