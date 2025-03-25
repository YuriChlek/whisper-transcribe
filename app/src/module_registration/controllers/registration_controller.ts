import { Router, Request, Response } from "express";
import { set_storage_registration_data } from "@/module_registration/storage/registration_storage";
import { WhisperRegistrationData } from "@/module_registration/types/registration_types";

const registrationController = Router();

registrationController.post(
    "/whisper_registration",
    async (req: Request, res: Response): Promise<void> => {
        set_storage_registration_data(req.body as WhisperRegistrationData);
        res.status(200).json({ message: "Model registered successfully!" });
    }
)

export default registrationController;
