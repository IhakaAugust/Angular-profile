import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Variables for detail
  Name: string = 'Joe Blogs';
  Email: string = 'JoeBlogs@gmail.com';
  Phone: string = '022 2039848';
  Position: string = 'Public Relations';
  Supervisor: string = 'Micael Miller';
  Website: string = 'www.jbworks.com';
  Department: string = 'Public relations';
  Branch: string = 'Hamilton';
  Country: string = 'New Zealand';
  Applications: string = 'something';
  Langauges: string = 'English';

  // variable to toggle editing
  editing: boolean = true;

  // Form group and control for editing the details
  form = new FormGroup({
    Name: new FormControl(this.Name),
    Email: new FormControl(this.Email),
    Phone: new FormControl(this.Phone),
    Position: new FormControl(this.Position),
    Supervisor: new FormControl(this.Supervisor),
    Website: new FormControl(this.Website),
    Department: new FormControl(this.Department),
    Branch: new FormControl(this.Branch),
    Country: new FormControl(this.Country),
    Applications: new FormControl(this.Applications),
    Langauges: new FormControl(this.Langauges),
  })

  // Toggle function to show editing form
  toggleEdit(){
    this.editing = !this.editing;
  }

  ngOnInit(){
  }

}
