const express = require("express");
const app = express();
const notion2md = require("./notion2md")
// var multer  = require('multer')
// var notion2md = multer({ dest: './notion2md' })
notion2md(); 

// or
// import {NotionToMarkdown} from "notion-to-md";

