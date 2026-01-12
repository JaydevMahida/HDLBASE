"use strict";
try {
    console.log("Attempting to require pdf-parse...");
    const pdf = require('pdf-parse');
    console.log("Successfully required pdf-parse");
}
catch (error) {
    console.error("Error requiring pdf-parse:", error);
}
