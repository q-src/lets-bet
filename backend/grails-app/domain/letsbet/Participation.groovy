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
            if (bet.isDirty('commissioner') && !bet.getPersistentValue('isStarted') || !bet.isStarted) {
                return ['betMustBeStarted']
            }
        })
    }

    String statement
}