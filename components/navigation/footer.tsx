import Link from "next/link";

const Footer = () => {
    return (
        <div className="py-32 bg-blue-50">
            <div className="grid grid-cols-4 max-w-5xl mx-auto px-4 gap-8">
                <div className="md:col-span-2">
                    © {new Date().getFullYear()} Kevin van der Heijden
                </div>
                <div>
                    <h4 className="font-bold">Socials</h4>
                    <ul>
                        <li>
                            <Link
                                href="https://linkedin.com/in/kevinvdheijden"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://github.com/DAQEM"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold">Links</h4>
                    <ul>
                        <li>
                            <Link href="/#about">About</Link>
                        </li>
                        <li>
                            <Link href="/#my-work">My Work</Link>
                        </li>
                        <li>
                            <Link href="/#expertise">Expertise</Link>
                        </li>
                        <li>
                            <Link href="/#education">Education</Link>
                        </li>
                        <li>
                            <Link href="/#contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
