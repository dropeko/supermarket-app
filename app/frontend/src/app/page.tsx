import { Separator } from "../components/ui/separator"
import { Button } from "../components/ui/button"
import { Github, Wand2, Computer, ShoppingCart, ShoppingBasketIcon } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-6 py-3 flex items-center justify-between border-b">

        <h1 className="text-xl font-bold flex items-center">
            <Computer 
              className="w-4 h-4 mr-2"
            />
            PHCA.dev
          </h1>

          <div className="flex">
            <h1 className="text-xl font-bold mr-1">Atacadão BH</h1>
            <ShoppingBasketIcon />
          </div>

          <div className="flex items-center gap-3">
            <h3 className=" font-bold">Login:</h3>
            <form action="">
              <input type="email" placeholder="Email" className=" mr-1 w-16 text-sm text-black"></input>
              <input type="password" placeholder="Senha" className=" mr-1 w-16 text-sm text-black round"/>
              <Button type="submit" className=" text-white h-6 border rounded-xl">
                Entrar
              </Button>
            </form>
          </div>

        </header>

        <main className="flex-1 flex-col p-6 flex gap-6 items-center">
          <h1 className=" font-bold">Seja muito bem-vindo</h1>
          <ShoppingCart className=" h-8 w-8" />

        </main>

    </div>
  )
}
