package letsbet


import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Bet {

    User owner
    User opponent
    User commissioner

    String ownerStatement
    String opponentStatement
    String commissionerStatement

    String ownerBet
    String opponentBet
    String rules

    Status status

    enum Status {
        CREATED,
        NEGOTIATED,
        WON,
        LOST,
        DRAW
    }
}