import * as AWS from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { Letter } from '../models/Letter';

export default class TodoRepository {
  constructor(
    private readonly client: DocumentClient = createDynamoDBClient(),
    private readonly letterTable = process.env.LETTERS_TABLE
  ) { }

  async createLetter(letter: Letter): Promise<Letter> {
    await this.client.put({
      TableName: this.letterTable,
      Item: letter,
    }).promise()
    return letter;
  }

  async getAllLetters(): Promise<Array<Letter>> {
    const result = await this.client.scan({
      TableName: this.letterTable
    }).promise()

    return result.Items as Letter[];
  }
}

function createDynamoDBClient() {
  if (process.env.IS_OFFLINE) {
    return new AWS.DynamoDB.DocumentClient({
      region: 'localhost',
      endpoint: 'http://localhost:8000'
    })
  }

  return new AWS.DynamoDB.DocumentClient()
}