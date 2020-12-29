import { handler } from '../../src/handler/createLetter';

describe("Create letter unit tests", () => {
  it("Should answer 201 and return object created", () => {
    const event = jest.fn().mockImplementation(() => ({
      body: {
        name: "Joao",
        addres: "Rua AB",
        content: "Description a"
      }
    }));
    const response = handler(event);
    expect(handler).toHaveBeenCalledWith(event);
  })
})