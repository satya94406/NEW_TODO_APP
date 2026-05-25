package com.techcode.todoapp.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.techcode.todoapp.entity.TodoList;
import com.techcode.todoapp.service.TodoService;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "http://localhost:5173")
public class TodoController 
{
       private final TodoService service;

       public TodoController(TodoService service)
       {
         this.service=service;
       }

       @GetMapping
       public List<TodoList> getAllTodos()
       {
         return service.getAllTodos();
       }

       @GetMapping("/user/{email}")
       public List<TodoList> getTodosByUser(@PathVariable String email)
       {
          return service.getTodosByUser(email);
       }

       @PostMapping
       public TodoList addTodo(@RequestBody TodoList todo)
       {
         return service.addTodo(todo);
       }

       @PutMapping("/{id}")
       public TodoList updateTodo(@PathVariable Long id , @RequestBody TodoList todo)
       {
          return service.updateTodo(id, todo);
       }

       @DeleteMapping("/{id}")
       public void DeleteTodo(@PathVariable Long id)
       {
        service.deleteTodo(id);
       }

}
