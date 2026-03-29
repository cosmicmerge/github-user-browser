export default function Header() {
    return (
        <header className="bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo and Title */}
                    <div className="flex items-center gap-3">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.21.68-.48 0-.24-.01-.88-.01-1.73-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.62 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.36.2 2.37.1 2.62.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"/>
                        </svg>
                        <div>
                            <h1 className="text-xl font-bold">GitHub Explorer</h1>
                            <p className="text-xs text-purple-200">Discover GitHub users</p>
                        </div>
                    </div>

                    {/* Stats or Info */}
                    <div className="hidden md:flex items-center gap-4">
                        <div className="text-right">
                            <div className="text-xs text-purple-200">GitHub API</div>
                            <div className="text-sm font-semibold">REST API v3</div>
                        </div>
                    </div>

                    {/* Mobile Menu Button (Optional) */}
                    <button className="md:hidden p-2 hover:bg-purple-700 rounded-lg transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}




















// export default function Header(){
//      return(
//         <div className="h-1/16 bg-purple-400">
//             This is the header part of the project
//         </div>
//      )
// }