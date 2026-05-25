package com.techcode.todoapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name= "todolist")
public class TodoList {

          @GeneratedValue(strategy=GenerationType.IDENTITY)
          @Id
          private Long id;

          @Column(name="todo_task")
          private String todoTask;

          @Column(name="due_Date")
          private LocalDate dueDate;

          @Column(name="priority")
          private String priority;
          
          private String userEmail;

          public TodoList(){}

          public Long getId() 
          {
                return id;
          }

          public void setId(Long id) 
          {
                    this.id = id;
          }

          public String getTodoTask() 
          {
                    return todoTask;
          }

          public void setTodoTask(String todoTask)
         {
                    this.todoTask = todoTask;
          }

          public LocalDate getDueDate()
          {
                    return dueDate;
          }

          public void setDueDate(LocalDate dueDate) 
          {
                    this.dueDate = dueDate;
          }

          public String getPriority()
          {
             return priority;
          }

          public void setPriority(String priority)
          {
              this.priority=priority;
          }

          public String getUserEmail()
          {
             return userEmail;
          }

          public void setUserEmail(String userEmail)
          {
             this.userEmail=userEmail;
          }
}
