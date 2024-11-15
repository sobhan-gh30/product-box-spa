import {useParams} from "react-router-dom";
import data from "./data";

export default function MainProduct(){
    let id = +useParams().id
    let mainData = data.find((obj) => obj.id === id);
    console.log(mainData)
    return (
        <div className="container flex justify-center items-center flex-col h-screen w-full">
            <div className="w-1/2 h-96 border">
                <img
                    className="rounded-t-lg"
                    src={mainData.imgCode ? `/product-posters/${mainData.imgCode}` : "/product-posters/default-image.jpg"}
                    alt=""
                />
            </div>
            <div className="w-1/2">{mainData.id}</div>
        </div>
    )
}