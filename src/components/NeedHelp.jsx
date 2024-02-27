import React, { useState } from 'react';
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";

export default function HelpButton (){
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openHelpModal = () => {
    setIsModalOpen(true);
  };

  const closeHelpModal = () => {
    setIsModalOpen(false);
  };

  return (
    // <div className='fixed z-50'>
    // <Button onClick={openDrawer}>Design</Button>
    <div className="help-container">
      {/* Help Button */}
      <button id="help-button" className="helpButton" onClick={openHelpModal}>Need Help?</button>
      {/* <Button id="help-button" className="helpButton" onClick={openHelpModal}>Need Help</Button> */}
      {/* Help Modal */}
      {isModalOpen && (
        <div id="help-modal" className="helpModal">
          {/* Your help content goes here */}
          <p>This is where you provide helpful information or support.</p>
          <button onClick={closeHelpModal}>Close</button>
        </div>
      )}
    </div>
    // </div>
  );
};
