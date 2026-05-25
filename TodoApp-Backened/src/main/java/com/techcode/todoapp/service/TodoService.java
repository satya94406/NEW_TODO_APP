package com.techcode.todoapp.service;

import com.techcode.todoapp.repository.TodoRepository;
import com.techcode.todoapp.entity.TodoList;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {
   private final TodoRepository repo;
   
   public TodoService(TodoRepository repo){
      this.repo=repo;
   }

   public List<TodoList> getTodosByUser(String email)
   {
      return repo.findByUserEmail(email);
   }

   public List<TodoList> getAllTodos(){
            return repo.findAll();
   }

   public TodoList addTodo(TodoList todo)
   {
      return repo.save(todo);
   }

   public void deleteTodo(Long id)
   {
     repo.deleteById(id);
   }

   public TodoList updateTodo(Long id, TodoList todo)
   {
      TodoList existing = repo.findById(id).orElseThrow();

      existing.setTodoTask(todo.getTodoTask());
      existing.setDueDate(todo.getDueDate());
      existing.setPriority(todo.getPriority());
      return repo.save(existing);
   }
}
