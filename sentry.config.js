const {withSentryConfig} =require("@sentry/nextjs")


const moduleExport = {

};

const SentryWebpackPluginOptions = {
    slient:true
};

module.exports = withSentryConfig(module,SentryWebpackPluginOptions)