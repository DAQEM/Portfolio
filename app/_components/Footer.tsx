import GitHubIcon from "./GitHubIcon";
import LinkedInIcon from "./LinkedInIcon";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-300 text-base-content">
            <nav>
                <h6 className="footer-title">My Work</h6>
                <a className="link link-hover" href="/projects">
                    All
                </a>
                <a className="link link-hover" href="/projects?tags=csharp">
                    C#
                </a>
                <a className="link link-hover" href="/projects?tags=typescipt">
                    TypeScript
                </a>
                <a className="link link-hover" href="/projects?tags=java">
                    Java
                </a>
            </nav>
            <nav>
                <h6 className="footer-title">Useful Links</h6>
                <a className="link link-hover" href="/#about">
                    About
                </a>
                <a className="link link-hover" href="/#contact">
                    Contact
                </a>
            </nav>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="flex gap-4 items-center">
                    <a
                        href="https://github.com/DAQEM"
                        className="lg:btn lg:btn-ghost"
                    >
                        <GitHubIcon className="h-5 fill-primary" />
                    </a>
                    <a
                        href="https://linkedin.com/in/kevinvdheijden"
                        className="lg:btn lg:btn-ghost"
                    >
                        <LinkedInIcon className="h-7 fill-primary" />
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
