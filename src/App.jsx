import Navbar from "./componenst/navbar.jsx";
import TaskModal from "./componenst/taskModal.jsx";

function App() {
  return (
    <>
        <header className="container mx-auto border-b-3 border-gray-200">
            <Navbar/>
            <div className="mt-20">
                <h1 className="font-bold text-2xl">
                    <span className={"scale-150 inline-block ml-5"}> ⌛</span>
                    <span>مدیریت و برنامه ریزی</span>
                </h1>
                <p className={"my-5 text-xl"}>
                    <span>
                        با یک تسک منیجر حرفه ای خیلی بهتر میتونی زمانتو مدیریت کنی و به هدفای بزرگت خیلی راحت تر میرسی
                    </span>
                    <span className={'scale-120 inline-block mr-5'}>
                        😉✌️
                    </span>
                </p>
                <div className="mt-20 mb-2 flex items-center justify-end gap-5">
                    <select id="" className="py-1 px-3 bg-white rounded border-2">
                        <option value="all">نمایش همه</option>
                        <option value="all">انجام نشده ها</option>
                        <option value="all">مهم ها</option>
                        <option value="all">انجام شده ها</option>
                    </select>

                    <button className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white">
                        ایجاد تسک جدید +
                    </button>
                </div>
            </div>
        </header>
        <main>
            <TaskModal/>
        </main>
    </>
  )
}

export default App
