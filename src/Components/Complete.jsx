// cspell:ignore todos
/* eslint-disable react/prop-types */
import "./css/Complete.css";

const Complete = (props) => {

  // eslint-disable-next-line react/prop-types
  const { InCompleteTodos, setInCompleteTodos, CompleteTodos, setCompleteTodos } = props

  const onClickRestoreTodo = (index) => {
    // todoを削除する
    const newCompleteTodos = [...CompleteTodos]
    newCompleteTodos.splice(index, 1)
    setCompleteTodos(newCompleteTodos)

    // todoをInCompleteに戻す
    const newInCompleteTodos = [...InCompleteTodos,CompleteTodos[index]]
    setInCompleteTodos(newInCompleteTodos)
  }


  return (
    <div className="complete">
      <h1>完了のタスク</h1>
      <ul className="complete__container">
        {CompleteTodos.map((todo,index) => (
            <div key={todo}>
              <li>{todo}</li>
              <button onClick={() => onClickRestoreTodo(index)}>戻す</button>
            </div>
        ))}
      </ul>
      </div>
  )
}

export default Complete
