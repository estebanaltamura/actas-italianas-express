import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const usePopUps = ()=>{

  const MySwal = withReactContent(Swal);

  const phoneNumberFormHelperPopUp = ()=>{
    MySwal.fire({
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonText: "ok",
      html: (
        <div>
          <h4>Formatos aceptados</h4>

          <span>Opcion 1: 1131234561</span>
          <br />
          <span>Opcion 2: (113)-123-4561</span>
          <br />
          <span>Opcion 3: 113-123-4561</span>
          <br />
          <span>Opcion 3: 1131234561</span>
          <br />
          <span>Opcion 4: 02234561234</span>
          <br />
          <span>Opcion 5: (0223)-456-1234</span>
          <br />
          <span>Opcion 6: 0223-456-1234</span>
          <br />
          <br />
          <span>Se permite el uso de parentesis y guiones</span>
        </div>
      ),
    });
  }

  const submitFormError = ()=> MySwal.fire("No pudimos procesar su orden. Intente nuevamente")

  return({
    phoneNumberFormHelperPopUp,
    submitFormError
  })
}