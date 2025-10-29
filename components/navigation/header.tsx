const Header = () => {
    return (
        <header className="sticky top-12 z-50 my-12">
            <nav className="max-w-max mx-auto bg-white/20 border border-white/20 rounded-full backdrop-blur-md">
                <ul className="flex gap-8 px-8 py-4">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/#about">About</a>
                    </li>
                    <li>
                        <a href="/#my-work">My Work</a>
                    </li>
                    <li>
                        <a href="/#expertise">Expertise</a>
                    </li>
                    <li>
                        <a href="/#education">Education</a>
                    </li>
                    <li>
                        <a href="/#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
