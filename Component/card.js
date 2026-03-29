export default function Card({ user }) {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4 flex items-center gap-4 border border-gray-100 hover:border-blue-200">
            {/* Profile Image */}
            <img 
                className="w-16 h-16 rounded-full border-2 border-blue-500 object-cover" 
                src={user.avatar_url} 
                alt={`${user.login}'s avatar`}
            />
            
            {/* User Info */}
            <div className="flex-1">
                <h3 className="font-semibold text-gray-800 text-lg">
                    {user.login}
                </h3>
                <a 
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm inline-flex items-center gap-1 transition-colors"
                >
                    github.com/{user.login}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>
            
            {/* Optional: User ID Badge */}
            <div className="hidden sm:block">
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                    ID: {user.id}
                </span>
            </div>
        </div>
    );
}














// export default function Card({user}){

//     return(
//        <div className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4 flex items-center gap-4 border-gray-100 hover:border-blue-400"> 

//            <img className="w-16 h-16 rounded-full border-2 border-blue-500 object-cover" src={user.avatar_url} alt={`${user.login}'s avatar`}></img>

//            <div className="flex-1">
              
//            </div>
//            <a href={user.html_url}>github.com/{user.login}</a>
//        </div>
//     )
// }