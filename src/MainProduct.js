import {useParams , Link} from "react-router-dom";
import data from "./data";

export default function MainProduct(){
    let id = +useParams().id
    let mainData = data.find((obj) => obj.id === id);
    console.log(mainData)
    return (
        <div className="container flex justify-start items-center flex-col h-screen w-full pt-3">
            <div className="w-1/3 border">
                <img
                    className="rounded-t-lg"
                    src={mainData.imgCode ? `/product-posters/${mainData.imgCode}` : "/product-posters/default-image.jpg"}
                    alt=""
                />
            </div>
            <div className="w-1/3">
                <h2 className="text-2xl font-semibold">{mainData.header}</h2>
                <p className="text-gray-500 font-semibold">{mainData.price}$</p>
                <p className="border-t pt-3 mt-3">
                    {mainData.description}
                    <Link className="ml-5 font-semibold text-blue-500 hover:text-blue-600" to="/">Go Back</Link>
                </p>
            </div>
        </div>
    )
}