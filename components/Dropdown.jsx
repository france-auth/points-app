import React, { useState } from "react";

const ranks = ["GOLD", "BRONZE", "SILVER", "PLATINUM", "DIAMOND"];

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRank, setSelectedRank] = useState("GOLD");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (rank) => {
    setSelectedRank(rank);
    setIsOpen(false); // Close the dropdown after selection
  };

  // Filter out the selected rank from the dropdown list
  const filteredRanks = ranks.filter((rank) => rank !== selectedRank);

  return (
    <div className="flex items-center w-full rounded-xl relative">
      <div className="w-full flex justify-between items-center p-4 border border-[#004A50] bg-[#C4DACC] rounded-xl"
      onClick={toggleDropdown}>
        {/* Left side with "TOP 100 USERS" and the arrow */}
      <div
        className="flex items-center cursor-pointer space-x-3"
      >
          <svg
            className={`w-4 h-4 transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
          </svg>
          <span>TOP 100 USERS</span>
      </div>

      {/* Right side with the selected rank */}
        <div className="flex items-center">
          <span className="font-semibold">{selectedRank}</span>
        </div>
      </div>

      {/* Dropdown container that grows and changes background */}
      <div
        className={`absolute w-full top-0 left-0 right-0 mt-0 border border-[#004A50] bg-[#E2F8EA] rounded-xl shadow-lg transition duration-300 ${
          isOpen ? "max-h-max opacity-100" : "max-h-0 p-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="w-full flex justify-between items-center p-4 pb-0"
      onClick={toggleDropdown}>
        {/* Left side with "TOP 100 USERS" and the arrow */}
      <div
        className="flex items-center cursor-pointer space-x-3"
      >
          <svg
            className={`w-4 h-4 transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
          </svg>
          <span>TOP 100 USERS</span>
      </div>

      {/* Right side with the selected rank */}
        <div className="flex items-center">
          <span className="flex font-bold">{selectedRank}</span>
        </div>
      </div>
        {/* Dropdown items, excluding the selected item */}
        {filteredRanks.map((rank, id) => (
          <div
            key={id}
            className="flex justify-end py-2 px-4 hover:bg-[#C4DACC] mt-1 cursor-pointe"
            onClick={() => handleSelect(rank)}
          >
            {rank}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomDropdown;






/* import React, { useState } from "react";

const items = ["GOLD", "BRONZE", "SILVER", "PLATINUM", "DIAMOND"];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]); // Default to "GOLD"

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Handle item selection
  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setIsOpen(false); // Close dropdown after selecting an item
  };

  return (
    <div className="relative inline-block w-full rounded-xl border border-[#004A50] bg-[#C4DACC]">
      
      <button
        onClick={toggleDropdown}
        className="flex justify-between items-center w-full p-4 rounded-xl bg-[#C4DACC] shadow-lg focus:outline-none"
      >
        
        <div className="flex items-center space-x-3">
          
          <svg
            className={`w-4 h-4 transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
          </svg>
          
          <span className="">TOP 100 MINERS</span>
        </div>

        
        <span className="text-sm font-semibold">{selectedItem}</span>
      </button>

      
      {isOpen && (
        <ul className="absolute z-50 w-full items-center justify-center mt-1 list-none bg-[#E2F8EA] border border-[#004A50] rounded-xl shadow-lg font-semibold">
          {items.map((item) => (
            <li
              key={item}
              className="p-4 flex text-sm hover:bg-gray-100 rounded-xl cursor-pointer justify-end"
              onClick={() => handleSelectItem(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
 */