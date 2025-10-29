const Footer = () => {
    return (
        <div className="py-24 bg-blue-50">
            <div className="grid grid-cols-4 max-w-5xl mx-auto px-4 gap-8">
                <div className="md:col-span-2">
                    © {new Date().getFullYear()} Kevin van der Heijden
                </div>
                <div>
                    <h4 className="font-bold">Socials</h4>
                    <ul>
                        <li>
                            <a href="https://linkedin.com/in/kevinvdheijden">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/DAQEM">GitHub</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold">Links</h4>
                    <ul>
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
                </div>
            </div>
        </div>
    );
};

export default Footer;
