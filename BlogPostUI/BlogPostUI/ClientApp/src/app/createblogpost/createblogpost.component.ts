import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../services/blog.service';
@Component({
  selector: 'app-createblogpost',
  templateUrl: './createblogpost.component.html',
  styleUrls: ['./createblogpost.component.css']
})
export class CreateblogpostComponent implements OnInit {
  blogPostForm: FormGroup<any> = new FormGroup<any>({});
  @Output() closePopup = new EventEmitter<string>();
  constructor(private readonly formBuilder: FormBuilder, private readonly blogService: BlogService) { }

  ngOnInit(): void {
    this.blogPostForm = this.formBuilder.group({
      userName: ['', Validators.required],
      dateCreated: [null],
      text: ['', Validators.required]
    });
  }
  onSubmit(): void {
    if (this.blogPostForm?.valid) {
      const blogPost: any = this.blogPostForm.value;
      this.blogService.createBlog(blogPost).subscribe(blog => {
       
          window.alert("Blog saved successfully");
          this.onClose();
      }, () => { window.alert("error accured"); });
    }
  }
  onClose(): void {
    this.closePopup.emit();
  }
}
