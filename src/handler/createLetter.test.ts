import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { handler } from './createLetter';
import LetterService from '../service/letterService';


describe("Create letter unit tests", () => {
  const OLD_ENV = process.env;
  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV }
  })

  afterAll(() => {
    process.env = OLD_ENV;
  })
  it('Expect that handler exists', () => {
    expect(handler).toBeTruthy();
  })
  // it("Should answer 201 and return object created", async () => {
  //   const response = await handler({ body: JSON.stringify({}) } as unknown as APIGatewayProxyEvent, null, null) as APIGatewayProxyResult;
  //   expect(response.statusCode).toBe(201);
  //   expect(response.body).toBe("{}")
  // });
  it("Should answer 201 and return created object", async () => {
    const request = { name: "Jono", address: "Rua AB", content: "Test" }
    LetterService.prototype.createLetter = jest.fn().mockResolvedValue({ ...request, id: '1', createdAt: '30/01/1002' });
    const response = await handler({ body: JSON.stringify(request) } as unknown as APIGatewayProxyEvent, null, null) as APIGatewayProxyResult;
    expect(response.statusCode).toBe(201);
    expect(response.body).toBe(JSON.stringify({ ...request, id: '1', createdAt: '30/01/1002' }));
  });
})