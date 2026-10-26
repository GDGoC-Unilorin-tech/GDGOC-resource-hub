from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
base = Path(__file__).resolve().parent
with ZipFile(base / 'workflow-practice-pack.zip', 'w', ZIP_DEFLATED) as archive:
    for path in sorted((base / 'source').rglob('*')):
        if path.is_file():
            archive.write(path, path.relative_to(base / 'source').as_posix().removesuffix('.source'))
