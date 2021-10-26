from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base


engine = create_engine("mysql+pymysql://root:@localhost/k45alchemy?charset=utf8mb4")

MySession = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()