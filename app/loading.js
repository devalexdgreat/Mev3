export default function Loading() {
    return (
        <div className="bg-black h-screen w-full flex justify-center items-center fixed top-0 z-50">
            <div className="text-white uppercase flex flex-col gap-1">
                <h1 className="font-medium text-3xl text-green-500">Great Alexander (ADG).</h1>
                <p className="text-gray-200 text-sm">Loading...</p>
            </div>
        </div>
    );
}