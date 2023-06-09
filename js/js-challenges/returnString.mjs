// Note: This file is saved as .mjs in order to use the ES6 module export declaration. This was the solution I found after Googling the bash terminal error that export couldn't be found.

// Looking at the js-challenges repo directory, there does seem to be a babel config file there and after a fair bit of Googling I have determined that it's much more work than just naming my file .mjs.

const firstName = "Bob";
const lastName = "Inger";

export const fullName = () => {
    return `${firstName} ${lastName}`;
};

console.log(fullName());