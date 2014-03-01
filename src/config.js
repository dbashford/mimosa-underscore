"use strict";

exports.defaults = function() {
  return {
    underscore: {
      extensions: ["tpl", "underscore"]
    }
  };
};

exports.placeholder = function() {
  return "\t\n\n" +
         "  underscore:               # config settings for the Underscore compiler module\n" +
         "    lib: undefined    # use this property to provide a specific version of Underscore\n" +
         "    extensions: [\"tpl\", \"underscore\"],  # default extensions for Underscore files\n";
};

exports.validate = function( config, validators ) {
  var errors = [];

  if ( validators.ifExistsIsObject( errors, "underscore config", config.underscore ) ) {

    if ( !config.underscore.lib ) {
      config.underscore.lib = require( "underscore" );
    }

    if ( validators.isArrayOfStringsMustExist( errors, "underscore.extensions", config.underscore.extensions ) ) {
      if (config.underscore.extensions.length === 0) {
        errors.push( "underscore.extensions cannot be an empty array");
      }
    }
  }

  return errors;
};
