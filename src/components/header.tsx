import Image from "next/image";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import { ToggleTheme } from "./ui/toggle-theme";
import vercelIcon from '../app/assets/vercel.svg';

export function Header() {
  return (
    <header className='flex h-16 items-center justify-between'>
      <div className='flex items-center justify-center gap-2 font-semibold text-2xl'>
        <Image
          src={vercelIcon}
          className='size-6 invert dark:invert-0'
          alt='Vercel'
        />
        <span>AstroDev</span>
      </div>
      <div className='flex items-center justify-between gap-10'>
        <NavigationMenu>
          <NavigationMenuList className='font-medium'>
            <NavigationMenuItem>
              <NavigationMenuLink href='#planodevoo'>
                Plano de Voo
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ToggleTheme />
      </div>
    </header>
  )
}