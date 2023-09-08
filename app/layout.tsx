import { TodoContextProvider } from "./context/TodoContext"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <TodoContextProvider>
          {children}
        </TodoContextProvider>
      
      </body>
    </html>
  )
}