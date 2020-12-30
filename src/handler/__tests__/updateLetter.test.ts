import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { handler } from '../updateLetter';
import LetterService from '../../service/letterService';

describe("Handler unit test - upadteLetter", () => {
  it('expect that handler to be defined', () => {
    expect(handler).toBeTruthy();
  });

  it('should return updated letter', async () => {
    const serviceResponse = { name: "Jono", address: "Rua AC", content: "Test", id: '1', createdAt: '30/08/1990' }
    LetterService.prototype.updateLetter = jest.fn().mockResolvedValue(serviceResponse);
    const response = await handler({ body: JSON.stringify({ address: 'Rua AC' }), pathParameters: JSON.stringify({ id: '1' }) } as unknown as APIGatewayProxyEvent, null, null) as APIGatewayProxyResult;
    expect(LetterService.prototype.updateLetter).toHaveBeenCalled();
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe(JSON.stringify({ ...serviceResponse }))
  })
})
