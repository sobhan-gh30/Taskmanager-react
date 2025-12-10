export default function TaskCart({ title, description, important, done }) {
    return (
        <div className="w-full h-fit mb-5 min-h-26 border border-zinc-200 rounded shadow-md flex flex-col md:flex-row p-4 gap-4">

            {/* متن تسک */}
            <div className="md:w-3/4">
                <h2 className="font-bold text-lg mb-2">{title}</h2>
                <p>{description}</p>
            </div>

            {/* وضعیت‌ها و دکمه‌ها */}
            <div className="flex flex-col md:flex-row items-center justify-between md:w-1/4 gap-3">

                {/* برچسب‌ها */}
                <div className="flex gap-2">
                    {done && (
                        <p className="text-green-600 bg-green-200 rounded px-2 py-1 text-sm">
                            تکمیل شده
                        </p>
                    )}
                    {important && (
                        <p className="text-amber-500 bg-amber-100 rounded px-2 py-1 text-sm">
                            مهم
                        </p>
                    )}
                </div>

                {/* دکمه‌ها */}
                <div className="flex justify-center gap-4">
                    <button className="text-xl">✅</button>
                    <button className="text-xl">❌</button>
                </div>
            </div>
        </div>
    );
}
