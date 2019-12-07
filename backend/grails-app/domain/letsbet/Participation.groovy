package letsbet


import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'], superClass = ParticipationSuperController)
class Participation {

    Bet bet
    User user
    String statement

}