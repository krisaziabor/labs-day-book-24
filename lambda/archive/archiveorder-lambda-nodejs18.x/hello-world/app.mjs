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

export const lambdaHandler = async (event) => {
  const query = "UPDATE preorders SET fulfilled = true WHERE id = $1";

  try {
    // parse ID from event body
    const body = JSON.parse(event.body);
    const id = body.id;

    // validate input – ensure it is a number
    if (isNaN(id)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "ID must be a number.",
        }),
      };
    }

    const result = await pool.query(query, id);

    if (result.rowCount === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          message: `No order found with ID ${id}.`,
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Order wih id ${id} successfully marked as fulfilled.`,
      }),
    };
  } catch (error) {
    console.log("Error executing query", error);
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
