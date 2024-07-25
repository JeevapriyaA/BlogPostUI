import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-editblogpost',
  templateUrl: './editblogpost.component.html',
  styleUrls: ['./editblogpost.component.css']
})
export class EditblogpostComponent implements OnInit {
  blogPostForm: FormGroup<any> = new FormGroup<any>({});
  @Output() closePopup = new EventEmitter<string>();
  @Input() blogId: number = 0;

  constructor(private readonly formBuilder: FormBuilder, private readonly blogService: BlogService) { }

  ngOnInit(): void {
    this.blogPostForm = this.formBuilder.group({
      id:[0],
      userName: ['', Validators.required],
      dateCreated: [null],
      text: ['', Validators.required]
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.blogId) {
      this.getBlogsbyId(this.blogId);
    }
  }
  onSubmit(): void {
    if (this.blogPostForm?.valid) {
      const blogPost: any = this.blogPostForm.value;
      this.blogService.editBlog(blogPost).subscribe(blog => {      
          window.alert("Blog updated successfully");
          this.onClose();
      }, () => { window.alert("error accured"); });
    }
  }
  onClose(): void {
    this.closePopup.emit();
  }
  getBlogsbyId(id: number) {
    this.blogService.getBlogsById(this.blogId).subscribe(blog => {
      this.blogPostForm.patchValue(blog);
    })
  }
}
