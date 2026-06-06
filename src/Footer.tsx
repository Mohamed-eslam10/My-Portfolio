
export default function Footer() {
    const footerList = [
        'home',
        'about',
        'skills',
        'contact'
    ]
    return (
        <div className=" bg-slate-900">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4  p-5">
                <div className="flex flex-col gap-1">
                    <h1 className="text-white font-bold">Mohamed Eslam</h1>
                    <p className="text-slate-300 text-sm ">Frontend Developer passionate about creating beautiful and functional web experiences.</p>
                </div>
                <div>
                    <p className="text-white font-medium mb-2">Quick Links</p>
                    <div className="flex flex-col">
                        {footerList.map((item) => <a key={item} href={`#${item}`} className="text-slate-200 hover:text-white">{item}</a>
                        )}
                    </div>
                </div>
                <div>
                    <p className="text-slate-300 text-sm mt-3">Built with ❤️ React and Tailwind CSS © 2026 Mohamed Eslam. All rights reserved.</p>

                </div>
            </div>
        </div>
    )
}
