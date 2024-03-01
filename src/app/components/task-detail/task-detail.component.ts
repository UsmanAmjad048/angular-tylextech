import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Import HttpClient to make HTTP requests
import { Task } from '../task.model';
import { CommonModule } from '@angular/common';
interface ApiResponse {
  status: boolean;
  data: Task;
  message: string;
  total_pages: number;
  current_page: number;
}
@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  task: Task;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient 
  ) {  this.task = {} as Task;}

  ngOnInit(): void {
    this.getTaskDetail();
  }

  getTaskDetail(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const taskId = +id;
      if (!isNaN(taskId)) {
        const apiUrl = `http://127.0.0.1:8000/items/${taskId}/`;
        this.http.get<ApiResponse>(apiUrl)
        .subscribe(
          response => {
            this.task = response.data;
            console.log(response.data)
          },
          error => {
            console.error('Error fetching task:', error);
          }
        );
      } else {
        console.error('Invalid task ID provided in route parameter.');
      }
    } else {
      console.error('Task ID not found in route parameter.');
    }
  }
}