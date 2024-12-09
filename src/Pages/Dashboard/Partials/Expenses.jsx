import AuthLayout from "../../../Layout/AuthenticatedLayout";
import Sidebar from "../../../Components/Sidebar";
import Navbar from "../../../Components/Navbar";
import Card from "../../../Components/Card";
import { useState, useContext } from "react";
import { ThemeContext } from "../../../themeContext";

function Expenses({ }) {

    const [isActive, setActive] = useState({
        sidebar: false
    })

    const { theme } = useContext(ThemeContext);

    let fullName = "Jane Doe";

    try {
        const user = JSON.parse(localStorage.getItem("user"));
        fullName = user.name && user.email.split("@")[0].indexOf(".") > -1 ? user.email.split(".")[0] : user.email.split("@")[0].split(".")[0];
    } catch (error) {
        console.error(error)
    }

    return (
        <AuthLayout>
            <div className={`w-full h-full flex flex-row overflow-x-hidden relative lg:static ${theme.name}`}>
                <Sidebar name={fullName} isActive={isActive} setActive={setActive} pageAt="expenses" />
                <div className="w-full h-full flex flex-col gap-4">
                    <Navbar name={fullName} setActive={setActive} />
                    <div className="w-full h-full max-h-full">
                        <div className="w-full h-full overflow-y-auto grid grid-flow-row lg:grid-cols-3">
                            <div className="w-full h-16 lg:hidden"></div>
                            <Card title="Expenses Comparison" className="col-span-3">
                                <p className="text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quaerat deleniti nesciunt error repellat cumque. Neque eligendi eaque perspiciatis tenetur modi molestias rem facere delectus nemo sint! Totam, dolores dolor.
                                    Quasi a architecto soluta dolores sit tenetur magnam ipsa quibusdam nesciunt aliquam odit id dolore optio, hic temporibus corrupti eos consequuntur facere omnis iure numquam. Culpa veniam atque architecto molestiae.</p>
                            </Card>
                            <div className="w-full flex flex-col col-span-3">
                                <header className="w-full text-2xl px-4 py-4">
                                    <h2 className="text-gray-2 font-semibold">
                                        Expenses Breakdown
                                    </h2>
                                </header>
                                <div className="w-full grid grid-cols-3">
                                    <Card />
                                    <Card>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quaerat deleniti nesciunt error repellat cumque. Neque eligendi eaque perspiciatis tenetur modi molestias rem facere delectus nemo sint! Totam, dolores dolor.
                                            Quasi a architecto soluta dolores sit tenetur magnam ipsa quibusdam nesciunt aliquam odit id dolore optio, hic temporibus corrupti eos consequuntur facere omnis iure numquam. Culpa veniam atque architecto molestiae.</p>
                                    </Card>
                                    <Card />
                                </div>
                                <div className="w-full grid grid-cols-3">
                                    <Card />
                                    <Card />
                                    <Card>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quaerat deleniti nesciunt error repellat cumque. Neque eligendi eaque perspiciatis tenetur modi molestias rem facere delectus nemo sint! Totam, dolores dolor.
                                            Quasi a architecto soluta dolores sit tenetur magnam ipsa quibusdam nesciunt aliquam odit id dolore optio, hic temporibus corrupti eos consequuntur facere omnis iure numquam. Culpa veniam atque architecto molestiae.</p>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}

export default Expenses;