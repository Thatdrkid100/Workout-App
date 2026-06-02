from sqlalchemy import ForeignKey, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from database import Base


class MuscleGroup(Base):
    """Navigation sections (e.g. Front Delts, Upper Chest)."""

    __tablename__ = "muscle_groups"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    slug: Mapped[str] = mapped_column(String(64), unique=True, index=True)
    name: Mapped[str] = mapped_column(String(128), unique=True)
    body_region: Mapped[str] = mapped_column(String(32), index=True)

    exercises: Mapped[list["Exercise"]] = relationship(back_populates="muscle_group")


class Exercise(Base):
    """A single movement in the catalog (e.g. dumbbell front raise)."""

    __tablename__ = "exercises"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String(256), index=True)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    muscle_group_id: Mapped[int] = mapped_column(ForeignKey("muscle_groups.id"), index=True)

    muscle_group: Mapped["MuscleGroup"] = relationship(back_populates="exercises")
