const newman = require("newman");
const moment = require("moment");

let now = moment().format("DD-MM-YYYY_hh-mm-ss");

let testname = `report-${now}.html`;

newman.run({
    collection: require("./postman-script.postman_collection.json"),
    environment: require("./postman-script.postman_environment.json"),
    reporters: ["cli", "htmlextra"],
    reporter: {
        htmlextra: {
            export: `./newman/${testname}`
        }
    }
});

newman.run({
    collection: require("./postman-script.postman_collection.json"),
    environment: require("./postman-script.postman_environment.json"),
    reporters: ["cli", "htmlextra"],
    reporter: {
        htmlextra: {
            export: `./newman/${testname}`
        }
    }
});

newman.run({
    collection: require("./postman-script.postman_collection.json"),
    environment: require("./postman-script.postman_environment.json"),
    reporters: ["cli", "htmlextra"],
    reporter: {
        htmlextra: {
            export: `./newman/${testname}`
        }
    }
});
