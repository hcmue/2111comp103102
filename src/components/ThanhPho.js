import { useEffect, useState } from "react"

export const DanhSachThanhPho = () => {
    const [data, setData] = useState([]);

    //Lần đầu load trang thì gọi API lấy data
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            })
            .catch((err) => {
                console.log('Err: ', err);
            });
    });

    return (
        <div>
            <h2>Danh sách Thành phố</h2>
            {data.map((item) => {
                return (
                    <div>
                        {item.id} : {item.email}
                    </div>
                )
            })}
        </div>
    )
}