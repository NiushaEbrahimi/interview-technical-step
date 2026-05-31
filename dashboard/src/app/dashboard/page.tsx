import { getCurrentUserAction } from '@/_lib/authServerActions'
import { redirect } from 'next/navigation'

export default async function DashboardIndexPage() {
  const user = await getCurrentUserAction()
  
  if (!user) {
    redirect('/login')
  }
  
  redirect('/dashboard/dashboard')
}