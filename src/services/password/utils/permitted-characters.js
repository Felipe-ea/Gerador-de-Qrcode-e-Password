async function permitterCharacters() {
    let permitted = [];

    if ( process.env.UPPERCASE_LETTERS === "true" ) {
        permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    } 

    if ( process.env.LOWERCASE_LETTERS === "true" ) {
        permitted.push(..."abcdefghijklmnopqrstuvwxyz")
    }

    if ( process.env.NUMBERS === "true" ) {
        permitted.push(..."0123456789")
    }

    if ( process.env.SPECIAL_CHACTERES === "true" ) {
        permitted.push(..."!@#$%*()_+=[{]};:.<,>/?|~^°_")
    }

    return permitted;

}

export default permitterCharacters;

