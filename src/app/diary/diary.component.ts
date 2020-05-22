import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
values;
  html: any;
  constructor(private fb:FormBuilder) { }
  dairyForm =this.fb.group({
  text:['',Validators.required]
})
  ngOnInit() {
    $(document).ready(function(){
     (<any>$('textarea')).summernote({
       height:200
     });
    })
    const date = `${moment().format('DD-MM-YYYY')}`
    if(localStorage.getItem(date)){
      this.html = JSON.parse(localStorage.getItem((date)))
      this.html.map((data:any)=>{
        $("#output").append($.parseHTML(data))
      });
    }
  }
  Date(){
    return moment().format('DD-MM-YYYY')
  }
  saveDiary(){
  let  htmlelements = []
this.values =  (<any>$('#summernote')).summernote().val();
 this.html = $.parseHTML(this.values) //this.html contain all the html elements in an array
this.html.map((data:any)=>{
  htmlelements.push(data.outerHTML)
  this.values = data
  this.values = data.outerHTML
  $("#output").append($.parseHTML(this.values))
});
console.log("this.html",JSON.stringify(this.html))
localStorage.setItem(`${moment().format('DD-MM-YYYY')}`,JSON.stringify(htmlelements))
console.log(htmlelements)
htmlelements.map((data:any)=>{
  console.log($.parseHTML(data))

})
 }
 editText(){
  
 }
}
