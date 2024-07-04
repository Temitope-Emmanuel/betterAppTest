import { Icon } from "@/assets/icons"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const dropdownOptions = ["Dashboard", "Fanbase", "Engagement", "Revenue", "Releases", "Collectibles"]

export const DropdownOptions: React.FC<{
    activeDropdown: string;
    setActiveDropdown: (arg: string) => void;
}> = ({activeDropdown, setActiveDropdown}) => {
    return (
        <div className="flex mb-[42px] py-1 overflow-scroll flex-wrap">
            {dropdownOptions.map((item, idx) => (
                <DropdownMenu key={idx} onOpenChange={(open) => setActiveDropdown(open ? item : "")}>
                    <DropdownMenuTrigger
                        className={`rounded-full px-3 md:px-5 mb-2 mr-2 md:mr-5 py-2.5 space-x-[5px] items-center ${activeDropdown === item ? "bg-white flex text-black" : "text-white flex bg-white/10"}`}>
                        <p className="text-sm md:text-base">{item}</p>
                        <div className={activeDropdown === item ? "rotate-180" : ""}>
                            {
                                activeDropdown === item ?
                                <Icon name="arrow-down-black" width={5} /> :
                                <Icon name="arrow-down" width={5} />
                            }
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Lorem ipsum dolor sit. <br/> Velit, voluptate.</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Option 1</DropdownMenuItem>
                        <DropdownMenuItem>Option 2</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            ))}
        </div>
    )
}