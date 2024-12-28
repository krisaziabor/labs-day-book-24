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

import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    },
});

export async function lambdaHandler(event) {
    const query = 'SELECT * FROM preorders';

    try {
        const result = await pool.query(query);
        return {
            'statusCode': 200,
            'body': JSON.stringify(result.rows),
        };
    } catch (error) {
        console.log('Error executing query', error);
        return {
            'statusCode': 500,
            'body': JSON.stringify(error),
        };
    }
}

// export const lambdaHandler = async (event, context) => {
//     try {
//         return {
//             'statusCode': 200,
//             'body': JSON.stringify({
//                 message: 'hello world this is my first locally developed lambda.',
//             })
//         }
//     } catch (err) {
//         console.log(err);
//         return err;
//     }
// };
