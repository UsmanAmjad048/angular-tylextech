import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Task } from '../task.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AlertComponent } from '../alert/alert.component';
import { StoreService } from  '../store.service';
import axios from 'axios';
interface ApiResponse {
  status: boolean;
  data: Task[];
  message: string;
  total_pages: number;
  current_page: number;
}
interface ApiResponse2 {
  status: boolean;
  data: Task;
  message: string;
  total_pages: number;
  current_page: number;
}
@Component({
  selector: 'app-todoapp',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, AlertComponent],
  templateUrl: './todoapp.component.html',
  styleUrl: './todoapp.component.scss'
})
export class TodoappComponent implements OnInit {
  value: boolean = false;



  task: Task;
  pk: number = 0;
  responseType: "success" | "error" = "success";
  responseMessage: string = ''
  alertVisible :boolean=false;
  private apiUrl = 'http://127.0.0.1:8000/items/';
  taskForm: FormGroup;
  tasks: Task[] = [];
  submitbutton: boolean;
  constructor(private storeService: StoreService,private router: Router, private formBuilder: FormBuilder, private http: HttpClient) {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      due_date: [''],
      status: ['pending'],
      image: ['']
    });
    this.submitbutton = true;
    this.task = {} as Task;
  }

  detailTask(id: number): void {
    this.router.navigate(['/item', id]); // Assuming the route for task details is '/task-details/:id'
  }
  ngOnInit() {
    this.getTasks().subscribe(
      (response: ApiResponse) => {
        console.log('Tasks fetched successfully:', response);
        this.tasks = response.data;
      },
      (error) => {
        console.error('Error fetching tasks:', error);
      }
    );
  }
  getTasks(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }

  addTask(formData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }
  handleImageUpload(event: any) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      this.taskForm.patchValue({
        image: selectedFile
      });
    } else {
      this.taskForm.patchValue({
        image: null
      });
    }
  }
  
  onSubmit() {
    if (this.taskForm.valid) {
      this.value = true;
  this.storeService.setData(this.value);

      const formData = new FormData();
      Object.keys(this.taskForm.value).forEach(key => {
        formData.append(key, this.taskForm.value[key]);
      });

      this.addTask(formData).subscribe(
        (response) => {
          this.taskForm.reset();
          this.refreshTasks();
          if (response.messsage) {
            this.responseType = 'success';
            this.responseMessage = response.messsage;
            this.value = false;
  this.storeService.setData(this.value);
            this.showAlert();
            setTimeout(() => {
              this.hideAlert(); 
            }, 2000);
          }
        },
        (error) => {
          this.value = false;
  this.storeService.setData(this.value);
          this.responseType = 'error';
          this.responseMessage = error;
        });
    } else {
      console.error('Form is invalid. Cannot submit task.');
    }
  }

  refreshTasks() {
    this.value = true;
  this.storeService.setData(this.value);
    this.getTasks().subscribe(
      (response: ApiResponse) => {
        console.log(response.data)
        this.tasks = response.data;
        this.value = false;
  this.storeService.setData(this.value);
        const fileInput = document.getElementById('image') as HTMLInputElement;
        if (fileInput) {
          fileInput.value = '';
        }
      },
      (error) => {
        this.value = false;
  this.storeService.setData(this.value);
        console.error('Error refreshing tasks:', error);
      }
    );
  }
  showAlert() {
    this.alertVisible = true; // Set a flag to true to show the alert
  }
  
  hideAlert() {
    this.alertVisible = false; // Set the flag to false to hide the alert
  }
  removeTask(id: number): void {
    this.value = true;
  this.storeService.setData(this.value);
    const deleteUrl = `${this.apiUrl}${id}/`;
    this.http.delete(deleteUrl).subscribe(
      (response : any) => {
        if (response.message) {
          this.responseType = 'success';
          this.responseMessage = response.message;
          
          this.showAlert(); // Call a function to show the alert
          setTimeout(() => {
            this.hideAlert(); // Call a function to hide the alert after 2 seconds
          }, 2000);
        }

        this.tasks = this.tasks.filter(task => task.id !== id);
        this.value = false;
        this.storeService.setData(this.value);
      },
      (error) => {
        this.value = false;
  this.storeService.setData(this.value);
        console.error('Error deleting task:', error);
      }
    );
  }

  update(id: number) {
    this.submitbutton = false;
    this.pk = id;
    const apiUr = `${this.apiUrl}${id}/`;
    this.http.get<ApiResponse2>(apiUr)
      .subscribe(
        response => {
          this.task = response.data;
          this.taskForm.patchValue({
            title: this.task.title,
            description: this.task.description,
            due_date: this.task.due_date,
            status: this.task.status,
          });
        },
        error => {
          console.error('Error fetching task:', error);
        }
      );
  }
  onCancel() {
    this.submitbutton = true;
    this.taskForm.reset();

  }

  updateTask(pk: number): Promise<any> {

    this.value = true;
    this.storeService.setData(this.value);
    const formData = new FormData();
    Object.keys(this.taskForm.value).forEach(key => {
      formData.append(key, this.taskForm.value[key]);
    });

    return this.callupdate(formData, pk)
      .then(() => {
        this.taskForm.reset();
        this.refreshTasks();
        this.value = false;
        this.storeService.setData(this.value);
      })
      .catch(error => {
        this.value = false;
        this.storeService.setData(this.value);
        console.error('Error updating task:', error);
        throw error;
      });
  }

  callupdate(formData: FormData, pk: number): Promise<any> {
    this.value = true;
    this.storeService.setData(this.value);
    const updateUrl = `${this.apiUrl}${pk}/`;
    console.log(updateUrl, formData);

    const token = localStorage.getItem('access');
    let headers = {};

    if (token) {
      headers = {
        Authorization: `Bearer ${token}`
      };
    }

    return axios.put(updateUrl, formData, { headers })
    .then(response  => {
      if (response.data.message) {

        this.responseType = 'success';
        this.responseMessage = response.data.message;
        this.showAlert(); // Call a function to show the alert
        setTimeout(() => {
          this.hideAlert(); // Call a function to hide the alert after 2 seconds
        }, 2000);
        this.value = false;
        this.storeService.setData(this.value);
      }
      return response.data;
    });
  
  }
}