package tweetassign_01

import geb.spock.GebSpec
import grails.test.mixin.integration.Integration

import spock.lang.Ignore


@Integration

class UserDetailFunctionalTestSpec extends GebSpec{

    def setup(){
        when:
        go'/'
        $("#login-form input[name=handle]").value("donaldtrump")
        $("#login-form input[name=password]").value("msse2016ASSIGN")
        $("#login").click()
        sleep(1000)

        then:
        $(".page-header").text() == "Greetings!!"
    }

    def 'U1: User’s detail page will display the user’s name as well as a scrollable list of that user’s postings'(){

          when:
          $("#details").click()
          sleep(2000)


          then:
          $("#userDetails td")[0].text() == "Donald Trump"
          $("#userMsg td")[0].text() == "Welcome to Minnesota"
          $("#userMsg td")[1].text() == "It's getting better, infact it is warm."
          JavascriptExecutor scroll = (JavascriptExecutor) driver


    }

    def 'U2: User’s detail page will provide a way for the logged in user to follow the detail user'(){

          when:
          $("#search").click()
          $("#searchInput").value("Atl")
          $("#searchBtn").click()
          sleep(1000)
          $(".handle")[0].click()
          sleep(5000)

          then:
          $("#followBtn").text()== "Follow"
    }

    def 'U3: When the logged in user is following the detail user, the detail page will display a message or icon indicating this'(){

          when:
          $("#search").click()
          $("#searchInput").value("Atl")
          $("#searchBtn").click()
          sleep(2000)
          $(".handle")[0].click()
          sleep(2000)
          $("#followBtn").click()
          sleep(5000)

          then:
          $("#followBtn").text()=="Following"
    }

    def 'U4: When the logged in user goes to their own detail page, they can edit their name and email'(){

        when:
        $("#details").click()
        $("#Edit").text()=="Edit"
        $("#Edit").click()
        sleep(3000)


        then:
        $("#userDetails input[id=fullname]").value("Don Draper")
        $("#userDetails input[id=email]").value("don@draper.com")
        $("#Save").text()=="Save"
        $("#Save").click()

        when:
        $("#search").click()
        $("#details").click()
        sleep(3000)

        then:
        $('#userDetails td')[0].text()=="Don Draper"
        $('#userDetails td')[1].text()=="don@draper.com"



    }


}
