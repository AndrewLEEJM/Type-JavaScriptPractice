/* 
-빌더 패턴-
체이닝 형태를 유지하여 확장성 있는 객체를 만들 수 있다.
*/

/* 
Before

class Request {
  url;
  data;
  method;

  constructor(url, data, method){
    this.url = url;
    this.data = data;
    this.method = method;
  }
}

const request = new Request('http://localhost', {}, method); 
*/

class Request {
  constructor(){
    this.url = '';
    this.data = null;
    this.method = '';
  }
}

class RequestBuilder {
  constructor() {
    this.request = new Request();
  }

  forUrl(url){
    this.request.url = url
    return this;
  }
  
  useMethod(method){
    this.request.method = method;
    return this;
  }

  setData(data){
    this.request.data = data;
    return this;
  }

  build(){
    console.log(this.request);
    return this.request;
  }
}

let getRequest = new RequestBuilder()
  .forUrl('https://blog.naver.com/')
  .useMethod('GET')
  .build();

let postRequest = new RequestBuilder()
.forUrl('https://blog.naver.com/')
.useMethod('POST')
.setData({id:'hi', password: 1234})
.build();

/* ★ 속성을 설정하는 메소드는 반디시 this를 반환하여 체이닝이 가능하도록 해야 함 */