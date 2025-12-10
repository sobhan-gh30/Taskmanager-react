import Navbar from "./componenst/navbar.jsx";

function App() {
  return (
    <>
        <header className="container mx-auto">
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
            </div>
        </header>
    </>
  )
}

export default App
