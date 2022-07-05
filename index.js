const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require("fs")
// or
// import {NotionToMarkdown} from "notion-to-md";

const notion = new Client({
  auth: "secret_1Yq2tPkdfpfHJd8m9nPmo7oJU3bWsHU2UKrmdtqFkhb",
});

// passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion });

(async () => {
  const mdblocks = await n2m.pageToMarkdown("068ecd5d0cb649caa7fccfc3f3c4675d");
  const mdString = n2m.toMarkdownString(mdblocks);

  //writing to file
  fs.writeFile("Readme.md", mdString, (err) => {
    console.log(err);
  });
})();