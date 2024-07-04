import { Icon, IconProps } from "@/assets/icons";

const navOptions: IconProps['name'][] = ['home', 'stat', 'music', 'add', 'store', 'wallet', 'setting'];
const navOptions2: IconProps['name'][] = ["information", "dashboard"]

export const NavOptions = () => {
    return (
        <div className="hidden lg:flex flex-col justify-between">
            <div className="rounded-[15px] h-fit px-[10px] py-[15px] space-y-[30px] bg-white bg-opacity-5 bg-clip-padding backdrop-filter backdrop-blur-[40px] gradient-box border-[1px] border-[#FFFFFF80]">
                {navOptions.map((item, idx) => (
                    <Icon key={idx} name={item} width={20} />
                ))}
            </div>
            <div className="rounded-[15px] h-fit px-[10px] py-[15px] space-y-[30px] bg-white bg-opacity-5 bg-clip-padding backdrop-filter backdrop-blur-[40px] gradient-box border-[1px] border-[#FFFFFF80]">
                {navOptions2.map((item, idx) => (
                    <Icon key={idx} name={item} width={20} />
                ))}
            </div>
        </div>
    )
}