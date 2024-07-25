import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl = 'https://localhost:7201/api/BlogPost';

  constructor(private http: HttpClient) { }

  getBlogList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/GetAllBlogs').pipe(catchError(this.handleError<any[]>('getBlogList',[])));
  }

  getBlogsById(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/GetBlogById/' + id).pipe(catchError(this.handleError<any>('getBlogsById')));

  }

  editBlog(blog:any): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/UpdateBlogPost',blog).pipe(catchError(this.handleError<any[]>('editBlog')));
  }

  createBlog(blog: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/InsertBlogPost', blog).pipe(catchError(this.handleError<any[]>('createBlog')));
  }

  deleteBlog(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/DeleteBlogPost/'+id).pipe(catchError(this.handleError<any[]>('deleteBlog')));
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    }
  }
}
