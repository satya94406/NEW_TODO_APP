package com.techcode.todoapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.techcode.todoapp.entity.TodoList;
import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<TodoList, Long>{
    List<TodoList>findByUserEmail(String userEmail);
}

