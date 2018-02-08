var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('blt61bf767a08a168fa')
// .setHost('localhost')
// .setPort(8000)
.setHost("test-stag-api.built.io")
.setProtocol("https")
// .setPort(80)
.setMasterKey('bltbbc36be2659f2c80')

var extensionSDK = app.Extension({
	secret_key     : 'altamash',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)
