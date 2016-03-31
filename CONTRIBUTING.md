# Contributing

This book is developed using [GitBook](https://github.com/GitbookIO/gitbook). Authored in Markdown files (I use [atom](http://atom.io)).

Here's how to setup a Dev Environment:

```
npm install gitbook-cli -g
gitbook serve .
```
Note: serve needs port `35729` (for live reload) and `4000` for serving http://localhost:4000.

Also you can mostly just edit the `.md` files in [`/docs`](https://github.com/basarat/algorithms-book/docs) using github and create a Pull Request (PR).

# Code
The code files are right next to the docs. The docs files are named using snake case (`foo-bar.md`) for SEO reasons. This means the code files are unidiomatically named (`foo-bar.ts`). I hope you can forgive me for that.

#### More Gitbook Tips
Links best work if they are relative (e.g `./foo.md`) to the *current* file.
