import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { handler } from './createLetter';

describe("Create letter unit tests", () => {
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
    const response = await handler({ body: JSON.stringify(request) } as unknown as APIGatewayProxyEvent, null, null) as APIGatewayProxyResult;
    expect(response.statusCode).toBe(201);
    expect(response.body).toBe(JSON.stringify(request));
  })
})