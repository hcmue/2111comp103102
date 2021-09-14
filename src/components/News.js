import React from 'react';
import '../App.css';

const NewsDetail = (props) => {
    return (
        <div className="mautin">
            <h3 style={{ color: 'red' }}>{props.tieuDe}</h3>
            <div>{props.noiDung}</div>
        </div>
    )
};
export const News = () => {
    const danhSachTin = [
        { tieuDe: 'COVID19', noiDung: 'Ảnh hưởng của COVID-19 quá lớn' },
        { tieuDe: 'VN - Brasil: 1 - 7', noiDung: 'Đội tuyển Futsal VN thua Brasil 1-7 ở trận đấu đêm qua' },
    ];
    return (
        <>
            <h2>My Blogs</h2>
            <NewsDetail tieuDe="Mưa quá" noiDung="Quá xá mưa" />
            {danhSachTin.map((item) => {
                return <NewsDetail tieuDe={item.tieuDe} noiDung={item.noiDung} />
            })}
        </>
    )
};
