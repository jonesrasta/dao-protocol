import type { ReactNode } from "react"


type Props = {
  children: ReactNode
}

export default function AppLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <header className="border-b border-gray-800 p-4">
        <h1 className="text-xl font-bold">DAO Protocol</h1>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        {children}
      </main>
    </div>
  )
}
