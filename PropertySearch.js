 import React, { useState } from 'react';
 import Select from 'react-select';

 const PropertySearch = () => {
  // List of properties for dropdown
  const propertyOptions = [
    { value: 'america', label: 'America' },
   { value: 'india', label: 'India' },
     { value: 'thailand', label: 'Thailand' },
     { value: 'canada', label: 'Canada' },
     { value: 'dubai', label: 'Dubai' },
   ];

   const [selectedProperty, setSelectedProperty] = useState(null);
   const handlePropertyChange = (selectedOption) => {
     setSelectedProperty(selectedOption);
   };

   return (
     <div className="property-search-container">
       <h1>Find The Place</h1>
      
       <Select
         options={propertyOptions}
         value={selectedProperty}
         onChange={handlePropertyChange}
         isSearchable={true}
         placeholder="Select a Place name"
         className="property-dropdown"
       />

       {/* Show the selected property below */}
       {selectedProperty && (
         <div className="selected-property">
           <h2>I selected: {selectedProperty.label}</h2>
         </div>
      )}
     </div>
     
   );
 };

export default PropertySearch;
