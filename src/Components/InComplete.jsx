// cspell:ignore todos
/* eslint-disable react/prop-types */
import "./css/InComplete.css";

const InComplete = (props) => {

  // eslint-disable-next-line react/prop-types
  const {
    setNewTitle,
    setTodoEdit,
    InCompleteTodos,
    setInCompleteTodos,
    CompleteTodos,
    setCompleteTodos,
  } = props

  // 完了ボタン
  const onClickCompleteTodo = (index) => {
    const newCompleteTodos = [...CompleteTodos, InCompleteTodos[index]]
    InCompleteTodos.splice(index,1)
    setCompleteTodos(newCompleteTodos)
  }

  // 削除ボタン
  const onClickDeleteTodo = (index) => {
    const newInCompleteTodos = [...InCompleteTodos]
    newInCompleteTodos.splice(index, 1)
    setInCompleteTodos(newInCompleteTodos)
  }

  // 編集ボタン
  const onClickEditTodo = (todo,index) => {
    console.log(index);
    console.log(InCompleteTodos[index]);
    setTodoEdit(true)
    setNewTitle(todo)
  }

  return (
    <div className="inComplete">
        <h1>未完了のタスク</h1>
      <ul className="inComplete__container">
        {InCompleteTodos.map((todo,index) => (
            <div key={todo}>
              <li>{todo}</li>
              <button onClick={() => onClickCompleteTodo(index)}>完了</button>
            <button onClick={() => onClickDeleteTodo(index)}>削除</button>
            <button onClick={() => onClickEditTodo(todo,index)}>編集</button>
            </div>
        ))}
      </ul>
    </div>
  )
}

export default InComplete
