export const Table = () => {
    return (
        <table className="min-w-full divide-y divide-gray-700 overflow-scroll">
            <thead>
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Rank</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Title</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Artist</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Streams</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Release Date</th>
                </tr>
            </thead>
            <tbody className=" divide-y divide-gray-700">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, idx) => (
                    <tr key={idx}>
                        <td className="px-6 py-4 whitespace-nowrap">{idx+1}</td>
                        <td className="px-6 py-4 whitespace-nowrap flex items-center">
                            <img src="/images/Music-Icon.png" alt="icon" className="h-10 w-10 mr-3" />
                            <span>We Deserve Bettr...</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">DJ HopeStar</td>
                        <td className="px-6 py-4 whitespace-nowrap">405k</td>
                        <td className="px-6 py-4 whitespace-nowrap">July 29, 2022</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}