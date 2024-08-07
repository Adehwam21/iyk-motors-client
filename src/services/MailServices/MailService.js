import emailjs from '@emailjs/browser';

const rentalServiceID = import.meta.env.VITE_RENTAL_MAIL_SERVICE_ID;
const rentalTemplateID = import.meta.env.VITE_RENTAL_MAIL_TEMPLATE_ID;

const testDriveServiceID = import.meta.env.VITE_TEST_DRIVE_MAIL_SERVICE_ID;
const testDriveTemplateID = import.meta.env.VITE_TEST_DRIVE_MAIL_TEMPLATE_ID;


const testContactFormServiceID = import.meta.env.VITE_TEST_CONTACT_FORM_MAIL_SERVICE_ID;
const testContactFormTemplateID = import.meta.env.VITE_TEST_CONTACT_FORM_MAIL_TEMPLATE_ID;


const userID = import.meta.env.VITE_USER_ID;
const contactUserID = import.meta.env.VITE_CONTACT_USER_ID;

const options = {
  publicKey: userID
}
const contactOptions = {
  publicKey: contactUserID
}

export const sendRentalEmail = async (formData) => {
  try {
    emailjs.init(options);
    const response = await emailjs.send(rentalServiceID, rentalTemplateID, formData);
    console.log('Email sent successfully:', response.status, response.text);
    return { code: response.status, message: 'Rental reservation request sent successfully. We will get back to you in less than 24 hours' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { code: 403, message: "Request failed. Try again" };
  }
};

export const sendTestDriveEmail = async (formData) => {
  try {
    emailjs.init(options);
    const response = await emailjs.send(testDriveServiceID, testDriveTemplateID, formData);
    console.log('Email sent successfully:', response.status, response.text);
    return { code: response.status, message: 'Tests drive request sent successfully. We will get back to you in less than 24 hours' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { code: 403, message: "Request failed. Try again" };
  }
};

export const sendContactForm = async (formData) => {
  try {
    emailjs.init(contactOptions);
    const response = await emailjs.send(testContactFormServiceID, testContactFormTemplateID, formData);
    console.log('Email sent successfully:', response.status, response.text);
    return { code: response.status, message: 'Message sent successfully. We will get back to you in less than 24 hours' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { code: 403, message: "Request failed. Try again" };
  }
};
