// Modal.js
import React from 'react';


const Modal = ({ isOpen, onClose, onSubmit, formData, onChange, modalTitle  }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{modalTitle}</h2>
        <div className="photobox">
            <p className='phototxt'>Add Image</p>

        </div>

        <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
          <input
            placeholder='Reward Name'
            type="text"
            name="name"
            value={formData.name}
            onChange={onChange}
          />
          <input
            placeholder='Price'
            type="text"
            name="category"
            value={formData.category}
            onChange={onChange}
          />
          <input
            placeholder='Quantity'
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={onChange}
          />
          <input
            placeholder='Price'
            type="number"
            step="0.01"
            name="price"
            value={formData.price}
            onChange={onChange}
          />
          <div className="form-actions">
          <button type="submit">Create</button>
          <button type="button" onClick={onClose}>Cancel</button>
          </div>
    
        </form>
      </div>
    </div>
  );
};

export default Modal;
