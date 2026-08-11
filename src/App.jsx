import { useEffect, useState } from 'react'
import './App.css'

function Card({ title }) {

  const [liked, setLiked] = useState(false);

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`${title}has liked:${liked}`)
  },[liked])

  return (
    <div className='movie-card' onClick={() => {
      setCount(count + 1)
    }}>
      <h2>{title}<br />{count}</h2>
      <button onClick={() => { setLiked(!liked) }}> {liked ? 'liked' : 'like'}</button>
    </div>
  )
}

function Card2({ title }) {
  return (
    <div className='movie-card'>
      <h2>{title}</h2>
    </div>
  )
}
function App() {
  return (
    <div className='card'>
      <div>
        <Card title="avatar" />
        <Card title="sambar" />
        <Card title="end game" />
        <Card title="spiderman" />

      </div>
      <div>
        <Card2 title="avatar" />
        <Card2 title="sambar" />
        <Card2 title="end game" />
        <Card2 title="spiderman" />
      </div>
    </div>
  )
}

export default App
