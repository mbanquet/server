const express = require('express');
const app = express();
const mongoose = require('mongoose');
const fs = require('fs')
require('dotenv/config')
const bodyParser = require('body-parser');
const cors = require('cors');
const logSymbols = require('log-symbols');
const User = require("./models/User");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const morgan = require("morgan");
app.use(morgan('dev'));

// const whatspp = require("./thirdparty/whatsappweb");
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// const whatsAppInstance = new whatspp()
// whatsAppInstance.run()
// whatsAppInstance.generateQR()
// whatsAppInstance.authenticate()
// whatsAppInstance.clientReady()
// whatsAppInstance.wishBaby()


// Import Routes
const enquiryRoutes = require('./routes/enquiry');
const bookingRoutes = require('./routes/booking');
const configRoutes = require('./routes/config');
// const invoiceRoutes = require('./routes/invoice_generator');
const employeeRoutes = require('./routes/employee');
const authRoutes = require('./routes/auth');
const pdfkitRoutes = require('./invokeInvoicePrint');
const receivingPdfRoutes = require('./receivingIndex');

const trafficRoutes = require('./routes/traffic')
const LaganRoutes = require('./routes/lagan');
const tokenRoutes = require('./routes/token');
// const whatsappRoutes = require('./routes/whatsapp');
const CommRoutes = require('./routes/communication');
const TaskRoutes = require('./routes/task');
const departmentRoute = require('./routes/department');
const uploadRoutes = require('./routes/upload');
const hotelRoutes = require('./routes/hotel');
const cashInflowRoutes = require('./routes/cash_inflow');
const Receiving = require('./routes/receiving');
const Inventory = require('./routes/inventory');
const Service = require('./routes/service');
const AppUser = require('./routes/app_user');
const Media = require('./routes/mediaSource');
const PublicBooking = require('./routes/publicBooking');
const News = require('./routes/news');
const Debt = require('./routes/debt');
const Attendance = require('./routes/attendance');
const CashInFlowV1 = require('./routes/cash_flow_v1');
const AppCashFlow = require('./routes/appcashflow');
const Secuirty = require('./routes/security');
const Batuwa = require('./routes/batuwa');
const CashInFlow2024_25 = require('./routes/appCashInFlow_2024_25');















app.use('/api/v1/enquiry', enquiryRoutes);
app.use('/api/v1/booking', bookingRoutes);
app.use('/api/v1/config', configRoutes);
// app.use('/api/v1/invoice', invoiceRoutes);
app.use('/api/v1/employee', employeeRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/invoice', pdfkitRoutes);
app.use('/api/v1/traffic', trafficRoutes);
app.use('/api/v1/lagan', LaganRoutes);
app.use('/api/v1/token', tokenRoutes);
// app.use('/api/v1/whatsapp', whatsappRoutes);
app.use('/api/v1/coms', CommRoutes);
app.use('/api/v1/task', TaskRoutes);
app.use('/api/v1/department', departmentRoute);
app.use('/api/v1/upload', uploadRoutes)
app.use('/api/v1/hotel', hotelRoutes)
app.use('/api/v1/cashinflow', cashInflowRoutes)
app.use('/api/v1/receiving', Receiving)
app.use('/api/v1/receiving/generate', receivingPdfRoutes)
app.use('/api/v1/inventory', Inventory)
app.use('/api/v1/service', Service)
app.use('/api/v1/app-user', AppUser)
app.use('/api/v1/media', Media)
app.use('/api/v1/public-booking', PublicBooking)
app.use('/api/v1/news', News)
app.use('/api/v1/debt', Debt)
app.use('/api/v1/attendance', Attendance)
app.use('/api/v1/app', AppCashFlow)
app.use('/api/v1/security', Secuirty)
app.use('/api/v1/cash-in-flow', CashInFlowV1)
app.use('/api/v1/batuwa', Batuwa)
app.use('/api/v1/cashflow2024_25', CashInFlow2024_25)




// Auth
// Register
app.post("/api/v1/user/register", async (req, res) => {
        // Get user input
        try {
        const { first_name, last_name, email, password } = req.body;
    
        // Validate user input
        if (!(email && password && first_name && last_name)) {
          res.status(400).send("All input is required");
        }
    
        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await User.findOne({ email })
    
        if (oldUser) {
          return res.status(409).send("User Already Exist. Please Login");
        }
    
        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);
    
        // Create user in our database
        const user = await User.create({
          first_name,
          last_name,
          email: email.toLowerCase(), // sanitize: convert email to lowercase
          password: encryptedPassword,
        });
    
        // Create token
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
        // save user token
        user.token = token;
    
        // return new user
        res.status(201).json(user);
        }
        catch (err) {
            console.log("here",err);
          }
     
      // Our register logic ends here
    });
    
// Login
app.post("/api/v1/user/login", async (req, res) => {
    try {
      // Get user input
      const { email, password } = req.body;
  
      // Validate user input
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      // Validate if user exist in our database
      const user = await User.findOne({ email });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
  
        // save user token
        user.token = token;
  
        // user
        res.status(200).json(user);
      }
      res.status(400).send("Invalid Credentials");
    } catch (err) {
      console.log(err);
    }
  });



app.use(express.static(process.cwd()+"/dist/maharaja/"));
app.get('/admin-mbh', (req,res) => {
  if(req && req.query === 'app') {

  }
    res.sendFile(process.cwd()+"/dist/maharaja/index.html")
  });

app.use(express.static(process.cwd()+"/www/"));
app.get('/finance', (req,res) => {
    res.sendFile(process.cwd()+"/www/index.html")
  });
// const product_list_routes = require('./routes/product_listing');
// app.use('/api/v1/product', product_list_routes);


console.log(logSymbols.info, "Connecting to Database...");
mongoose.connect(
    process.env.DB_CONNECTION
    , (e) => {
        console.log(logSymbols.success, 'Database Connection Established...');
        startServer();
       
});


function startServer() {
    app.listen(process.env.PORT, function(request) {
        console.log(logSymbols.warning,`Server Running On ${process.env.HOSTNAME}:${process.env.PORT}`);
        if(process.env.ENV === 'local') {
        console.log(logSymbols.info,`Client Running On ${process.env.HOSTNAME}:4200`);

        }
    });
}


