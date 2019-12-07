package letsbet


import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Bet {

    User commissioner
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