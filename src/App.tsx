import { Github } from "lucide-react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";

export function App() {
  return (
   <div className="min-h-screen flex flex-col">
    <header className="px-6 py-3 flex items-center justify-between border-b">
      <h1 className="text-xl font-bold ">upload.ia</h1>

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
    </header>

    <main className="flex-1 p-5 flex justify-center gap-6">
      <section className="flex flex-1 flex-col gap-4">
        <div className="grid grid-rows-2 gap-4 flex-1">
          <Textarea
           className="resize-none p-5 leading-relaxed"
           placeholder="Inclua o prompt para a IA..."
          />
          <Textarea
           className="resize-none p-5 leading-relaxed"
           placeholder="Resultado gerado pela IA... "
           readOnly
          />
        </div>

        <p className="text-sm text-muted-foreground">
          Lembre-se: você pode utilizar a variável 
          <code className="text-violet-400">{` {transcription} `}</code>
          no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado.
        </p>
      </section>
      <aside className="w-96 bg-green-500"></aside>
    </main>
   </div>
  )
}


