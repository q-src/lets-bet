package letsbet


import grails.rest.Resource

@Resource(readOnly = false, formats = ['json', 'xml'], superClass = ParticipationSuperController)
class Participation {

    static mapping = {
        bet lazy: false, cascade: 'none'
        participant lazy: false, cascade: 'none'
    }

    static belongsTo = [
            bet: Bet,
            participant: User
    ]

    static constraints = {
        bet(validator: { Bet bet ->
            def persistedIsStarted = bet.getPersistentValue('isStarted')
            if (!persistedIsStarted) {
                return ['betMustBeStarted']
            }
        })
    }

    String statement
}