import Image from 'next/image'
import facebookIcon from '../app/assets/facebook.svg'
import whatsAppIcon from '../app/assets/whatsapp.svg'

export function Footer() {
  return (
    <footer className="border-t border-zinc-700 py-8 text-sm">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-3 sm:max-w-sm">
          <h2 className="text-xl font-semibold">AstroDev</h2>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Architecto excepturi inventore nemo illum dicta? Modi iure 
            quasi iste, fugiat voluptates perferendis obcaecati.
          </p>
        </div>

        <div className="space-y-3 sm:max-w-sm">
          <h3 className="text-xl font-semibold">Contato</h3>
          <ul className="space-y-1 text-muted-foreground">
            <li>(41) 99999-9999</li>
            <li>dev@development.com.br</li>
          </ul>
          <div className="mt-2 flex items-center gap-3">
            <Image
              className="size-4 cursor-pointer transition-transform hover:scale-110"
              src={facebookIcon}
              alt="facebook icon"
            />
            <Image
              className="size-4 cursor-pointer transition-transform hover:scale-110"
              src={whatsAppIcon}
              alt="WhatsApp icon"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 w-full max-w-5xl px-4 text-center text-xs text-zinc-500">
        <p>
          © {new Date().getFullYear()} AstroDev. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
