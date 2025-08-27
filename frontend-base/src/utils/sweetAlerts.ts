import Swal from "sweetalert2";
type AlertType = "success" | "error";

export function showAlert(type: AlertType, title: string, text?: string) {
  Swal.fire({
    icon: type,
    title: title,
    text: text || "",
    confirmButtonColor: type === "success" ? "#3085d6" : "#d33",
    timer: 2000,
    timerProgressBar: true,
  });
}
