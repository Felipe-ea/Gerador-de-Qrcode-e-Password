import prompt from "prompt"
import mainPrompt from "./prompt/prompt-main.js"
import createQrCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main() {
    
    prompt.get(mainPrompt, async (err, choice) => {
        if ( choice.select == 1 ) await createQrCode();
        if ( choice.select == 2 ) await createPassword();
    })

}

main()