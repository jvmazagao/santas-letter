import 'source-map-support/register';
import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';

import LetterService from '../service/letterService';
import { Letter } from '../models/Letter';


export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const service = new LetterService();
  const { id } = event.pathParameters;
  const letter: Partial<Letter> = { ...JSON.parse(event.body), id };
  const upadatedLetter = await service.updateLetter(letter);
  return {
    statusCode: 200,
    body: JSON.stringify(upadatedLetter),
  };
}