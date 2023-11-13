var connection = new Postmonger.Session();

connection.trigger("ready")

connection.on("initActivity", () => {
})

connection.on("clickedNext", () => {
    var configuration;
    connection.trigger('updateActivity', configuration)
})