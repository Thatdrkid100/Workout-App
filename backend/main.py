from contextlib import asynccontextmanager

from fastapi import Depends, FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from sqlalchemy import select
from sqlalchemy.orm import Session, joinedload

from database import get_db
from init_db import init_db
from models import Exercise, MuscleGroup
from schemas import ExerciseCreate, ExerciseOut, MuscleGroupOut


@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield


app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_methods=["*"],
)

@app.get("/", response_class=HTMLResponse)
def root():
    return """
    <html>
        <head>
            <title>Workout API</title>
        </head>
        <body>
            <h1>Workout API is running 🚀</h1>
            <p><a href="/docs">API docs</a></p>
        </body>
    </html>
    """


@app.get("/muscle-groups", response_model=list[MuscleGroupOut])
def list_muscle_groups(db: Session = Depends(get_db)):
    return db.scalars(select(MuscleGroup).order_by(MuscleGroup.body_region, MuscleGroup.name)).all()


@app.get("/exercises", response_model=list[ExerciseOut])
def list_exercises(
    muscle_group_id: int | None = Query(None, description="Filter by muscle group"),
    body_region: str | None = Query(None, description="Filter by region: shoulders, chest, back, arms"),
    db: Session = Depends(get_db),
):
    stmt = select(Exercise).options(joinedload(Exercise.muscle_group)).order_by(Exercise.name)
    if muscle_group_id is not None:
        stmt = stmt.where(Exercise.muscle_group_id == muscle_group_id)
    if body_region is not None:
        stmt = stmt.join(MuscleGroup).where(MuscleGroup.body_region == body_region)
    return db.scalars(stmt).unique().all()


@app.get("/exercises/{exercise_id}", response_model=ExerciseOut)
def get_exercise(exercise_id: int, db: Session = Depends(get_db)):
    exercise = db.scalar(
        select(Exercise)
        .options(joinedload(Exercise.muscle_group))
        .where(Exercise.id == exercise_id)
    )
    if exercise is None:
        raise HTTPException(status_code=404, detail="Exercise not found")
    return exercise


@app.post("/exercises", response_model=ExerciseOut, status_code=201)
def create_exercise(payload: ExerciseCreate, db: Session = Depends(get_db)):
    group = db.get(MuscleGroup, payload.muscle_group_id)
    if group is None:
        raise HTTPException(status_code=400, detail="Invalid muscle_group_id")

    exercise = Exercise(**payload.model_dump())
    db.add(exercise)
    db.commit()
    db.refresh(exercise)
    return db.scalar(
        select(Exercise)
        .options(joinedload(Exercise.muscle_group))
        .where(Exercise.id == exercise.id)
    )
