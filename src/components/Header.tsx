import CodingFactoryLogo from "./CodingFactoryLogo.tsx";


const Header = ()  => {
    return (
        <>
            <header className="bg-[#782024] fixed w-full">
                <div className="container mx-auto px-4 flex items-center justify-between items-center">
                    <CodingFactoryLogo/>
                    <a className="text-white hover:underline hover:underline-offset-1" href="/">Home</a>
                </div>
            </header>
        </>
    )
}

export default Header;