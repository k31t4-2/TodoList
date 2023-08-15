/* eslint-disable no-undef */
// cspell:ignore todos
// cspell:ignore Repost
/* eslint-disable react/prop-types */
import './css/Input.css'

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
    editIndex,
  } = props

  // 追加ボタン
  const onClickAddTodo = () => {
    if (todos === '') return
    const newInCompleteTodos = [...InCompleteTodos, todos]
    setInCompleteTodos(newInCompleteTodos)
    setTodos('')
  }

  // 再投稿ボタン
  const onClickRepostTodo = () => {
    if (newTitle === '') return
    // 1.新しいInComp配列を作成
    const newInCompleteTodo = [...InCompleteTodos]
    // 2.配列の中からindex番目のtodoをnewTitleに置き換える
    newInCompleteTodo[editIndex] = newTitle
    // 3.配列をStateでsetしなおす
    setInCompleteTodos(newInCompleteTodo)

    // この文では、新しく打ったtodoを`setNewTitle`に設定しているだけ。
    setNewTitle(newTitle)
    // 再投稿したら以下を初期化する
    setNewTitle('')
    setTodoEdit(false)
  }

  // キャンセルボタン
  const onClickCancelEdit = () => {
    setTodoEdit(false)
    setNewTitle('')
  }

  // 新しいtodoをonChangeで管理
  const onChangeNewTitle = (e) => {
    setNewTitle(e.target.value)
  }

  return (
    <div className="input">
      {todoEdit ? (
        <div className="input__container">
          <input
            disabled={disabled}
            value={newTitle}
            onChange={(e) => onChangeNewTitle(e)}
            type="text"
          />
          <button onClick={() => onClickRepostTodo()}>再投稿</button>

          <button onClick={onClickCancelEdit}>キャンセル</button>
        </div>
      ) : (
        <div className="input__container">
          <input
            disabled={disabled}
            value={todos}
            onChange={(e) => setTodos(e.target.value)}
            type="text"
          />
          <button onClick={onClickAddTodo}>追加</button>
        </div>
      )}
    </div>
  )
}

export default Input
