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
})