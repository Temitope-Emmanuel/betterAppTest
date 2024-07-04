import { ScrollArea } from "@/components/ui/scroll-area";

export const ContentAnalytics: React.FC<{
    contentOptions: {
        color: string;
        header: string;
        detail: string;
    }[]
}> = ({ contentOptions }) => {
    return (
        <div className="flex flex-col items-center">
            <h3 className="font-semibold text-xl mb-[27px]">Content Analytics</h3>
            <div className="space-x-10 md:space-x-[76px] flex">
                {contentOptions.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <div className="flex items-center">
                            <div style={{
                                backgroundColor: item.color
                            }} className={`rounded-full size-2 mr-[6px]`} />
                            <p className="text-xs">{`${item.header}:`}</p>
                        </div>
                        <span className="text-xl">{item.detail}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}