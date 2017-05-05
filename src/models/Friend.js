class Friend {
  // static is the syntax for a class method in ES6
  static all(){
    return $.ajax({
      url: "http://localhost:3000/api/v1/friends",
      method: "GET"
    })
  }

  static create(params){
    return $.ajax({
      url: "http://localhost:3000/api/v1/friends",
      method: "POST",
      data: params
    })
  }


}
