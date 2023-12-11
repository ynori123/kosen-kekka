from sqlalchemy import Column, Integer, ForeignKey, UUID, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from src.database import Base
import uuid


class Token(Base):
    __tablename__ = "tokens"

    id = Column(Integer, primary_key=True, required=True, index=True, autoincrement=True)
    token = Column(UUID(128), required=True, index=True, server_default=uuid.uuid4)
    user_id = Column(Integer, ForeignKey("users.id"), required=True)
    expires_at = Column(DateTime(timezone=True), required=True, index=True)
    created_at = Column(DateTime(timezone=True), required=True, index=True, default=func.now())

    user = relationship("User", backref="tokens")    
