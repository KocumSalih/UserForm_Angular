import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class Test {
  constructor(private httpClient: HttpClient) { }

  production=false;

  saveUser(model: any) {
    return this.httpClient.post("http://localhost:9867/" + "test/SaveUser", model).pipe(
      map(function(response:any) {
        const user = response;
        if (user) {
          console.log("istek gönderildi.");
        }
      })
    );
  }
}