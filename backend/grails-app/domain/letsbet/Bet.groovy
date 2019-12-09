package letsbet


import grails.rest.Resource

@Resource(readOnly = false, formats = ['json'], superClass = BetSuperController)
class Bet {

    // FIXME: Causes EntityActionVetoException
    // static hasMany = [participations: Participation]

    static belongsTo = [commissioner: User]

    static constraints = {
        status(validator: { Status status, Bet bet ->
            def persistedStatus = bet.getPersistentValue('status')
            if (persistedStatus == Status.STARTED) {
                return ['betAlreadyStarted']
            }
        })
    }

    String title
    String description
    String rules
    Status status

    enum Status {
        CREATED,
        STARTED,
        COMPLETED,
    }
}

