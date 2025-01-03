import { Id, toast } from "react-toastify";

const updateMessage = (
    toastPopup: Id,
    type: "info" | "success" | "warning" | "error" | "default",
    message: string,
) => {
    setTimeout(() => {
        toast.update(toastPopup, {
            type: type,
            render: message,
            isLoading: false,
            autoClose: 3000,
        });
    }, 200);
};

export default updateMessage;
