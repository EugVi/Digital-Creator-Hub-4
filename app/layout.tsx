export const metadata = {
  title: 'Digital Creator Hub',
  description: 'Dashboard com autenticação via Firebase',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  )
}
