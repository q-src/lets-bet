package letsbet


import grails.rest.Resource

@Resource(readOnly = false, formats = ['json'], superClass = BetSuperController)
class Bet {

    static hasMany = [
            participations: Participation,
    ]

    static belongsTo = [
            commissioner: User,
    ]

    static mappedBy = {
        participations: 'bet'
    }

    static mapping = {
        participations lazy: false, cascade: 'none'
        commissioner lazy: false, cascade: 'none'
        result lazy: false, cascade: 'none'
    }

    static hasOne = [result: Result]

    static constraints = {
        result(nullable: true)
        isStarted(validator: { boolean isStarted, Bet bet ->
            def persistedIsStarted = bet.getPersistentValue('isStarted')
            if (persistedIsStarted && metaChanged(bet)) {
                return ['betAlreadyStarted']
            }
        })
    }

    String title
    String description
    String rules
    boolean isStarted

    private static boolean metaChanged(Bet bet) {
        bet.isDirty('title') || bet.isDirty('description') || bet.isDirty('rules')
    }

    enum Status {
        CREATED,
        STARTED,
        COMPLETED,
    }
}

