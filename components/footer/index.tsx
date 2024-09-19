
const Footer =()=>{
    return(
        <div className="bg-yellow-500">
            <h1 className="text-green-600">Jayam Organics</h1>
            <div className="relative mx-auto">
            <input
                className="border-2 border-secondary w-3/4 md:w-1/4 lg:w-1/2 py-3 px-4 rounded-full"
                type="number"
                placeholder="Your Email"
            />
            <button
                type="submit"
                className="absolute top-0 right-[50%] border-2 border-secondary py-3 px-4 rounded-full text-white bg-green-700 hover:bg-green-800"
            >
                Subscribe Now
            </button>
        </div>
        </div>
    )
}

export default Footer