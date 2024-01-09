import React, { useRef } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Input,
  Textarea,
  PhoneArrowDownLeftIcon,
} from "@material-tailwind/react";

import emailjs from '@emailjs/browser';
 
export function DrawerWithForm() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    alert('form submited');
    emailjs.sendForm('service_ajx1p66', 'template_v6x15s7', form.current, '8OpAGolTLeBkMK5Um')
      .then((result) => {
          console.log(result.text);
          alert('Form submitted successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Error submitting the form. Please try again.');
      });
  };
 
  return (
    <React.Fragment>
      <Button onClick={openDrawer}>Design</Button>
     <Drawer open={open} onClose={closeDrawer}>
        <div className="flex items-center justify-between px-4 pb-2">
          <Typography variant="h5" color="blue-gray">
            Contact Us
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="mb-1 px-4">
          <Typography variant="small" color="gray" className="font-normal ">
            Write the message and then click button.
          </Typography>
        </div>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-4">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input type="Name" label="Name" name="name" />
          <Input type="email" label="Email" name="email" />
          <Input type="phone" label="Phone number" name="phone" />
          <Input type="text" label="Pin Code" name="pincode" />
          <Input label="Subject" name="subject" />
          <Textarea rows={2} label="Message" name="message" />
          <input type="submit" value="Send" />
          {/* <Button>Send Message</Button> */}
        </form>
      </Drawer>
    </React.Fragment>
  );
}