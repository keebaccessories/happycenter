import React from 'react'
import LayoutMaster from '../../layout/LayoutMaster'
import Sale from '../../components/Card/Sale'
import CardSlide from '../../components/Card/CardSlide'
import Rate from '../../components/Card/Rate'
import CommentInput from '../../components/Comment/CommentInput'
import CommentSingle from '../../components/Comment/CommentSingle'
import Botton from '../../components/Botton'


const CourseDetail = () => {
    return (
        <div>
            
             <LayoutMaster>
                <Sale style={{height: 200 }}/>
                <div className="flex flex-row m-40">
                    <div className="flex flex-col w-1/2 m-10">
                        <img className="" src="./assets/images/image.jpg"></img>
                        <CardSlide/>
                    </div>
                    <div className="flex flex-col w-1/2 m-10">
                        <Rate/>
                        <h3 className="text-red-600 font-sans text-4xl pt-2">Khóa học: Tiếng Nhật Cơ Bản </h3>
                        <h1 className="text-black font-sans text-2xl pt-2">Trung tâm: Paracel Project Education</h1>
                        <ul className="text-xs text-blue-800 font-sans text-xl list-disc mt-10 mb-10">
                            <div className="flex flex-row">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <li>Cam kết thành thạo giao tiếp sau khóa học</li>
                            </div>
                            <div className="flex flex-row">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <li>100% Giáo viên nước ngoài</li>
                            </div>
                            <div className="flex flex-row">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <li>Học phí: 4,000.000 VNĐ</li>
                            </div>
                            <div className="flex flex-row">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <li>Thời gian: 4 tháng</li>
                            </div>
                            <div className="flex flex-row">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <li>Hình thức học: Offline</li>
                            </div>
                        </ul>
                        <Botton/>
                    </div>
                </div>
                <hr className="w-full border-2  mt-10 mb-10 px-80"/>
                <CommentInput/>
                <CommentSingle/>
            </LayoutMaster>
        </div>
       
    )
}

export default CourseDetail
