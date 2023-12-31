import { FileVideo, Github, Upload, Wand2 } from "lucide-react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Slider } from "./components/ui/slider";

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
      <aside className="w-80 space-y-6">
        <form className="space-y-6">
          <label 
            htmlFor="video"
            className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
          >
            <FileVideo className="w-5 h-5"/>
            Selecione um vídeo
          </label>

          <input type="file" id="video" accept="video/mp4" className="sr-only" />

          <Separator />

          <div className="space-y-2">
            <Label htmlFor="transcription_prompt">Prompt de transcrição</Label>
            <Textarea 
             id="transcription_prompt" 
             className="h-20 leading-relaxed resize-none"
             placeholder="Inclua palavras-chave mencionadas no vídeo separadas por vírgula (,)"
            />
          </div>

          <Button type="submit" className="w-full">
            Carregar vídeo
            <Upload className="h-4 w-4 ml-2"/>
          </Button>
        </form>

        <Separator />

        <form className="space-y-6">
        <div className="space-y-2">
            <Label>Prompt</Label>
            <Select >
              <SelectTrigger>
                <SelectValue placeholder="Selecione um prompt..."/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="title">Título do YouTube</SelectItem>
                <SelectItem value="description">Descrição do YouTube</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Modelo</Label>
            <Select defaultValue="gpt3" disabled>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt3">GPT 3.5-turbo 16k</SelectItem>
              </SelectContent>
            </Select>
            <span className="block text-xs text-muted-foreground italic">
              Você poderá customizar está opção em breve
            </span>
          </div>

          <Separator />

          <div className="space-y-4">
            <Label>Temperatura</Label>
            <Slider 
              min={0}
              max={1}
              step={0.1}
            />
            <span className="block text-xs text-muted-foreground italic leading-relaxed">
              Valores mais altos tendem a deixar o resultado com valores mais criativos e com possíveis erros.
            </span>

            <Separator />

            <Button type="submit" className="w-full">
              Executar
              <Wand2 className="h-4 w-4 ml-2"/>
            </Button>
          </div>
        </form>
      </aside>
    </main>
   </div>
  )
}


