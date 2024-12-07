
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import { dark } from '@clerk/themes';

export default function App() {
  return (
<>
    <header   >
      <SignedOut>
        <SignInButton  style={{color: 'pink', backgroundColor: "black"}}/>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>

    <div>Hello work vfvfv</div>
</>

  )
}