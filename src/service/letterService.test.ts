import LetterService from './letterService';
import LetterRepository from '../repository/letterRepository';

describe("Letter Service unit testing", () => {
  it("Should return Letter", async () => {
    const request = { name: "jono", content: "Test", address: "Rua AB" }
    const service = new LetterService();
    LetterRepository.prototype.createLetter = jest.fn().mockReturnValue({
      ...request,
      id: '1',
      createdAt: '30/08/1991'
    })
    const response = await service.createLetter(request.name, request.address, request.content);
    expect(response).toBeTruthy();
    expect(response.address).toBe(request.address);
    expect(response.name).toBe(request.name);
    expect(response.content).toBe(request.content);
    expect(response.createdAt).toBe('30/08/1991');
    expect(response.id).toBe('1');
  });

  it('Should return a list of letters', async () => {
    const service = new LetterService();
    const mockData = [{ name: "jono", content: "Test", address: "Rua AB", id: '1', createdAt: '30/08/1992' },
    { name: "maria", content: "Test maria", address: "Rua AC", id: '2', createdAt: '30/08/1993' }];
    LetterRepository.prototype.getAllLetters = jest.fn().mockResolvedValue(mockData);
    const response = await service.getAllLetters();
    expect(response).toBeTruthy();
    expect(response[0]).toBe(mockData[0]);
    expect(response[1]).toBe(mockData[1]);
  })
})