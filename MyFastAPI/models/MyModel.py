from pydantic import BaseModel


class HangHoa(BaseModel):
    MaHh : int
    TenHh: str
    DonGia: float