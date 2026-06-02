"""Create tables and seed muscle groups + starter exercises."""

from sqlalchemy import delete, select

from database import Base, SessionLocal, engine
from models import Exercise, MuscleGroup
from seed_data import MUSCLE_GROUPS, STARTER_EXERCISES


def _seed(db) -> None:
    slug_to_group: dict[str, MuscleGroup] = {}
    for row in MUSCLE_GROUPS:
        group = MuscleGroup(**row)
        db.add(group)
        slug_to_group[row["slug"]] = group
    db.flush()

    for slug, exercises in STARTER_EXERCISES.items():
        group = slug_to_group[slug]
        for name, description in exercises:
            db.add(
                Exercise(
                    name=name,
                    description=description,
                    muscle_group_id=group.id,
                )
            )

    db.commit()


def init_db(*, force: bool = False) -> None:
    Base.metadata.create_all(bind=engine)

    with SessionLocal() as db:
        if force:
            db.execute(delete(Exercise))
            db.execute(delete(MuscleGroup))
            db.commit()
        elif db.scalar(select(MuscleGroup.id).limit(1)) is not None:
            return

        _seed(db)


if __name__ == "__main__":
    import sys

    force = "--force" in sys.argv
    init_db(force=force)
    print("Database initialized." + (" (reseeded)" if force else ""))
