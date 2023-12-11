from sqlalchemy import Column, DateTime, Integer, String, ForeignKey
from sqlalchemy.sql import func
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
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    tokens = relationship("Token", backref="users")
    misses = relationship("Miss", backref="users")
    classes = relationship("Class", backref="users")
