import { Navigate, Outlet } from 'react-router-dom'

function LayoutCustomer() {
  const role = localStorage.getItem('userRole')

  if (role && !(role === 'staff'|| role === 'admin')) {
    return <Navigate to='/HomePageBody' />
  }

  return (
    <main >
      <Outlet />
    </main>
  )
}

export default LayoutCustomer