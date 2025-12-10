export default function TaskModal() {
    return (
        <div className="fixed inset-0 backdrop-blur-sm items-center justify-center z-50 hidden">
            <div className="bg-white border border-zinc-200 rounded-xl shadow-lg w-[30rem] p-10 relative">
       
                <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>

                <div className="flex items-center gap-2 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v2m0 16v2m8-10h2M2 12H4m14.364-6.364l1.414 1.414M4.222 19.778l1.414-1.414M19.778 19.778l-1.414-1.414M4.222 4.222l1.414 1.414"/>
                    </svg>
                    <h2 className="text-lg font-semibold text-gray-700">اضافه کردن تسک</h2>
                </div>


                <input type="text" placeholder="تسک خود را وارد کنید" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-700 mb-4"/>


                <div className="flex items-center mb-4">
                    <input id="important" type="checkbox" name="priority" className="mx-2"/>
                    <label for="important" className="ml-2 text-gray-700 scale-110">مهم</label>
                </div>


                <button className="w-full bg-zinc-800 hover:bg-zinc-900 text-white font-semibold py-2 px-4 rounded-md transition-colors">
                    اضافه کن
                </button>
            </div>
        </div>

    )
}