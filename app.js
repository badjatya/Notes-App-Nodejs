const command = process.argv[2];

if (command.toLowerCase() === "add") {
    console.log("Note added...");
} else if (command.toLowerCase() === "remove") {
    console.log("Note removed...");
}