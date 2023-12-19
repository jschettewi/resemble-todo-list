// @generated by protoc-gen-es v1.6.0
// @generated from file todo_app/v1/todo_app.proto (package todo_app.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message todo_app.v1.FullTodoList
 */
export const FullTodoList = proto3.makeMessageType(
  "todo_app.v1.FullTodoList",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "todos", kind: "message", T: Todo, repeated: true },
  ],
);

/**
 * @generated from message todo_app.v1.ListOfLists
 */
export const ListOfLists = proto3.makeMessageType(
  "todo_app.v1.ListOfLists",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message todo_app.v1.TodoListsState
 */
export const TodoListsState = proto3.makeMessageType(
  "todo_app.v1.TodoListsState",
  () => [
    { no: 1, name: "todolists", kind: "message", T: FullTodoList, repeated: true },
  ],
);

/**
 * @generated from message todo_app.v1.AddTodoListRequest
 */
export const AddTodoListRequest = proto3.makeMessageType(
  "todo_app.v1.AddTodoListRequest",
  () => [
    { no: 1, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message todo_app.v1.AddTodoListResponse
 */
export const AddTodoListResponse = proto3.makeMessageType(
  "todo_app.v1.AddTodoListResponse",
  [],
);

/**
 * @generated from message todo_app.v1.ListTodoListsRequest
 */
export const ListTodoListsRequest = proto3.makeMessageType(
  "todo_app.v1.ListTodoListsRequest",
  [],
);

/**
 * @generated from message todo_app.v1.ListTodoListsResponse
 */
export const ListTodoListsResponse = proto3.makeMessageType(
  "todo_app.v1.ListTodoListsResponse",
  () => [
    { no: 1, name: "todolists", kind: "message", T: FullTodoList, repeated: true },
  ],
);

/**
 * @generated from message todo_app.v1.DeleteTodoListRequest
 */
export const DeleteTodoListRequest = proto3.makeMessageType(
  "todo_app.v1.DeleteTodoListRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message todo_app.v1.DeleteTodoListResponse
 */
export const DeleteTodoListResponse = proto3.makeMessageType(
  "todo_app.v1.DeleteTodoListResponse",
  [],
);

/**
 * @generated from message todo_app.v1.Todo
 */
export const Todo = proto3.makeMessageType(
  "todo_app.v1.Todo",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "complete", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message todo_app.v1.TodoListState
 */
export const TodoListState = proto3.makeMessageType(
  "todo_app.v1.TodoListState",
  () => [
    { no: 1, name: "todos", kind: "message", T: Todo, repeated: true },
  ],
);

/**
 * @generated from message todo_app.v1.AddTodoRequest
 */
export const AddTodoRequest = proto3.makeMessageType(
  "todo_app.v1.AddTodoRequest",
  () => [
    { no: 1, name: "todolistId", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "todo", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message todo_app.v1.AddTodoResponse
 */
export const AddTodoResponse = proto3.makeMessageType(
  "todo_app.v1.AddTodoResponse",
  [],
);

/**
 * @generated from message todo_app.v1.ListTodosRequest
 */
export const ListTodosRequest = proto3.makeMessageType(
  "todo_app.v1.ListTodosRequest",
  () => [
    { no: 1, name: "todolistId", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message todo_app.v1.ListTodosResponse
 */
export const ListTodosResponse = proto3.makeMessageType(
  "todo_app.v1.ListTodosResponse",
  () => [
    { no: 1, name: "todos", kind: "message", T: Todo, repeated: true },
  ],
);

/**
 * @generated from message todo_app.v1.DeleteTodoRequest
 */
export const DeleteTodoRequest = proto3.makeMessageType(
  "todo_app.v1.DeleteTodoRequest",
  () => [
    { no: 1, name: "todolistId", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "todoId", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message todo_app.v1.DeleteTodoResponse
 */
export const DeleteTodoResponse = proto3.makeMessageType(
  "todo_app.v1.DeleteTodoResponse",
  [],
);

/**
 * @generated from message todo_app.v1.CompleteTodoRequest
 */
export const CompleteTodoRequest = proto3.makeMessageType(
  "todo_app.v1.CompleteTodoRequest",
  () => [
    { no: 1, name: "todolistId", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "todoId", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message todo_app.v1.CompleteTodoResponse
 */
export const CompleteTodoResponse = proto3.makeMessageType(
  "todo_app.v1.CompleteTodoResponse",
  [],
);

