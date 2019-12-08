package letsbet


import grails.rest.*

@Resource(readOnly = false, formats = ['json'], superClass = BetSuperController)
class Bet {

    // FIXME: Causes EntityActionVetoException
    // static hasMany = [participations: Participation]

    static belongsTo = [commissioner: User]

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