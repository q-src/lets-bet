package letsbet


import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Result {

    Bet bet
    String statement
    Set<Participation> winners

}