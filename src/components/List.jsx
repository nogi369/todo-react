export const List = ({ todoList, deleteTodo }) => {
  const complete = (id) => deleteTodo(id);

  return (
    <div>
      {todoList.map((todo) => {
        return (
          <div key={todo.id}>
            <button onClick={() => complete(todo.id)}>完了</button>
            <span>{todo.content}</span>
          </div>
        );
      })}
    </div>
  );
};
