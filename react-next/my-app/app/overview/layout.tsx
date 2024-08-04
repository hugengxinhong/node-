import Nav from '../components/Nav';
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex mt-4 space-x-6">
      <Nav/>
      <main className="w-full border border-green-600 p-4">{children}</main>
    </div>
  )
}