import { Link } from 'react-router-dom'
type PropsHeader = {total:number}
const Header = ({total}:PropsHeader) => {
  return (
    <>
      <h2>Friends</h2>
      <h2>Friends: {total}</h2>
      <Link to=''>Ver todas los amigos</Link>
    </>
  )
}

export default Header