import { Navigate, Outlet } from 'react-router-dom'

function LayoutStaff() {
  const role = localStorage.getItem('userRole')

  if (role && (role === 'staff')) {
    return <Navigate to='/staff' />
  }

  return (
    <main >
      <Outlet />
    </main>
  )
}

export default LayoutStaff