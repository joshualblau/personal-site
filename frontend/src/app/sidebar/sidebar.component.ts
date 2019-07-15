import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    //styling
    $(function() {
      $(".openbtn").on('click', function(){
        $("#nav-sidebar").animate({
          width: "200px"
        });
        $(this).hide(1000);
      });

      $(".closebtn").on('click', function(){
        $("#nav-sidebar").animate({
          width: "0"
        });
        $(".openbtn").show(1000);
      });
    });


  }
}
