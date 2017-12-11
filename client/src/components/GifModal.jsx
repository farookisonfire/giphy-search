import React from 'react';
import { Modal, Button, Icon } from 'semantic-ui-react';

const GifModal = (props) => {
  const {
    open = false,
    gifUrl,
    handleModalClose,
    handleSlideshowNext,
    handleSlideshowPrevious
  } = props;

  return (
    <Modal 
      open={open}
      onClose={handleModalClose}
      closeIcon>
      <Modal.Content>
         <Button
            style={{
              position: 'absolute',
              left: 24,
              top: '50%',
              transform: 'translateY(-50%)'
            }}
            circular
            icon='chevron left'
            onClick={handleSlideshowPrevious} />
         <Button
            style={{
              position: 'absolute',
              right: 24,
              top: '50%',
              transform: 'translateY(-50%)'
            }}
            circular
            icon='chevron right'
            onClick={handleSlideshowNext} />
        <iframe
          style={{
            position: 'relative',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
          src={gifUrl} />
      </Modal.Content>
    </Modal>
  );
};

export default GifModal;
