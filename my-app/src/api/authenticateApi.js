export function authenHeader() {
    // Kiểm tra token đã exprire

    const token = 'aaaaa'; //lấy dưới localstorage

    return { headers: { Authorization: `Bearer ${token}` } };
};