import { Component, OnInit } from '@angular/core';
import { ClassDataService } from '../list/class-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class',
  templateUrl: './class.page.html',
  styleUrls: ['./class.page.scss'],
})
export class ClassPage implements OnInit {
  selectedClass: any;
  students = [
    'Mayank Pratap',
    'Omendra',
    'Anand Kumar',
    'Nayab',
    ];
  constructor(private classService: ClassDataService, private router: Router) { }
  back() {
    this.router.navigate(['/list']);
  }
  ngOnInit() {
    this.selectedClass = this.classService.getData();
  }

}
