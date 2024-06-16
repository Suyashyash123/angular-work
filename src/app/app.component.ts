import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { UserdataService } from './services/userdata.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,FooterComponent,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Creating Service';
  users:any
  constructor(private userdata: UserdataService){
      console.warn("userdata", userdata.users)
      this.users=userdata.users();
  }



}
  // tableList:any ;
  //   tableNumber1=2;
  //   tableNumber2=2;
  //   result:any;

  //   Addition(){
  //     this.result= this.tableNumber1+this.tableNumber2;
  //   }
  //   Subtraction(){
  //     this.result= this.tableNumber1-this.tableNumber2;
  //   }
  //   Multiply(){
  //     this.result= this.tableNumber1*this.tableNumber2;
  //   }
  //   Division(){
  //     this.result= this.tableNumber1/this.tableNumber2;
  //   }
  // }

  // new project crud opreation
//   person:any = { 
//   };

//   SubmitData(){
//     localStorage.setItem("person",JSON.stringify(this.person));
//   }

//   getData(){
//     this.tableList= localStorage.getItem("person");
//      this.tableList = JSON.parse(this.tableList)
//     var data= localStorage.getItem("person");
//     console.log(data);
//   }

  



