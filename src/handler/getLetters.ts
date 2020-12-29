import { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";
import LetterService from '../service/letterService';

export const handler: APIGatewayProxyHandler = async (): Promise<APIGatewayProxyResult> => {
  const service = new LetterService();
  const letters = await service.getAllLetters();
  return {
    statusCode: 200,
    body: JSON.stringify(letters),
  };
}