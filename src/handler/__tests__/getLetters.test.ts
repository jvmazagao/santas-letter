
import { handler } from '../getLetters'; import LetterService from '../../service/letterService';

describe("Get letters handler unit testing", () => {
  it('Expect that handler exists', () => {
    expect(handler).toBeTruthy();
  });
  it('Should answer 200 and return objects', async () => {
    const mockData = [
      { name: "jono", content: "Test", address: "Rua AB", id: '1', createdAt: '30/08/1992' },
      { name: "maria", content: "Test maria", address: "Rua AC", id: '2', createdAt: '30/08/1993' }
    ];
    LetterService.prototype.getAllLetters = jest.fn().mockResolvedValue(mockData);
    const service = new LetterService();
    const response = await service.getAllLetters();
    expect(response).toBeTruthy();
    expect(response[0]).toBe(mockData[0]);
    expect(response[1]).toBe(mockData[1]);
  })
})