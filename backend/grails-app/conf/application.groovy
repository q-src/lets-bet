grails.plugin.springsecurity.userLookup.userDomainClassName = 'letsbet.User'
grails.plugin.springsecurity.controllerAnnotations.staticRules = [
        [pattern: '/**', access: ['IS_AUTHENTICATED_FULLY']],
]

grails.plugin.springsecurity.filterChain.chainMap = [
        [pattern: '/**', filters: 'JOINED_FILTERS,-anonymousAuthenticationFilter,-exceptionTranslationFilter,-authenticationProcessingFilter,-securityContextPersistenceFilter,-rememberMeAuthenticationFilter']
]

