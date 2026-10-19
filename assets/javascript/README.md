# JavaScript worked projects

Learners should download and extract the solution ZIP linked in each project lesson. ZIPs contain normal runnable filenames, including app.js and style.css.

## Maintaining source snapshots

Mintlify globally loads CSS and JavaScript from the content directory. To keep standalone examples isolated, their source snapshots use `.css.source` and `.js.source` filenames. Do not rename these to active CSS or JavaScript inside this repository.

Edit snapshots here, then rebuild the corresponding ZIP, stripping only the trailing `.source` suffix from archive entry names. Include the other files unchanged. Extract and run the ZIP outside the Mintlify repository to test it; the snapshot folders are not directly runnable. Compare every archive entry with its snapshot before publishing.

The root style.css and sidebar-state.js are intentional hub assets and are separate from these examples.
