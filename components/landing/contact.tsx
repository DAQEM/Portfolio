const Contact = () => {
    return (
        <div id="contact" className="py-24">
            <div className="flex flex-col max-w-5xl mx-auto px-4">
                <h2 className="text-5xl md:text-7xl font-medium mx-auto">
                    Contact Me
                </h2>
                <a
                    className="text-2xl md:text-4xl font-heading mx-auto opacity-50 hover:opacity-100 transition"
                    href="mailto:kevin@kevinvanderheijden.nl"
                >
                    kevin@kevinvanderheijden.nl
                </a>
                <p className="mx-auto mt-4 md:mt-0">
                    Feel free to contact me with any inquiries or questions!
                </p>
                <form
                    action="https://formspree.io/f/movpopga"
                    method="POST"
                    className="grid md:grid-cols-2 gap-x-8 max-w-3xl w-full mx-auto"
                >
                    <div className="mt-4">
                        <label className="block mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="border border-gray-300 p-2 rounded-md w-full focus:outline-foreground"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="border border-gray-300 p-2 rounded-md w-full focus:outline-foreground"
                            required
                        />
                    </div>
                    <div className="mt-4 md:col-span-2">
                        <label className="block mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="border border-gray-300 p-2 rounded-md w-full focus:outline-foreground h-32"
                            required
                        />
                    </div>
                    <div className="mt-4 md:col-span-2 flex justify-end">
                        <button
                            type="submit"
                            className="px-6 py-2 cursor-pointer hover:bg-blue-50 transition rounded-xl"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
                <div className="flex gap-8 mx-auto mt-4">
                    <a href="https://linkedin.com/in/kevinvdheijden">
                        <svg
                            height="32px"
                            width="32px"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 382 382"
                            xmlSpace="preserve"
                            className="fill-foreground opacity-50 hover:opacity-100 transition"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z"></path>
                            </g>
                        </svg>
                    </a>
                    <a href="https://github.com/DAQEM">
                        <svg
                            height="32px"
                            width="32px"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            className="opacity-50 hover:opacity-100 transition"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                <g
                                    id="Page-1"
                                    stroke="none"
                                    strokeWidth="1"
                                    fill="none"
                                    fillRule="evenodd"
                                >
                                    <g
                                        id="Dribbble-Light-Preview"
                                        transform="translate(-140.000000, -7559.000000)"
                                        className="fill-foreground"
                                    >
                                        <g
                                            id="icons"
                                            transform="translate(56.000000, 160.000000)"
                                        >
                                            <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
