const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require("fs")
require("dotenv").config(); 

const AUTH_TOKEN = process.env.AUTH_TOKEN; 
const PAGE_ID = process.env.PAGE_ID; 

const notion = new Client({
  auth: AUTH_TOKEN,
});

// passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion });

const notion2md = ()=>{(async () => {
  const mdblocks = await n2m.pageToMarkdown(PAGE_ID);
  const mdString = n2m.toMarkdownString(mdblocks);

  //writing to file
  fs.writeFile("Readme.md",mdString, () => {
    console.log("file saved");
  });

})();
}

module.exports = notion2md; 