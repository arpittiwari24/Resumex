import SigninButton from "./SignInButton";

export default function Navbar() {
    return(
        <div className="navbar text-white">
  <div className="flex-1">
    <a className=" normal-case text-4xl font-bold">Resumex</a>
  </div>
  <div className="flex-none gap-2">
         <SigninButton />
        </div>
  </div>
      )
}