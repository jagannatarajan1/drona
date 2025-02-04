"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./dropdown.module.css";
import { MdArrowDropDown } from "react-icons/md";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("select profile");

  const data = [
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 3" },
    { id: 4, name: "Option 4" },
  ];

  const handleSelect = (option) => {
    setSelectedOption(option.name);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownContainer}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.dropdownButton}
      >
        <Image src="/pic.png" alt="Dropdown Icon" width={30} height={30} />
        <span>{selectedOption}</span>
        <MdArrowDropDown />
      </button>

      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {data.map((ele) => (
            <li
              key={ele.id}
              className={styles.dropdownItem}
              onClick={() => handleSelect(ele)}
            >
              {ele.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
