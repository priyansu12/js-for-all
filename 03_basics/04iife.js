// Immediately invoked function expression - IIFE

//Used for starting the connection between the files and the database after immediately starting the file

(function chai() {
    //named iife
    console.log("DB connected");
})(); //for iife its mandatory and is a good practice to use the semi colon in order to invoke the fucntions present in it

//due to the global scope issue, we need to use ()() paranthesis else it might throw errors

( (name) => {
    //un-named iife
    console.log(`DB connected ${name}`);
} )("Priyansu");
