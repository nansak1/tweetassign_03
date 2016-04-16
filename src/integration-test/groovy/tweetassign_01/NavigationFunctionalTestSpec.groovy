package tweetassign_01

import geb.spock.GebSpec
import grails.test.mixin.integration.Integration
import spock.lang.Ignore


@Integration

class NavigationFunctionalTestSpec extends GebSpec{

        def setup(){
                when:
                go'/'
                $("#login-form input[name=handle]").value("richelliot")
                $("#login-form input[name=password]").value("msse2016ASSIGN")
                $("#login").click()
                sleep(1000)

                then:
                $(".page-header").text() == "Greetings!!"
        }


         def 'N1: User’s detail page'(){

              when:
              $("#details").click()
              sleep(2000)

              then:
              $(".page-header").text() == "Greetings!!"

          }

          def 'N2: Search box '(){

              when:
              $("#search").click()

              then:
              $("#searchInput").text() == ''

          }

          def 'N3: Logout - clicking this should bring you to the login screen and provide a helpful message ‘Sorry to see you go… etc’'(){

              when:
              //you click on the logout button
              $("#logout").click()
              sleep(2000)


              then:
              $("#loggedOut").text()== "Sorry to see you leave..."
              $(".page-header").text() == "Login"


          }

}
