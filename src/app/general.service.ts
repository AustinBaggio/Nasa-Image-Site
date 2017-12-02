import { Injectable } from '@angular/core';

@Injectable()
export class GeneralService {
  

  constructor() { }
  userIn

  sanatization(text){
    return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/\'/g, '&#39;'); // '&apos;' is not valid HTML 4
  }

  emailFormat(text){
      var atpos = text.indexOf('@');

      var dotpos = text.lastIndexOf(".");
      if (atpos<1 || dotpos<atpos+2 || dotpos+2>=text.length) {
          alert("Not a valid e-mail address");
          return (false);
      }
      return (true);
  }
  
}
