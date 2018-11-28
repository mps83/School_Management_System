import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassDataService {
 classData: any = '';
  constructor() { }

setData(selectedClass: any) {
  this.classData = selectedClass;
}
getData() {
  return this.classData;
}
}
