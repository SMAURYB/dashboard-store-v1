import { Link } from 'react-router-dom'
// import { userStore } from '../../store/user.store'

export default function NotFound() {

  const user = userStore(state => state.user)
  return (
    <main className=" grid h-[100dvh]">
      <div className='m-auto'>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-alert-triangle mb-10 mx-auto w-28 h-28">
          <path d="M12 1L1 21h22L12 1z" />
          <circle cx="12" cy="16" r="1" />
          <path d="M12 9v5" />
          <path d="M12 17h0" />
        </svg> */}
        <section className='grid gap-2'>
          <h1>404</h1>
          <p>The page you are looking for could not be found.</p>
          <Link to="/">Go back to the homepage</Link>
          <p>Or</p>
          {
            user.id &&
            <Link to="/dashboard">Go back to dashboard</Link>
          }
        </section>
      </div>
    </main>
  )
}
