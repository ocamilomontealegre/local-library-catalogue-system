// Importing necessary modules from SweetAlert2 library
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

// Defining the sendAlertMessage function
export const sendAlertMessage = (message) => {
  // Using withReactContent to customize the alert with React components
  withReactContent(Swal).fire({
    // Configuring the alert with the provided message
    title: message
  });  
};