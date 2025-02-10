import { Component, OnInit } from '@angular/core';
import { BackendService } from '../Services/backend.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  imports: [HttpClientModule, CommonModule,RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  providers:[BackendService]
})
export class LandingPageComponent implements OnInit {
  title = 'my-angular-app';
  message:string='';
  constructor (private backendService:BackendService){}

  ngOnInit(): void {
    this.backendService.getMessage().subscribe(
      (response) => {
        this.message = response.message;
        console.log('BackEnd Connected Successfully');
        
      },
      (error) => {
        console.error('Error fetching message', error);
      }
    );
  }
}
