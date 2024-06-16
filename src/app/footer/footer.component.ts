import { Component } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  users:any
  constructor(private userdata: UserdataService){
      console.warn("userdata", userdata.users)
      this.users=userdata.users();
}
}