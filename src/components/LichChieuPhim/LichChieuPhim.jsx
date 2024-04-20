import React, { useEffect, useState } from 'react'
import { quanLyRapServ } from '../../services/quanLyRap'
import { Tabs } from 'antd'
import "./lichChieuPhim.scss"
import moment from 'moment'
const LichChieuPhim = ({ cumrap ,index}) => {
    return (
        <Tabs
            className="tab_cum_rap"
            tabPosition="left"
            style={{
                height: "700px"
            }}
            items={cumrap.map((item, index) => {
                return {
                    label: <div className="text-left uppercase label__cumrap">
                        <h4 className="text-green-600 truncate font-medium text-lg">{item.tenCumRap}</h4>
                        <p className="text-gray-500 truncate text-xs">{item.diaChi}</p>
                    </div>,
                    key: index,
                    children: <div>{item.danhSachPhim.map((phim, index) => {
                        return (
                            phim.dangChieu && (
                                <div className="flex my-10" key={index}>
                                    <div className="w-36 h-full">
                                        <img src={phim.hinhAnh} alt='' />
                                    </div>
                                    <div className="ml-5">
                                        <h3>
                                            <span className='bg-orange-600 text-white rounded py-1 px-2 text-lg font-semibold mr-3'>C18</span>
                                            <span className='text-xl font-semibold'>{phim.tenPhim}</span>
                                        </h3>
                                        {/* suất chiếu */}
                                        <div className="grid grid-cols-2 gap-5">
                                            {phim.lstLichChieuTheoPhim.slice(0, 4).map((gioChieu, index) => {
                                                return (
                                                    <div>
                                                        <p className="space-x-3">
                                                            {/* ngày tháng */}
                                                            <span>
                                                                {moment(gioChieu.ngayChieuGioChieu).format("DD-MM-YYYY")}
                                                            </span>
                                                            <span>~</span>
                                                            {/* ngày chiếu */}
                                                            <span>
                                                                {moment(gioChieu.ngayChieuGioChieu).format("hh:mm")}
                                                            </span>
                                                        </p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    })}</div>
                }
            })}
        />
    )
}

export default LichChieuPhim