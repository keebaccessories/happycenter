import React from 'react'
import Rate from './Rate'
import CardSlide from './CardSlide'
import Sale from "./Sale"
import Favourite from './Favourite'


function CardSmall() {
    return (
        <div className="relative flex flex-row object-contain space-x-4 p-4 rounded-2xl bg-white shadow-xl max-w-2xl ">
            <Sale/>
            <div className="flex flex-col w-1/2">
                <img className="" src="./assets/images/image.jpg"></img>
            </div>
            <div className="flex w-1/2 flex flex-col">
                <Rate/>
                <h3 className="text-red-600 font-sans text-xl pt-2">Khóa học: Tiếng Nhật Cơ Bản </h3>
                <h1 className="text-black font-sans text-sm">Trung tâm: Paracel Project Education</h1>
                <ul className="text-xs text-blue-800 font-sans list-disc p-5">
                    <li>Cam kết thành thạo giao tiếp sau khóa học</li>
                    <li>100% Giáo viên nước ngoài</li>
                    <li>Học phí: 4,000.000 VNĐ</li>
                    <li>Thời gian: 4 tháng</li>
                    <li>Hình thức học: Offline</li>
                </ul>
                </div>
                <Favourite/>
        </div>
    )
}

export default CardSmall
