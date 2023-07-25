// cspell:ignore todos
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './App.css'

import Complete from './Components/Complete'
import InComplete from './Components/InComplete'
import Input from './Components/Input'

function App() {



  const validation = {
    color: "red",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    margin:"5px 0"
  }

  // input
  const [todos, setTodos] = useState("")
  // InCompleteTodo
  const [InCompleteTodos, setInCompleteTodos]
    = useState(JSON.parse(localStorage.getItem("todo")))
  // CompleteTodo
  const [CompleteTodos, setCompleteTodos]
    = useState(JSON.parse(localStorage.getItem("todos")))
  // 編集機能
  const [todoEdit, setTodoEdit] = useState(false)
  const [newTitle, setNewTitle] = useState("")

  // タスクの内容をlocalStorageで管理
  useEffect(() => {
    // ローカルストレージに保存
    localStorage.setItem("todo",JSON.stringify(InCompleteTodos))
  }, [InCompleteTodos])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(CompleteTodos))
  },[CompleteTodos])

    const validationTerms = InCompleteTodos.length >= 5

  return (
    <>
      <Input
        disabled={validationTerms}
        todos={todos}
        setTodos={setTodos}
        InCompleteTodos={InCompleteTodos}
        setInCompleteTodos={setInCompleteTodos}
        todoEdit={todoEdit}
        setTodoEdit={setTodoEdit}
        newTitle={newTitle}
        setNewTitle={setNewTitle}
      />

      {/* バリデーションメッセージ */}
      {validationTerms
        &&
      <p style={validation}>タスクを消化してください</p>
      }

      <InComplete
        InCompleteTodos={InCompleteTodos}
        setInCompleteTodos={setInCompleteTodos}
        CompleteTodos={CompleteTodos}
        setCompleteTodos={setCompleteTodos}
        setTodoEdit={setTodoEdit}
        todoEdit={todoEdit}
        setNewTitle={setNewTitle}
      />

      <Complete
        CompleteTodos={CompleteTodos}
        setCompleteTodos={setCompleteTodos}
        InCompleteTodos={InCompleteTodos}
        setInCompleteTodos={setInCompleteTodos}
      />
    </>
  )
}

export default App
