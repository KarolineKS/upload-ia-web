import { Github } from "lucide-react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";

export function App() {
  return (
   <div className="min-h-screen flex flex-col">
    <div className="px-6 py-3 flex items-center justify-between border-b">
      <h1 className="text-2xl font-bold ">upload.ia</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">
          Desenvolvido com 💜 por Karoline Kohls Stangherlin
        </span>

        <Separator orientation='vertical' className='h-7'/>

        <Button>
          <Github className="w-4 h-4 mr-2"/>
          GitHub
        </Button>
      </div>
    </div>

    <div className="flex-1">
      oi
    </div>
   </div>
  )
}


