from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from src.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    class_id = Column(Integer, ForeignKey("classes.id"), required=True)
    name = Column(String(128), required=True, index=True)
    email = Column(String(128), unique=True, required=True, index=True)
    hashed_password = Column(String(256), required=True)
    is_available = Column(Integer, default=1)
    
    tokens = relationship("Token", backref="users")
    misses = relationship("Miss", backref="users")
    classes = relationship("Class", backref="users")
