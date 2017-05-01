const
   HTTP = require( 'http' ),
   APP  = require( 'app'  ),
   URL  = require( 'url'  ),

   HOST = process.env.npm_package_config_host,
   PORT = process.env.npm_package_config_port;

HTTP
   .createServer(( req, res ) => {
      APP( URL.parse( req.url ).pathname, res );
   })
   .listen( PORT, HOST, _=> {
      console.log( `Server running on http://${ HOST }:${ PORT }` );
   });