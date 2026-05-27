import { Button } from "@/components/ui/button"

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          Bobby Portfolio V2
        </h1>

        <p className="mt-4 text-zinc-400">
          React + Tailwind + shadcn is working.
        </p>

        <Button className="mt-6">
          View My Work
        </Button>
      </div>
    </main>
  )
}

export default App