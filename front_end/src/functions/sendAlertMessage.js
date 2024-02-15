import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const sendAlertMessage = (message) => {
  withReactContent(Swal).fire({
    title: message
  });  
};
