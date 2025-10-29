import Image from "next/image";

const Education = () => {
    return (
        <div id="education" className="bg-blue-50 py-24">
            <div className="flex flex-col max-w-5xl mx-auto px-4">
                <h2 className="text-7xl font-medium mx-auto">My Education</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                    <div className="bg-[#FEBCFE] text-[#663366] rounded-3xl p-8">
                        <Image
                            src="/images/fontys.png"
                            alt="Fontys University of Applied Sciences Logo"
                            className="h-12 w-auto"
                            width={360}
                            height={196}
                        />
                        <h3 className="text-2xl font-semibold mt-4">
                            Fontys University
                        </h3>
                        <p>HBO-ICT Software Engineering</p>
                        <p>September 2020 to Present</p>
                    </div>
                    <div className="bg-[#7CF4CA] text-[#100A76] rounded-3xl p-8">
                        <Image
                            src="/images/leijgraaf.png"
                            alt="ROC de Leijgraaf Logo"
                            className="h-12 w-auto"
                            width={500}
                            height={180}
                        />
                        <h3 className="text-2xl font-semibold mt-4">
                            ROC de Leijgraaf
                        </h3>
                        <p>ICT Administrator</p>
                        <p>September 2018 to June 2021</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
