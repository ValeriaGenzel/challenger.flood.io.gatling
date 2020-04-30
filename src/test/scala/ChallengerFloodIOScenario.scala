import io.gatling.core.Predef._
import io.gatling.http.Predef._

class ChallengerFloodIOScenario extends Requests {

  val httpConf = http
    .baseUrl(baseUrl)
    .headers(headers)
    //.proxy(Proxy("localhost", 8888))

  val scn = scenario("Test challengers.flood.io")

    .exec(openHomePage())
    .exec(step1Request())
    .exec(step2Request())
    .exec(step3Request())
    .exec(step4Request())
    .exec(http( "Code")
      .get("code")
      .check(jsonPath("$.code").saveAs("oneTimeToken"))
    ).pause(5)
    .exec(step5Request())
    .exec{session => println(session.attributes); session}

  setUp(
    scn.inject(atOnceUsers(1))
  ).protocols(httpConf)
}
