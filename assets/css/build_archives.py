"""Rebuild course downloads without auto-loading example CSS into Mintlify."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

root = Path(__file__).resolve().parent
sources = [("practice-source", "css-practice-pack.zip")]
sources += [(level + "-solution", "portfolio-" + level + "-solution.zip")
            for level in ("beginner", "intermediate", "advanced", "final")]
for directory, archive in sources:
    source = root / directory
    with ZipFile(root / archive, "w", compression=ZIP_DEFLATED) as bundle:
        for item in sorted(source.rglob("*")):
            if item.is_file():
                name = item.relative_to(source).as_posix()
                if name.endswith(".source"):
                    name = name[:-7]
                bundle.write(item, name)
    print("Built", archive)
