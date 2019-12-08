package letsbet


import grails.rest.Resource

@Resource(readOnly = false, formats = ['json', 'xml'], superClass = ParticipationSuperController)
class Participation {

    static mapping = {
        bet lazy: false
        participant lazy: false
    }

    static belongsTo = [
            bet: Bet,
            participant: User
    ]

    String statement
}