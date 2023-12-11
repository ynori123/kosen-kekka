from sqlalchemy import Column, Integer, ForeignKey, DateTime
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from src.database import Base


class Class(Base):
    __tablename__ = "classes"

    id = Column(Integer(as_uuid=True), primary_key=True, index=True, autoincrement=True)
    class_id = Column(Integer, ForeignKey("classes.id"), required=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    user = relationship("User", backref="classes")
