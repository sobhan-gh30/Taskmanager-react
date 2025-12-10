export default function TaskCart({title , description, important, done}) {
    return (
        <div className={"w-full h-fit mb-5 min-h-26 border-zinc-200 border rounded shadow-md flex items-center justify-center"}>
            <div className="w-3/4 p-5">
                <h2 className={"font-bold text-lg mb-2"}>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="flex items-center justify-center w-1/4 gap-2">
                {
                    done ? <p className={"text-green-600 bg-green-200 rounded w-24 text-center"}>تکمیل شده</p>:''
                }
                {
                    important ? <p className={"text-amber-500 bg-amber-100 rounded w-24 text-center"}>مهم</p>:''
                }


            </div>
        </div>
    )
}