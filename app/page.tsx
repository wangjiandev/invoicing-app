import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="mx-auto flex h-full max-w-5xl flex-col justify-center gap-4">
      <h1 className="text-3xl font-bold">Invoicipedia</h1>
      <p>
        <Button asChild>
          <Link href="/dashboard">dashboard</Link>
        </Button>
      </p>
    </main>
  )
}
