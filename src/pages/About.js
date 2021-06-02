import React from 'react'
import LayoutMaster from '../layout/LayoutMaster'
import CardSlide from '../components/Card/CardSlide'
import Rate from '../components/Card/Rate'

function About() {
    return (
        <LayoutMaster>
                <div className="flex flex-row m-40">
                    <div className="flex flex-col w-1/2 m-10">
                        <img className="" src="./assets/images/billgates.jpg"/>
                        <CardSlide/>
                    </div>
                    <div className="flex flex-col w-1/2 m-10 mb-2">
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
                    </div>
                </div>
                <hr className="w-full border-2"/> 
                <div>
                    <h1 className="text-2xl ml-10 mt-10">Giới thiệu trung tâm</h1>
                        <div className="flex flex-col my-20 mx-40" >
                        <div className="flex flex-row">
                            <div className="flex flex-row w-1/3 m-10 ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                <h3>33 bài học bao gồm video, lớp học trực tuyến & các bài thực hành</h3>
                            </div>
                            <div className="flex flex-row w-1/3 m-10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                <h3>33 bài học bao gồm video, lớp học trực tuyến & các bài thực hành</h3>
                            </div>
                            <div className="flex flex-row w-1/3 m-10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                <h3>33 bài học bao gồm video, lớp học trực tuyến & các bài thực hành</h3>
                            </div>
                        </div>
                        <div className="flex flex-row ">
                            <div className="flex flex-row w-1/3 m-10 ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                <h3>33 bài học bao gồm video, lớp học trực tuyến & các bài thực hành</h3>
                            </div>
                            <div className="flex flex-row w-1/3 m-10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                <h3>33 bài học bao gồm video, lớp học trực tuyến & các bài thực hành</h3>
                            </div>
                            <div className="flex flex-row w-1/3 m-10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                <h3>33 bài học bao gồm video, lớp học trực tuyến & các bài thực hành</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="w-full border-2"/> 
                <div className="flex flex-col ">
                    <h1 className="text-2xl ml-10 mt-10">Người sáng kập trung tâm</h1>
                    <div className="flex flex-row my-10 mx-40">
                        <div className="flex flex-col w-2/12 ">
                            <img className="inline-block w-full rounded-full ring-8 ring-white shadow-2xl mb-5" src="./assets/images/billgates.jpg" />
                            <Rate/>
                        </div>
                        <div className="flex flex-col w-10/12 ml-20 mt-15 ">
                            <h1 className="text-4xl">Bill Gates</h1>
                            <p className="mt-5">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                        </div>
                    </div>
                    
                </div>

            </LayoutMaster>
        )
}

export default About
