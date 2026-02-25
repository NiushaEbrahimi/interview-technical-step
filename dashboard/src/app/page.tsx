import { getCurrentUserAction } from '@/_lib/authServerActions'
import { redirect } from 'next/navigation'

export default async function HomePage() {
  const user = await getCurrentUserAction()
  
  if (user) {
    redirect('/dashboard/dashboard')
  } else {
    redirect('/login')
  }
}