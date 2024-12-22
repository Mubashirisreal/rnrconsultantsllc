import emailjs from '@emailjs/browser';

export const sendEmail = async (formData: any) => {
  try {
    const response = await emailjs.send(
      'service_k3gf0jc', // Replace with your EmailJS service ID
      'template_t1vsbg8', // Replace with your EmailJS template ID
      formData,
      'slO0_D96dBm1DXJhK' // Replace with your EmailJS public key
    );
    return response;
  } catch (error) {
    throw error;
  }
};
