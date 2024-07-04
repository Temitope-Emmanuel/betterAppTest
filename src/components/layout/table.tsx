export const Table = () => {
    return (
        <table className="min-w-full divide-y divide-gray-700 overflow-scroll">
            <thead className="text-[8px]">
                <tr>
                    <th scope="col" className="py-1 md:py-3 text-left font-medium text-[#8B8B8B] uppercase tracking-wider">Rank</th>
                    <th scope="col" className="px-1 md:px-6 py-1 md:py-3 text-left font-medium text-[#8B8B8B] uppercase tracking-wider">Title</th>
                    <th scope="col" className="px-1 md:px-6 py-1 md:py-3 text-left font-medium text-[#8B8B8B] uppercase tracking-wider">Artist</th>
                    <th scope="col" className="px-1 md:px-6 py-1 md:py-3 text-left font-medium text-[#8B8B8B] uppercase tracking-wider">Streams</th>
                    <th scope="col" className="px-1 md:px-6 py-1 md:py-3 text-left font-medium text-[#8B8B8B] uppercase tracking-wider">Release Date</th>
                </tr>
            </thead>
            <tbody className="text-[10px] text-white">
                {[1, 2, 3, 4, 5].map((item, idx) => (
                    <tr key={idx}>
                        <td className="pr-4 md:pr-12 py-1 md:py-4 whitespace-nowrap">{item}</td>
                        <td className="px-1 md:px-6 py-1 md:py-4 whitespace-nowrap flex items-center">
                            <img src="/images/Music-Icon.png" alt="icon" className="size-[20px] md:size-[30px] mr-3" />
                            <span>We Deserve Bettr...</span>
                        </td>
                        <td className="px-1 md:px-6 py-1 md:py-4 whitespace-nowrap">DJ HopeStar</td>
                        <td className="px-1 md:px-6 py-1 md:py-4 whitespace-nowrap">405k</td>
                        <td className="px-1 md:px-6 py-1 md:py-4 whitespace-nowrap">July 29, 2022</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}