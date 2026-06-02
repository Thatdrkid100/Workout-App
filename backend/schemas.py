from pydantic import BaseModel, ConfigDict


class MuscleGroupOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    slug: str
    name: str
    body_region: str


class ExerciseOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    description: str | None
    muscle_group_id: int
    muscle_group: MuscleGroupOut


class ExerciseCreate(BaseModel):
    name: str
    description: str | None = None
    muscle_group_id: int
