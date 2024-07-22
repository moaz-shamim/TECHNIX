export const errorHandler = (error, request, response, next) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || "internal Server Error";
    return response.status(statusCode).json({
      success: false,
      message,
      statusCode,
    });
  };