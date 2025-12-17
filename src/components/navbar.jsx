export default function Navbar() {
    return (

        <nav className="bg-neutral-primary w-full z-20">
            <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://github.com/sobhan-gh30" target={"_blank"}
                   className="flex items-center justify-center md:justify-start">
                    <span className="self-center text-xl text-heading font-semibold whitespace-nowrap flex items-center gap-2">
                        <span className="hidden md:inline">توسعه داده شده توسط</span>
                        <span className="text-blue-900 inline-block hover:scale-105">Sobhan-gh30</span>
                    </span>
                </a>

                <div className="w-full md:w-auto">
                    <ul className="flex justify-between items-center gap-3">
                        <li  className={"hover:scale-110 transition duration-100"}>
                            <a href="#">خانه</a>
                        </li>
                        <li  className={"hover:scale-110 transition duration-100"}>
                            <a href="">درباره</a>
                        </li>
                        <li  className={"hover:scale-110 transition duration-100"}>
                            <a href="https://github.com/sobhan-gh30">گیت هاب</a>
                        </li>
                        <li  className={"hover:scale-110 transition duration-100"}>
                            <button>ارتباط با ما</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}