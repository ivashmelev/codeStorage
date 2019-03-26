// "use strict"

class handlerForm
{
  constructor(identificator = "*", action, method){
    this.identificator = identificator;
    this.action = action;
    this.method = method;
  }

  getElement(identificator){
    // Возвращает элемент формы
    let defineAttribute = () => {
      // Определяет поиск объекта по классу или идентификатору

      let deleteFirstSymbol = (identificator) =>{
        // Возвращает название определителя без первого симовла (. или #)
        identificator = identificator.split("");
        identificator.splice(0, 1);
        identificator = identificator.join("");
        return identificator;
      }

      if(this.identificator[0] == "#"){

        let attributeName = deleteFirstSymbol(this.identificator);

        let element = document.getElementById(attributeName);

        return element;
      }
      else if(this.identificator[0] == "."){

        let element = document.querySelectorAll(this.identificator);

        return element;
      }
      else if(this.identificator[0] == "*" || this.identificator == ""){

        let element = document.querySelectorAll("form");

        return element;
      }
    }
    
    return defineAttribute(this.identificator);
  }

  sendForm(getElement){

    let sendRequest = (method, url, data) => {
      let request = new XMLHttpRequest();
      request.open(method, url, true);
    }

    let validateForm = (e) => {
      e.preventDefault();
      let data = [];
      
      let input = e.srcElement;
      console.log(input[0].name);

      for (let i=0; i<input.length-1; i++){
        if(input[i].value == ""){
          // Call func alert
        }
        else{
          let a = input[i].name;
          let b = input[i].value;
          data.push(new Object({name:a, value: b}));
        }
      }

      console.log(data);

      return data;
    }

    for (let i=0; i<getElement.length; i++){
      getElement[i].addEventListener("submit", validateForm);
    }

    return validateForm;

  }

  hand(){
    this.sendForm(this.getElement(this.identificator));
  }
}

window.onload = () => {
  let form = new handlerForm("*", "action", "post");
  form.hand();
}


class test
{
  constructor(test){
    this.test = test;
  }

  doTest(test){
    delete test[0];
    return test;
  }
}

test = new test("test");