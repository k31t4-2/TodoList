import { useState } from 'react'
import Complete from './Components/Complete'
import InComplete from './Components/InComplete'
import Input from './Components/Input'

function App() {
  const validation = {
    color: 'red',
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '5px 0',
  }

  // input
  const [todos, setTodos] = useState('')

  // InCompleteTodo
  const [InCompleteTodos, setInCompleteTodos] = useState([])

  // CompleteTodo
  const [CompleteTodos, setCompleteTodos] = useState([])
  // 編集機能
  const [todoEdit, setTodoEdit] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [editIndex, setEditIndex] = useState('')

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
        editIndex={editIndex}
      />

      {/* バリデーションメッセージ */}
      {validationTerms && <p style={validation}>タスクを消化してください</p>}

      <InComplete
        InCompleteTodos={InCompleteTodos}
        setInCompleteTodos={setInCompleteTodos}
        CompleteTodos={CompleteTodos}
        setCompleteTodos={setCompleteTodos}
        setTodoEdit={setTodoEdit}
        todoEdit={todoEdit}
        setNewTitle={setNewTitle}
        setEditIndex={setEditIndex}
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
