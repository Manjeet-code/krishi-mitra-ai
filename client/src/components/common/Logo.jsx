import React from 'react';
import { FaLeaf } from 'react-icons/fa';
import './Logo.css';

export default function Logo({ className = '' }) {
  return (
    <div className={`unified-logo-icon ${className}`}>
      <FaLeaf />
    </div>
  );
}
