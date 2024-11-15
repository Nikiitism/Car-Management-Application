import React, { useState } from 'react';

function Cars({ item, onDelete }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleViewClick = () => setIsModalVisible(true);
  const handleCloseModal = () => setIsModalVisible(false);
  const images = item.images || [];

  const handleNextImage = () => setCurrentImageIndex((i) => (i + 1) % images.length);
  const handlePrevImage = () => setCurrentImageIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  return (
    <div className="col">

      <div className="card shadow-sm" style={{ height: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {images[0] && <img src={images[0]} alt={item.title} className="card-img-top" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />}
        <div className="card-body" style={{ flex: '1' }}>
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text" style={{ height: '60px', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button className="btn btn-sm btn-outline-secondary" onClick={handleViewClick}>View</button>
              <button className="btn btn-sm btn-outline-secondary" onClick={onDelete}>Delete</button>
            </div>
          </div>
        </div>
      </div>

      {isModalVisible && (
        <div className="modal fade show" tabIndex="-1" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <div className="modal-dialog" style={{ maxWidth: '80%', maxHeight: '100%', overflowY: 'auto' }}>
            <div className="modal-content" style={{ backgroundColor: 'teal', color: 'white' }}>
                
              <div className="modal-header">
                <h5 className="modal-title" style={{ textAlign: 'center', width: '100%' }}>{item.title}</h5>
                <button className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
              </div>

              <div className="modal-body">
                {images.length > 0 && (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <button onClick={handlePrevImage} style={{ position: 'absolute', left: '10px', background: 'none', border: 'none', color: 'white', fontSize: '24px', cursor: 'pointer' }}>&#8249;</button>
                    <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} style={{ maxWidth: '90%', maxHeight: '400px', objectFit: 'contain' }} />
                    <button onClick={handleNextImage} style={{ position: 'absolute', right: '10px', background: 'none', border: 'none', color: 'white', fontSize: '24px', cursor: 'pointer' }}>&#8250;</button>
                  </div>
                )}
              </div>

              <div className="modal-body mt-3"><center>{item.description}</center></div>
              <div className="modal-body" style={{ textAlign: 'center' }}>
               {item.tags && item.tags.map((tag, index) => (<span key={tag || index} style={{ margin: '0 8px' }}>#{tag}</span>))}
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cars;













