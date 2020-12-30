import { handler } from '../deleteLetter';
import LetterService from '../../service/letterService';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

describe("Handler unit test - upadteLetter", () => {
  it('expect that handler to be defined', () => {
    expect(handler).toBeTruthy();
  });

  it('should delete letter', async () => {
    LetterService.prototype.deleteLetterById = jest.fn().mockResolvedValue({});
    const response = await handler({ pathParameters: JSON.stringify({ id: '1' }) } as unknown as APIGatewayProxyEvent, null, null) as APIGatewayProxyResult;
    expect(LetterService.prototype.deleteLetterById).toHaveBeenCalled();
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe('')
  })
})