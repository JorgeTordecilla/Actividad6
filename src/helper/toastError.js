import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  color: "#decba4 ",
  background: "#3e5151",
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const toastError = (nombre, estatura, peso) => {
  if (nombre.length < 4) {
    Toast.fire({
      icon: "error",
      title: "El nombre debe tener almenos 4 caracteres",
    });
    return true;
  }
  if (estatura <= 100 || estatura >= 250) {
    Toast.fire({
      icon: "error",
      title: "Campo Estatura fuera de rango",
    });
    return true;
  }
  if (peso <= 45 || peso >= 200) {
    Toast.fire({
      icon: "error",
      title: "Campo Peso fuera de rango",
    });
    return true;
  }
  return false;
};
