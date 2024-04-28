import { Link } from "react-router-dom"
import { SUPPORTED_ROUTES } from "../config"

const SignUp = () => {
  return (
    <>
      <Link to={`${SUPPORTED_ROUTES.login()}`}>ir al login</Link>
      <div>SignUp</div>
    </>
  )
}

export default SignUp