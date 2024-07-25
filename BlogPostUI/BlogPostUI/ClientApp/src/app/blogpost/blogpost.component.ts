import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { ConfirmDialogService } from '../services/confirm-dialog.service';
@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent {
  blogList: any[] = [];
  blogId: number = 0;
  display = "none";
  displayHistoryPopup: string = 'none';
  constructor(private readonly blogService: BlogService, private confirmDialogService: ConfirmDialogService ) { }

  ngOnInit() {
    this.getBlogList();
  }
  getBlogList() {
    this.blogService.getBlogList().subscribe(blogs => {
      this.blogList = blogs;
    })
  }
  openModal(id: number) {
    if (id > 0)
      this.blogId = id;
    else
      this.blogId = 0;
    this.display = "block";
  }
  closeModal() {
    this.getBlogList();
    this.display = "none";
  }
  async confirmDelete(id: number) {
    if (window.confirm('Are sure you want to delete this item ?')) {
      this.blogService.deleteBlog(id).subscribe(blog => {
        window.alert("Blog deleted successfully");
        this.getBlogList();
      }, () => { window.alert("error accured"); })
    }
  }
  openModasl() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

}
