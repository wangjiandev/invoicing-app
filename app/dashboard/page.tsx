import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CirclePlus } from 'lucide-react'
import Link from 'next/link'

const DashboardPage = () => {
  return (
    <main className="mx-auto my-12 flex h-full max-w-5xl flex-col justify-center gap-4 text-center">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Invoices</h1>
        <p>
          <Button variant="ghost" className="inline-flex gap-2" asChild>
            <Link href="/invoices/new">
              <CirclePlus className="h-4 w-4" />
              Create Invoice
            </Link>
          </Button>
        </p>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px] p-4 text-left">Date</TableHead>
            <TableHead className="p-4 text-left">Costomer</TableHead>
            <TableHead className="p-4 text-left">Email</TableHead>
            <TableHead className="p-4 text-center">Status</TableHead>
            <TableHead className="p-4 text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="p-4 text-left font-medium">
              <span>2024-11-03</span>
            </TableCell>
            <TableCell className="p-4 text-left">
              <span>Wang Jian</span>
            </TableCell>
            <TableCell className="p-4 text-left">
              <span>wangjian0504@gmail.com</span>
            </TableCell>
            <TableCell className="p-4 text-center">
              <Badge className="rounded-full">Open</Badge>
            </TableCell>
            <TableCell className="p-4 text-right">
              <span>$250.00</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  )
}

export default DashboardPage
