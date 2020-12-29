import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";
import LetterService from '../service/letterService';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const { name, content, address } = JSON.parse(event.body);
  const service = new LetterService();
  const letter = await service.createLetter(name, address, content);
  return {
    statusCode: 201,
    body: JSON.stringify(letter),
  };
}