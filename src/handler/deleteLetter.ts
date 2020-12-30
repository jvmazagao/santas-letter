import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';

import LetterService from '../service/letterService';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const service = new LetterService();
  const { id } = event.pathParameters;
  await service.deleteLetterById(id);
  return {
    statusCode: 204,
    body: ''
  }
}

