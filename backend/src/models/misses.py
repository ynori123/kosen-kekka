from sqlalchemy import Column, Double, Integer, String, ForeignKey, UUID, DateTime, Text
from sqlalchemy.orm import relationship
from src.database import Base
import uuid


class Miss(Base):
    __tablename__ = "misses"

    id = Column(UUID(as_uuid=True), primary_key=True, index=True, default=uuid.uuid4)
    user_id = Column(Integer, ForeignKey("users.id"), required=True)
    subject_id = Column(Integer, ForeignKey("subjects.id"), required=True)
    name = Column(String(128), required=True, index=True)
    datetime = Column(DateTime, required=True, index=True)
    time = Column(Double, required=True)
    memo = Column(Text)
    
    subject = relationship("Subject", backref="misses")
    user = relationship("User", backref="misses")    
