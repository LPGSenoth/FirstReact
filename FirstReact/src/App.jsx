const todos = [
  'Chier sur mes potes',
  'Faire en sorte que le caca fasse pipi',
  'Bref encore et toujours le caca'
]

function App() {
  return <>
    <Title color="grey" id="monId" className="demo">
      My component
    </Title>
    <input type="text" />
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto sunt facere architecto doloremque qui accusantium vel, praesentium harum perferendis sed eius consequatur rem, cumque delectus. Debitis corporis ipsum accusantium? Libero.
    </p>
    <ul>
      {todos.map(todo =>(<li key={todo}>{todo}</li>))}
    </ul>
  </>
}

function Title({color, hidden, ...props}){
  if(hidden) {
    return null
  }

  return <h1 style={{color: color}}{...props}></h1>
}

export default App
