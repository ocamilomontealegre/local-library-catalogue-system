// General method for validating properties against a schema
export const validateProperties = (schema, data) => {
  // Validate the provided data against the schema
  const result = schema.validate(data, { abortEarly: true });

  // If there are validation errors
  if (result.error) {
    // Return an object with error details
    return {
      message: result.error.message,  // Error message describing the validation failure
      errorCode: 1,                   // Error code indicating validation failure
      statusCode: 400                 // HTTP status code for Bad Request
    };
  } else {
    // If there are no validation errors, return a success object
    return { errorCode: 0 };          // Error code indicating successful validation
  }
};