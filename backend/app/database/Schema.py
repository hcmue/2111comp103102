from sqlalchemy import Integer, String, Column, TIMESTAMP, func, Float, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from .Database import Base


class UserInfo(Base):
    __tablename__="users"
    Id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String(50), nullable=False)
    password = Column(String(250), nullable=False)
    active = Column(Boolean, nullable=False, default=True)
    created_at = Column(TIMESTAMP, nullable=False, server_default=func.now())


class Category(Base):
    __tablename__ = "categories"
    Id = Column(Integer, primary_key=True, autoincrement=True)
    category_name = Column(String(50), nullable=False, unique=True)
    description = Column(String(255), nullable=True)
    products = relationship("Product", back_populates="category")


class Product(Base):
    __tablename__ = "products"
    Id = Column(Integer, primary_key=True, autoincrement=True)
    product_name = Column(String(50), nullable=False, unique=True)
    description = Column(String(255), nullable=True)
    price = Column(Float, default=0, nullable=False)
    category_id = Column(
        Integer,
        ForeignKey("categories.Id"),
        nullable=True,
    )
    category = relationship("Category", back_populates="products")
