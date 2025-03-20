import { Component, OnInit } from '@angular/core';
import {} from "jquery"
import 'node_modules/jquery-ui/ui/widgets/accordion.js'

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  
 ngOnInit(){
  $(".hidden-block").hide()
 
 $(".navbar-nav .nav-link").on("click", () => {
  $(".nav-item").find(".active").removeClass("active");
  $(this).addClass("active");
});

$(function () {
  $("#accordion").accordion({
    icons: null,
    collapsible: true,
    active: false,
    heightStyle: "content"
  });
});

let accordItems = $("#accordion h3");

$("#index").on("keydown", (e: JQuery.KeyDownEvent) =>{
   let symbol = e.key;
   if (
      symbol === "Backspace" || symbol === "Delete" ||
      symbol === "ArrowLeft" || symbol === "ArrowRight" ||
      symbol === "Tab" || symbol === "Enter" || symbol === "Escape"
  ) {
      return;
  }
  if (!/\d/.test(symbol) || $("#index").val().length == 6) {
      e.preventDefault();  
  }
})


$(".submit-btn").on("click", (e: JQuery.ClickEvent) =>{

   e.preventDefault()
   let valid = true

   if($("#name").val() === ""){
      alert("Заполните имя")
      valid = false
   }
   if($("#surname").val() === ""){
      alert("Заполните фамилию")
      valid = false
   }
   if($("#tel").val() == ""){
      alert("Заполните телефон")
      valid = false
   }
   if($("#country").val() === ""){
      alert("Заполните страну")
      valid = false
   }
   if($("#index").val() === ""){
      alert("Заполните индекс")
      valid = false
   }
   if($("#address").val() === ""){
      alert("Заполните адрес")
      valid = false
   }
   if($("#index").val() < 6){
      alert("Индекс должен содержать 6 символов")
      valid = false
   }

   if(valid === true){
      $(".order").hide();
      $(".hidden-block").show()
   }
   
})

$(".navbar-toggler").on("click", () =>{
   $(".navbar-nav").css("display", "flex")
   $(".form-control ").hide()
   $(".btn.btn-outline-primary").hide()
   $(".navbar-toggler").hide()
   $(".close").show()
   $(".nav-link").css("textAlign", "center")
})

$(".close").on('click', () =>{
   $(".navbar-nav").css("display", "none")
   $(".navbar-toggler").show()
   $(".close").hide()
   $(".btn.btn-outline-primary").show()
   $(".form-control ").show()
})
 }
}
