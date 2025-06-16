
import AuthGuard from '@/components/AuthGuard'

export default function Page() {
  return (
    <AuthGuard>
      <div className="p-8 text-center text-2xl font-bold">
        🎉 Bem-vindo ao Digital Creator Hub!
      </div>
    </AuthGuard>
  )
}
