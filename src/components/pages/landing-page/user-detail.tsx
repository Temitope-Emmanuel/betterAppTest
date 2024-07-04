import { Icon, Socials } from "@/assets/icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const socialOptions: Socials[] = ["instagram", "twitter", "facebook", "youtube", "deezer"]

export const UserDetail = () => {
    return (
        <div className="flex flex-col md:flex-row mb-[69px]">
            <div className="md:mr-[50px]">
                <Avatar className="size-36 md:size-[118px] mb-5">
                    <AvatarImage className="object-cover" src={"images/Nasty-C-2.jpg"} alt="avatar" />
                    <AvatarFallback>NC</AvatarFallback>
                </Avatar>
                <span className="text-[#929292] flex items-center space-x-[5px]">
                    <p>@NastyC</p>
                    <Icon name="clipboard" width={8} />
                </span>
                <span className="space-x-[5px] text-white flex items-center">
                    <p className="text-[32px]">Nasty C</p>
                    <Icon name="verified" width={25} />
                </span>
            </div>
            <div>
                <div className="flex items-start space-x-[25px]">
                    <div>
                        <p className="mb-[7px] text-[10px]">Following</p>
                        <p className="text-[20px]">250</p>
                    </div>
                    <div>
                        <p className="mb-[7px] text-[10px]">Followers</p>
                        <p className="text-[20px]">15.1M</p>
                    </div>
                    <div className="flex space-x-2.5 items-center">
                        <Button className="py-2.5 px-5 bg-white text-black">Edit Profile</Button>
                        <div className="">
                            <Icon name="link" width={30} />
                        </div>
                    </div>
                </div>
                <div>
                    <p className="max-w-xs md:max-w-sm text-[13px]">
                        David Junior Ngcobo, who is more popularly known as Nasty C,
                        is the voice of his generation. The multi-award winning South African...
                        <br />
                        <span className="font-bold cursor-pointer">Read More</span>
                        <span className="flex mt-4">
                            <p>In partnership with</p>
                            <p className="font-bold">&nbsp;@Tallracks</p>
                            <p className="font-bold">&nbsp;@CocaCola</p>
                        </span>
                    </p>
                    <div className="flex flex-col-reverse md:flex-row md:space-x-[15px] my-[15px]">
                        <span className="flex items-center space-x-[7px]">
                            <Icon name="gradient-link" width={6} />
                            <p>ivsyosnarmy.com</p>
                        </span>
                        <span className="flex items-center space-x-2.5">
                            <Icon name="location" width={20} />
                            <p>Cape Town, South Africa</p>
                            <Icon name="south-africa" width={20} />
                        </span>
                    </div>
                    <div className="flex space-x-[15px]">
                        {socialOptions.map((item, idx) => (
                            <Icon key={idx} name={item} width={15} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}