var loader = require("@paypal/connect-loader-component").loadAxo

console.log(loader)
loader().then(function(){
  console.log("Wahooo!")
})

// module.exports = loader;