"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
"""
import builtins
import collections.abc
import google.protobuf.descriptor
import google.protobuf.internal.containers
import google.protobuf.message
import sys

if sys.version_info >= (3, 8):
    import typing as typing_extensions
else:
    import typing_extensions

DESCRIPTOR: google.protobuf.descriptor.FileDescriptor

@typing_extensions.final
class Todo(google.protobuf.message.Message):
    """//////////////////////////////////////////////////////////////////////
    State types.
    """

    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    ID_FIELD_NUMBER: builtins.int
    TEXT_FIELD_NUMBER: builtins.int
    COMPLETE_FIELD_NUMBER: builtins.int
    DEADLINE_FIELD_NUMBER: builtins.int
    id: builtins.str
    text: builtins.str
    complete: builtins.bool
    deadline: builtins.str
    def __init__(
        self,
        *,
        id: builtins.str = ...,
        text: builtins.str = ...,
        complete: builtins.bool = ...,
        deadline: builtins.str = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["complete", b"complete", "deadline", b"deadline", "id", b"id", "text", b"text"]) -> None: ...

global___Todo = Todo

@typing_extensions.final
class TodoListState(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    NAME_FIELD_NUMBER: builtins.int
    TODOS_FIELD_NUMBER: builtins.int
    name: builtins.str
    @property
    def todos(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[global___Todo]: ...
    def __init__(
        self,
        *,
        name: builtins.str = ...,
        todos: collections.abc.Iterable[global___Todo] | None = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["name", b"name", "todos", b"todos"]) -> None: ...

global___TodoListState = TodoListState

@typing_extensions.final
class CreateRequest(google.protobuf.message.Message):
    """//////////////////////////////////////////////////////////////////////
    Request and response types.
    """

    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    NAME_FIELD_NUMBER: builtins.int
    name: builtins.str
    def __init__(
        self,
        *,
        name: builtins.str = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["name", b"name"]) -> None: ...

global___CreateRequest = CreateRequest

@typing_extensions.final
class CreateResponse(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    def __init__(
        self,
    ) -> None: ...

global___CreateResponse = CreateResponse

@typing_extensions.final
class AddTodoRequest(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    TODO_FIELD_NUMBER: builtins.int
    todo: builtins.str
    """string todolistId = 1;"""
    def __init__(
        self,
        *,
        todo: builtins.str = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["todo", b"todo"]) -> None: ...

global___AddTodoRequest = AddTodoRequest

@typing_extensions.final
class AddTodoResponse(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    def __init__(
        self,
    ) -> None: ...

global___AddTodoResponse = AddTodoResponse

@typing_extensions.final
class ListTodosRequest(google.protobuf.message.Message):
    """string todolistId = 1;"""

    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    def __init__(
        self,
    ) -> None: ...

global___ListTodosRequest = ListTodosRequest

@typing_extensions.final
class ListTodosResponse(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    TODOS_FIELD_NUMBER: builtins.int
    @property
    def todos(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[global___Todo]: ...
    def __init__(
        self,
        *,
        todos: collections.abc.Iterable[global___Todo] | None = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["todos", b"todos"]) -> None: ...

global___ListTodosResponse = ListTodosResponse

@typing_extensions.final
class DeleteTodoRequest(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    TODOID_FIELD_NUMBER: builtins.int
    todoId: builtins.str
    """string todolistId = 1;"""
    def __init__(
        self,
        *,
        todoId: builtins.str = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["todoId", b"todoId"]) -> None: ...

global___DeleteTodoRequest = DeleteTodoRequest

@typing_extensions.final
class DeleteTodoResponse(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    def __init__(
        self,
    ) -> None: ...

global___DeleteTodoResponse = DeleteTodoResponse

@typing_extensions.final
class CompleteTodoRequest(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    TODOID_FIELD_NUMBER: builtins.int
    todoId: builtins.str
    """string todolistId = 1;"""
    def __init__(
        self,
        *,
        todoId: builtins.str = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["todoId", b"todoId"]) -> None: ...

global___CompleteTodoRequest = CompleteTodoRequest

@typing_extensions.final
class CompleteTodoResponse(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    def __init__(
        self,
    ) -> None: ...

global___CompleteTodoResponse = CompleteTodoResponse

@typing_extensions.final
class AddDeadlineRequest(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    TODOID_FIELD_NUMBER: builtins.int
    DATE_FIELD_NUMBER: builtins.int
    todoId: builtins.str
    date: builtins.str
    def __init__(
        self,
        *,
        todoId: builtins.str = ...,
        date: builtins.str = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["date", b"date", "todoId", b"todoId"]) -> None: ...

global___AddDeadlineRequest = AddDeadlineRequest

@typing_extensions.final
class AddDeadlineResponse(google.protobuf.message.Message):
    """resemble.v1alpha1.TaskId reminder_text_task_id = 1;"""

    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    def __init__(
        self,
    ) -> None: ...

global___AddDeadlineResponse = AddDeadlineResponse
