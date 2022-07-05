
# Mongo connection 

```javascript
mongoose.connect(DB,{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(()=>{
    console.log("database connected boss"); 
}).catch((err)=> {
    throw err; 
    console.log("connection did not established")
		}
)
```

# Mongo connection using async await 

```javascript
const mongoose = require("mongoose");
require('dotenv').config(); 
const DB = process.env.DB_URL; 
const connectDB = async ()=>{
	try{
			const conn  = await(mongoose.connect(DB,{
					useNewUrlParser: true,
					useUnifiedTopology: true					
			}))
			console.log("db connection is useful"); 
		}catch(err){
			throw err; 
		}		
	}
module.exports = connectDB; 



in Main index.js file 
const connectDB = require(./connectDB); 
connectDB(); 
```

# .env file config 

1. install dotenv package 

```javascript
npm i dotenv
```

2. Create .env file 

3. add variable eg. (PORT = 3000)

4. go to index.js or app.js or server.js file  

5. at the top write 

```javascript
require('dotenv').config();
```

6. To call the variable use 

```javascript
const PORT = process.env.PORT; 
```

7. use the PORT anywhere in the code 
