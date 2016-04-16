package tweetassign_01

import geb.spock.GebSpec
import grails.test.mixin.integration.Integration
import spock.lang.Ignore


@Integration
class SearchFunctionalTestSpec extends GebSpec {


    def setup() {

        when:
        go '/'
        $("#login-form input[name=handle]").value("richelliot")
        $("#login-form input[name=password]").value("msse2016ASSIGN")
        $("#login").click()
        sleep(1000)
        $("#search").click()

        then:
        $(".page-header").text() == "Search"


    }


    def 'S1A,S3: Provide a search box for finding messages by message poster and message contents - INPUT partial message '() {

        when:
        //perform a search by message content
        $("#searchInput").value("Atl")
        $("#searchBtn").click()
        sleep(1000)

        then:
        $("#searchResults td")[0].text() == "richelliot"
        $("#searchResults td")[1].text() == "Welcome to Atlanta"


    }

    def 'S1B,S3: Provide a search box for finding messages by message poster and message contents - INPUT poster'() {

        when:
        //perform a search by message content
        $("#searchInput").value("nayna")
        $("#searchBtn").click()
        sleep(1000)

        then:
        $("#searchResults td")[0].text() == "nayna"
        $("#searchResults td")[1].text() == "nayna is awesome"


    }

    def 'S1C,S3 Count results [rows in table] for search messages retrieved on a given message poster/text'() {
        when:
        $("#searchInput").value("jeremy")
        $("#searchBtn").click()
        sleep(1000)
        then:
        $('#tblSearchResults tr').size() == 4

    }

    def 'S4: Clicking on the posting user’s name in a message will route to the user’s detail page'() {
        when:
        $("#searchInput").value("nayna")
        $("#searchBtn").click()
        sleep(1000)
        $(".handle")[0].click()
        sleep(5000)

        then:
        $(".page-header").text() == "Greetings!!"
    }

}