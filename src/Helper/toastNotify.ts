import { toast,TypeOptions } from "react-toastify";

const toastNotify = (message : string, type:TypeOptions= 'success') => {
    toast(`${message}`, {
        type:type,
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}

export default toastNotify;