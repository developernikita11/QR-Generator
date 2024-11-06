import React from 'react';
import './qrCode.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faShareNodes } from '@fortawesome/free-solid-svg-icons';

const QRCode = () => {
  return (
    <div className="container QR-Container p-4 mt-5">
      <h2>QR-Code Generator</h2>
      
      <div className="button-container mt-4 mb-3 mx-4">
        <span>Select:</span>
        <div className="select-container">
          <button type="button" className="btn btn-outline-success select-button">text</button>
          <button type="button" className="btn btn-outline-success select-button">url</button>
          <button type="button" className="btn btn-outline-success select-button">email</button>
          <button type="button" className="btn btn-outline-success select-button">contact no.</button>
          <button type="button" className="btn btn-outline-success select-button">vcard</button>
        </div>
      </div>

      <div className="mx-4 mb-3">
        <input type="text" className="input-field" placeholder="placeholder" />
      </div>

      <div className="mx-4 mb-4">
        <span className="me-2">Size:</span>
        <input type="number" className="size-input" />
        <span className="me-1">px</span>
      </div>

      <div className="text-center">
        <FontAwesomeIcon icon={faDownload} className="icon-button me-2" />
        <FontAwesomeIcon icon={faShareNodes} className="icon-button" />
        
        <button type="button" className="btn btn-danger mt-4">Generate QR</button>
      </div>
    </div>
  );
};

export default QRCode;
