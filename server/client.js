import { GreeterClient } from './proto/HelloworldServiceClientPb';
import { HelloRequest } from './proto/helloworld_pb';

var client = new GreeterClient('http://localhost:8080');

var request = new HelloRequest();
request.setName('World');

client.sayHello(request, {}, (err, response) => {
  console.log(response.getMessage());
});
