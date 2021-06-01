import React from 'react'

import Select from 'react-select';

const optionType =[
    {label:'Online', value:'online'},
    {label:'Offline', value:'offline'},
  ]

const optionAddress =[
    {label: 'Đà Nẵng',value:'danang'},
    {label: 'Hà Nội',value:'hanoi'},
    {label: 'Hồ Chí Minh',value:'hochiminh'},
]

const optionCourse =[
    {label: 'Tiếng Anh',value:'tienganh'},
    {label: 'Toán',value:'toan'},
    {label: 'văn',value:'van'},
]
const optionTime=[
    {label: '1 Tháng',value:'1thang'},
    {label: '2 Tháng',value:'2thang'},
    {label: '3 Tháng',value:'3thang'},
]

const optionPrice=[
    {label: 'Free',value:'free'},
    {label: 'Thấp đến cao',value:'thapdencao'},
    {label: 'Cao đến thấp',value:'caodenthap'},
]
const optionCenter=[
    {label: 'Trung Tâm PEE',value:'ppe'},
    {label: 'Trung Tâm HCE',value:'hce'},
    {label: 'Trung Tâm SMY',value:'smy'},
]
function Search() {
    return (
        <div className="flex flex-col  w-3/4" >
            <div className="shadow flex  w-full rounded-xl">
                <input className="w-full  p-3 pl-5 " type="text" placeholder="Tìm kiếm khóa học ..."/>
                <button className="flex justify-end items-center text-blue-500 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />search</svg>
                </button>
            </div>
            <div className="flex flex-row">
                <Select
                    options={optionType}
                    className='w-1/6 pt-6 px-3'
                    placeholder="Hình thức"
                    isSearchable
                />
                <Select
                    options={optionAddress}
                    className='w-1/6 pt-6 px-3'
                    placeholder="Địa chỉ"
                    isSearchable
                />
                <Select
                    options={optionCourse}
                    className='w-1/6 pt-6 px-3'
                    placeholder="Khóa học"
                    isSearchable
                />
                <Select
                    options={optionTime}
                    className='w-1/6 pt-6 px-3'
                    placeholder="Thời gian"
                    isSearchable
                />
                <Select
                    options={optionPrice}
                    className='w-1/6 pt-6 px-3'
                    placeholder="Học phí"
                    isSearchable
                />
                <Select
                    options={optionCenter}
                    className='w-1/6 pt-6 px-3'
                    placeholder="Trung tâm"
                    isSearchable
                />
            </div>
        </div>
        
    )
}
export default Search
 