import {inject} from '@loopback/core';
import {
  Request,
  RestBindings,
  get,
  response,
  ResponseObject, post, requestBody, getModelSchemaRef,
} from '@loopback/rest';
import {repository} from "@loopback/repository";
import {UsersRepository} from "../repositories";

/**
 * OpenAPI response for ping()
 */
const PING_RESPONSE: ResponseObject = {
  description: 'Ping Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'PingResponse',
        properties: {
          greeting: {type: 'string'},
          date: {type: 'string'},
          url: {type: 'string'},
          headers: {
            type: 'object',
            properties: {
              'Content-Type': {type: 'string'},
            },
            additionalProperties: true,
          },
        },
      },
    },
  },
};

/**
 * A simple controller to bounce back http requests
 */
export class PingController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request,
              @repository(UsersRepository)
  public usersRepo : UsersRepository) {}

  // Map to `GET /ping`
  // @authenticate('jwt')
  @get('/ping')
  @response(200, PING_RESPONSE)
  ping(): object {

    // Reply with a greeting, the current time, the url, and request headers
    return {
      greeting: 'Hello from LoopBack',
      date: new Date(),
      url: this.req.url,
      headers: Object.assign({}, this.req.headers),
    };
  }

  // @get('/users')
  // @response(200, PING_RESPONSE)
  // pinssg() {
  //   return this.usersRepo.find();
  // }
  // @post('/users')
  // @response(200, PING_RESPONSE)
  // createUser(
  //     @requestBody({
  //       content: {
  //         'application/json':{
  //           schema: getModelSchemaRef(Users)
  //         }
  //       }
  //     }) newUser : Users
  // ) {
  //   return this.usersRepo.create(newUser);
  // }
}
