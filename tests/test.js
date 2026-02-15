const request = require('supertest');
const app = require('../source/app'); 

describe('Task API Endpoints', () => {

  it('GET /tasks -> should return 200 OK and an array', async () => {
    const response = await request(app).get('/tasks');
    expect(response.statusCode).toEqual(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  it('POST /tasks -> should create a new task and return 201 Created', async () => {
    const newTask = {
      title: "Write tests",
      completed: false
    };
    const response = await request(app).post('/tasks').send(newTask);
    expect(response.statusCode).toEqual(201);
    expect(response.body.title).toEqual("Write tests");
    expect(response.body.id).toBeDefined();
  });

  it('POST /tasks -> should return 400 Bad Request if title is missing', async () => {
    const invalidTask = { 
      completed: true 
    };

    const response = await request(app).post('/tasks').send(invalidTask);
    expect(response.statusCode).toEqual(400);
  });

});