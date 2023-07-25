/* eslint-disable no-undef */
// cspell:ignore todos
// cspell:ignore Repost
/* eslint-disable react/prop-types */
import "./css/Input.css";

const Input = (props) => {

  // eslint-disable-next-line react/prop-types
  const {
    todoEdit,
    setTodoEdit,
    disabled,
    todos,
    setTodos,
    InCompleteTodos,
    setInCompleteTodos,
    newTitle,
    setNewTitle,
  } = props

  // 追加ボタン
  const onClickAddTodo = () => {
    if (todos === "") return;
    const newInCompleteTodos = [...InCompleteTodos, todos]
    setInCompleteTodos(newInCompleteTodos)
    setTodos("")
  }

  // 再投稿ボタン
  const onClickRepostTodo = () => {
    if (newTitle === "") return; //toast使用する

    setInCompleteTodos(newTodos);
    // 再投稿したら以下を初期化する
    setNewTitle("")
    setEditingTodoID("")
  }

  // キャンセルボタン
  const onClickCancelEdit = () => {
    setTodoEdit(false)
    setNewTitle("")
  }

  return (
    <div className="input">
        {todoEdit ? (
          <div className="input__container">
            <input
              disabled={disabled}
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              type="text"
            />
            {console.log(newTitle)}
            <button
              onClick={() => onClickRepostTodo()}
            >再投稿
            </button>
            <button onClick={onClickCancelEdit}>キャンセル</button>
          </div>
          )
          :
          <div className="input__container">

          <input
            disabled={disabled}
            value={todos}
            onChange={(e) => setTodos(e.target.value)}
            type="text"
          />
            <button
              onClick={onClickAddTodo}
              >追加
            </button>
          </div>
        }
    </div>
  )
}

export default Input
