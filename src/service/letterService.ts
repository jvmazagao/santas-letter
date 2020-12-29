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
}