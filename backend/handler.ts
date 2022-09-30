import { APIGatewayEvent } from 'aws-lambda';

export async function hello (event: APIGatewayEvent) {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};
