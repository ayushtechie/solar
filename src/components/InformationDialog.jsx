import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import WhyUs1 from '../images/whyUsDecision-making_2620308.png'
import WhyUs2 from '../images/whyUsMaintenance_769198.png'
import WhyUs3 from '../images/whyUsSolar-panels_4114997.png'
import WhyUs4 from '../images/whyUsThumbs-up_6043309.png'
import WhyUs5 from '../images/whyUsTracking_13386211.png'
import WhyUs6 from '../images/whyUsWarranty_950264.png'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
    <div className='help mx-auto max-w-screen-4xl p-0 lg:pl-6 sticky right-0 z-50'>
      <div className='relative mx-auto flex items-center justify-between text-blue-gray-900' style={{flexDirection: 'column'}}>
      <h2>Why buy from SolarShopSolutions?</h2>
      <ul>
        <li>Experts Advice</li>
        <li>Installation Service</li>
        <li>Best Offers and Verfied Contractors</li>
        <li>Warranty Claim</li>
        <li>Maintenance Warranty</li>
        <li>Keep Track Of Energy</li>
      </ul>
      <Button variant="outlined" className="information-dialog-button" color="success" onClick={handleClickOpen}>
        Know More
      </Button>
      </div>
      {/* <img src={SolarShop} alt="Logo" width={80} height={80} /> */}
      {/* <img src={WhyUs1}  width={70} height={70}/>
      <img src={WhyUs2}  width={70} height={70}/>
      <img src={WhyUs3}  width={70} height={70}/>
      <img src={WhyUs4}  width={70} height={70}/>
      <img src={WhyUs5}  width={70} height={70}/>
      <img src={WhyUs6}  width={70} height={70}/> */}
      <BootstrapDialog
      className='bootStrappedDialog'
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div
        className='bootStrappedDialog-Child'>
        {/* <DialogTitle variant='h6'  sx={{ m: 0, p: 2 }} className="information-dialog-title" id="customized-dialog-title">
        WHAT ARE BENEFITS OF BUYING FROM SOLAR SHOP SOLUTIONS?
        </DialogTitle> */}
        <div className="information-dialog-title" id="customized-dialog-title">
        WHAT ARE BENEFITS OF BUYING FROM SOLAR SHOP SOLUTIONS?
        </div>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.error,
          }}
        >
          <CloseIcon />
        </IconButton>
        {/* <DialogContent dividers> */}
        < div className='list-container'>
          <ul>
          {/* <Typography gutterBottom> */}
            {/* Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros. */}
            
             {/* <Typography gutterBottom> */}
             <li>
              <div  className='whyUsIcon'>
                <img src={WhyUs1} alt="" />
              </div>
              <div className='whyUsTextContainer'>
                <h3><strong>Experts Advice</strong></h3>
                <p>Unbiased advice from experts for all Solar Products and Equipments.</p>
              </div>
             </li>
            
             
             <li>
              <div className='whyUsIcon'>
                <img src={WhyUs3} alt="" />
              </div>
              <div className='whyUsTextContainer'>
                <h3><strong>Installation Service</strong></h3>
                <p>Installation Service available Pan India.</p>
              </div>
             </li>
            
             <li>
              <div className='whyUsIcon'>
                <img src={WhyUs4} alt="" />
              </div>
              <div className='whyUsTextContainer'>
                <h3><strong>Best Offers and Verfied Contractors</strong></h3>
                <p>Get the best offers for your project from several verified EPC contractors from your region.</p>
              </div>
             </li>
            
             <li>
              <div className='whyUsIcon'>
                <img src={WhyUs6} alt="" />
              </div>
              <div className='whyUsTextContainer'>
                <h3><strong>Warranty Claim</strong></h3>
                <p>Claim your warranty directly from solar shop solutions without going to individual brand.</p>
              </div>
             </li>
            
             
             <li>
              <div className='whyUsIcon'>
                <img src={WhyUs2} alt="" />
              </div>
              <div className='whyUsTextContainer'>
                <h3><strong>Maintenance Warranty</strong></h3>
                <p>Get the additional maintenance warranty for 5 years from solar shop solutions.</p>
              </div>
             </li>
       
             <li>
              <div className='whyUsIcon'>
                <img src={WhyUs5} alt="" />
              </div>
              <div className='whyUsTextContainer'>
                <h3><strong>Keep Track Of Energy</strong></h3>
                <p>You can keep a track of your energy anywhere from the globe.</p>
              </div>
             </li>
            {/* </Typography> */}
                 
          {/* </Typography> */}
          {/* <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography> */}
        {/* </DialogContent> */}
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions> */}
        </ul>
        </div>
        </div>
      </BootstrapDialog>
      </div>
    </React.Fragment>
  );
}