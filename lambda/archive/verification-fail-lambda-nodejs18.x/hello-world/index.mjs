/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

export const handler = async (event) => {
  // query to update orders listed in given array of IDs as fulfilled
  const query = `UPDATE preorders SET verified = false WHERE id = $1`;

  try {
    // Parse ID from the event body
    const id = JSON.parse(event.id); // Assuming `id` is provided in the event body

    // Validate input – ensure it is a number
    const parsedId = parseInt(id, 10);
    if (isNaN(parsedId)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "ID must be a valid number.",
        }),
      };
    }

    const result = await pool.query(query, [parsedId]);

    if (result.rowCount === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          message: `No order found with the provided ID.`,
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Order with ID ${parsedId} successfully marked as not verified and requiring user action.`,
      }),
    };
  } catch (error) {
    console.error("Error executing query:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
    };
  }
};
