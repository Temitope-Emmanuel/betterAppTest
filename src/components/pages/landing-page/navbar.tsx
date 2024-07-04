import { Icon } from "@/assets/icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const Navbar = () => {
    return(
        <nav className="relative z-10 py-[20px] w-full flex justify-between items-center">
        <span className="text-white text-2xl md:text-4xl">Tallracks</span>
        <Input className={`rounded-full hidden md:block overflow-hidden text-white w-1/5
            bg-white bg-clip-padding backdrop-filter backdrop-blur-[20px] bg-opacity-5
             gradient-box border-[1px] border-[#FFFFFF80]`} placeholder="search..." />
        <div className="flex items-center space-x-[20px]">
          <Button>Create</Button>
          <Icon name="send" width={18} />
          <div className="relative">
            <div className="size-2 bg-[#0000FF] animate-ping rounded-full absolute top-0 right-0" />
            <Icon name="notification" width={18} />
          </div>
          <div className="relative">
            <div className="size-2 bg-[#0000FF] animate-ping rounded-full absolute top-0 right-0" />
            <Icon name="message" width={18} />
          </div>
          <Avatar className="cursor-pointer hidden sm:block">
            <AvatarImage className="object-cover" src={"images/Nasty-C-2.jpg"} alt="avatar" />
            <AvatarFallback>NC</AvatarFallback>
          </Avatar>
        </div>
      </nav>
    )
}