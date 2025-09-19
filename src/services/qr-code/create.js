import prompt from "prompt";
import promptQrCode from "../../prompt/prompt-qrcode.js";
import handle from "./haldle.js";

async function createQrCode() {
    prompt.get(promptQrCode, handle);

    prompt.start();
}

export default createQrCode;