import {Link} from "react-router-dom";

export default function Cart(prop){
    return (
        <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <img className="rounded-t-lg" src={prop.imgCode ? `/product-posters/${prop.imgCode}` : "/product-posters/default-image.jpg"} alt=""/>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{prop.header}</h5>
                <p className="mb-3 font-normal text-gray-600 truncate">{prop.description}</p>
                <p className="mb-3 font-semibold text-gray-900">{prop.price}$</p>
                <Link to={`/product/${prop.id}`}
                   className="inline-flex items-center px-1 py-1 -translate-x-1
                    text-sm font-medium text-center text-blue-500 bg-white
                     rounded-lg hover:bg-blue-50 hover:bg-opacity-60 hover:text-blue-600
                     transition duration-200">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
        </div>

    )
}