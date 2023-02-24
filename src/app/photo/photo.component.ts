import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../service/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit{
  photoUrl:string='';

  constructor(private srv:PhotoService){

  }

  ngOnInit(): void {
    this.getRandomPhotos()
  }

  getRandomPhotos(){
    this.srv.getPhotos().subscribe(res=>{
      this.photoUrl= res.urls.regular;
      console.log(this.photoUrl)
    })
  }


  getPhoto()
  {
    this.getRandomPhotos();
  }


}
