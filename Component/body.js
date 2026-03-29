import { useEffect, useState } from "react";
import Card from "./card";

export default function Body() {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [cnt, setCnt] = useState(30);   
    const [ivalue,setIvalue]=useState("");

    const [msg,setMsg]=useState("");


    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                setLoading(true);

                const response = await fetch(
                    `https://api.github.com/users?per_page=${cnt}`
                );

                if (!response.ok) {
                    throw new Error(`HTTP ERROR! status: ${response.status}`);
                }

                const data = await response.json();
                setProfiles(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                console.log("Error caught:", err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProfiles();
    }, [cnt]);

    // Loading State
    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mb-4"></div>
                <p className="text-gray-600 text-lg">Loading GitHub Profiles...</p>
                <p className="text-gray-400 text-sm mt-2">
                    Fetching users from GitHub API
                </p>
            </div>
        );
    }

    // Error State
    if (error) {
        return (
            <div className="flex flex-col items-center justify-center py-20 px-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md text-center">
                    <svg
                        className="w-16 h-16 text-red-500 mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>

                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        Error Loading Profiles
                    </h2>

                    <p className="text-gray-600 mb-4">{error}</p>

                    <button
                        onClick={() => window.location.reload()}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    // Success State
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-8">

                {/* Header Section */}
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-2">

                        <h2 className="text-2xl font-bold text-gray-800">
                            GitHub Users
                        </h2>

                        {/* Search Section */}
                        <div className="flex items-center gap-3">
                            <input
                                type="number"
                                value={ivalue}
                                onChange={(e) =>
                                    setIvalue(e.target.value)
                                }
                                placeholder="Enter number"
                                className="w-36 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white text-gray-700"
                            />

                            <button
                                onClick={() =>{
                                    const num=ivalue==="" ?30:parseInt(ivalue);

                                    if( num<1 || num>100){
                                        setMsg("Please enter a number between 1 and 100");
                                        return;
                                    }

                                    setMsg("");
                                    setCnt(num);
                                }}
                                className="px-5 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 active:scale-95 transition-all duration-200"
                            >
                                Search
                            </button>
                            {msg && (
                                <p className="text-red-500 text-sm mt-2">{msg}</p>
                             )}
                        </div>

                        {/* User Count */}
                        <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                            {profiles.length} users found
                        </div>
                    </div>

                    <p className="text-gray-600">
                        Browse through GitHub's user directory
                    </p>
                </div>

                {/* Users Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {profiles.map((user) => (
                        <Card key={user.id} user={user} />
                    ))}
                </div>
            </div>
        </div>
    );
}



























// import { useEffect, useState } from "react";
// import Card from "./card";


// export default function Body(){
//     const [profiles,setProfiles]=useState([]);
//     const [loading,setLoading]=useState(true);
//     const [error,setError]=useState(null);

//     useEffect(()=>{

//         const fetchProfiles=async ()=>{
//            try{
//             const response=await fetch("https://api.github.com/users");

//             if(!response.ok){
//                 throw new Error(`HTTP ERROR! status: ${response.status}`);
//             }

//             const data=await response.json();
//             setProfiles(data);
//             setError(null);
//            }
//            catch(err){
//             setError(err.message);
//             console.log("Error caught in the catch block",err.message);
//            }
//            finally{
//             setLoading(false);
//            }
//         }
//          fetchProfiles();
//     },[]);


//     if(loading) {
//         return <div>loading Github Profiles...</div>
//     }

//     if(error){
//         return(
//             <div>
//                 <h2>Error loading profiles...</h2>
//                 <p>{error}</p>
//                 <button onClick={()=>window.location.reload()}></button>
//             </div>
//         )
//     };


//     return(
//         <div>
//             <h1>Github Users</h1>
//             <ul>
//                 {
//                     profiles.map((user,index)=><Card key={index} user={user}></Card>)
//                 }
//             </ul>
//         </div>
//     )
// }