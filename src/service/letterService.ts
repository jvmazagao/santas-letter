import * as uuid from 'uuid';
import LetterRepository from '../repository/letterRepository';
import { Letter } from '../models/Letter';

export default class LetterService {

  repository: LetterRepository;
  constructor(letterRepository: LetterRepository = new LetterRepository()) {
    this.repository = letterRepository;
  };

  async createLetter(name: string, address: string, content: string): Promise<Letter> {
    const id = uuid.v4();

    return await this.repository.createLetter({
      id,
      name,
      content,
      address,
      createdAt: new Date().toISOString(),
    })
  }

  async getAllLetters(): Promise<Letter[]> {
    return await this.repository.getAllLetters();
  }

  async deleteLetterById(id: string) {
    return await this.repository.deleteLetterById(id)
  }

  async updateLetter(request: Partial<Letter>): Promise<Letter> {
    return await this.repository.updateLetter(request);
  }
}