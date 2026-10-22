from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

base = Path(__file__).resolve().parent
with ZipFile(base / "frontend-capstone-solution.zip", "w", ZIP_DEFLATED) as archive:
    for path in sorted((base / "solution").rglob("*")):
        if not path.is_file():
            continue
        relative = path.relative_to(base / "solution").as_posix()
        if relative in {"README.txt", "README.md", "REVIEW.md"}:
            if relative == "README.txt":
                continue
            target = relative
        else:
            target = "public/" + relative.removesuffix(".source")
        archive.write(path, target)
