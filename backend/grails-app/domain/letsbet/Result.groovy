package letsbet


import grails.rest.*

@Resource(readOnly = false, formats = ['json'])
class Result {

    static belongsTo = [bet: Bet]
    static hasMany = [winners: Participation]
    String reasoning

    static mapping = {
        winners lazy: false, cascade: 'none'
        bet lazy: false, cascade: 'none'
    }

    static constraints = {
        reasoning nullable: true
        bet unique: true
    }
}