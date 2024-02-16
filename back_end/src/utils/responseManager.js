// Importing the logInfo function from the logger.js file
import { logInfo } from "./logger.js";

// Defining a function named response with parameters res, service, and message
export const response = (res, service, message) => {
  // Logging information using logInfo function
  // `${service.name}`: logging service name
  // `${service.type}`: logging service type
  // `statusCode: ${service.statusCode}`: logging service statusCode
  // `JSON.stringify(message)`: logging message as a JSON string
  logInfo(`${service.name} |`, `${service.type} |`, `statusCode: ${service.statusCode} |`, JSON.stringify(message));
  
  // Sending the HTTP response with status code and message
  return res.status(service.statusCode).send(message);
};