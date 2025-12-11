import Navbar from "./componenst/navbar.jsx";
import TaskModal from "./componenst/taskModal.jsx";
import {useState} from "react";
import TaskCart from "./componenst/taskCarts.jsx";

function App() {

    let [tasks, setTasks] = useState([
            {
                "id": 1,
                "title": "نوشتن اندپوینت API",
                "description": "پیاده‌سازی احراز هویت کاربر همراه با رفرش توکن",
                "important": true,
                "done": false
            },
            {
                "id": 2,
                "title": "رفع باگ UI",
                "description": "حل مشکل عدم جمع شدن سایدبار در حالت موبایل",
                "important": false,
                "done": true
            },
            {
                "id": 3,
                "title": "مهاجرت دیتابیس",
                "description": "ایجاد جدول جدید برای ذخیره لاگ فعالیت‌ها و نوشتن اسکریپت مهاجرت",
                "important": true,
                "done": false
            },
            {
                "id": 4,
                "title": "به‌روزرسانی مستندات",
                "description": "بازنویسی فایل README شامل مراحل نصب و متغیرهای محیطی",
                "important": false,
                "done": false
            },
            {
                "id": 5,
                "title": "بهینه‌سازی کوئری",
                "description": "افزایش سرعت کوئری مربوط به آمار داشبورد",
                "important": true,
                "done": true
            }
        ]);
    let [modalOpen, setModalOpen] = useState(false);
    let [filter, setFilter] = useState("all");
    console.log(tasks);
    function openModal() {
        setModalOpen(true);
    }
    function closeModal() {
        setModalOpen(false);
    }
    function addFilter(filter) {
        setFilter(filter);
    }
    function addTask(newTitle, newDescription, isImportant) {
        setTasks(prev => [
            ...prev,  // کپی همه آیتم‌های قبلی
            { id: prev.length + 1, title: newTitle, description: newDescription, done: false, important: isImportant }  // آیتم جدید
        ]);
    }
    function removeTask(taskId) {
        setTasks(prev => {
            return prev.filter(item => item.id !== taskId);
        });
    }
    function taskDone(taskId) {
        setTasks((perv)=>{
            return perv.map(item => {return  item.id === taskId ? {...item , done: true } : item; });
        });
    }
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
                            <select onChange={() => {
                                addFilter(document.getElementById("selectFilter").value)
                            }} id="selectFilter" className="py-1 px-3 bg-white rounded border-2">
                                <option value="all">نمایش همه</option>
                                <option value="important">مهم ها</option>
                            </select>

                            <button onClick={() => {
                                openModal()
                            }} className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white">
                                ایجاد تسک جدید +
                            </button>
                        </div>
                    </div>
                </header>
                <main className={"container mx-auto py-2"}>
                    <h2 className={"font-bold my-5"}>لیست تسک ها</h2>
                    <TaskModal modalOpen={modalOpen} onClose={closeModal} addTask={addTask}/>
                    <div className={"mb-10"}>
                        {
                            tasks.filter((task) => {
                                if (filter === "important") {
                                    return task.important && !task.done;
                                } else {
                                    return !task.done;
                                }
                            }).map((task) => {
                                return (
                                    <TaskCart taskDone={taskDone} onRemove={removeTask} {...task} key={task.id}/>
                                )
                            })
                        }
                    </div>
                    <h2 className={"font-bold my-5"}>تسک های انجام داده شده</h2>
                    <div className={"mb-5"}>
                        {
                            tasks.filter((task) => {
                                return task.done === true;
                            }).map((task) => {
                                return (
                                    <TaskCart {...task} key={task.id}/>
                                )
                            })
                        }
                    </div>
                </main>
            </>
        )
    }


export default App;