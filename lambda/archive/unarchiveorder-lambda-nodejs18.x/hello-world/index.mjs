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
  const query = `UPDATE preorders SET fulfilled = false WHERE id = ANY($1::int[])`;

  try {
    // parse IDs from event body
    const body = JSON.parse(event.body);
    const ids = body.ids;

    // validate input – ensure it is an array of numbers
    if (!Array.isArray(ids) || ids.some(isNaN)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "IDs must be an array of numbers.",
        }),
      };
    }

    const result = await pool.query(query, [ids]);

    if (result.rowCount === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          message: `No orders found with the provided IDs.`,
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Orders with ids ${ids.join(
          ", "
        )} successfully marked as unfulfilled.`,
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
