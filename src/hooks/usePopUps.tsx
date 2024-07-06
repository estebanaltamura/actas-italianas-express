// ** SweetAlert2 import
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

interface PopUps {
  phoneNumberFormHelperPopUp: () => void;
  submitFormError: () => void;
}

const MySwal = withReactContent(Swal);

export const usePopUps = (): PopUps => {
  const phoneNumberFormHelperPopUp = (): void => {
    MySwal.fire({
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonText: 'ok',
      html: (
        <div>
          <h4>Formatos aceptados</h4>
          <span>Opción 1: 1131234561</span>
          <br />
          <span>Opción 2: (113)-123-4561</span>
          <br />
          <span>Opción 3: 113-123-4561</span>
          <br />
          <span>Opción 4: 1131234561</span>
          <br />
          <span>Opción 5: 02234561234</span>
          <br />
          <span>Opción 6: (0223)-456-1234</span>
          <br />
          <span>Opción 7: 0223-456-1234</span>
          <br />
          <br />
          <span>Se permite el uso de paréntesis y guiones</span>
        </div>
      ) as unknown as string, // Casting to string for SweetAlert2
    });
  };

  const submitFormError = (): void => {
    MySwal.fire('No pudimos procesar su orden. Intente nuevamente');
  };

  return {
    phoneNumberFormHelperPopUp,
    submitFormError,
  };
};
