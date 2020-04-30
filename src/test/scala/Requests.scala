import io.gatling.core.Predef._
import io.gatling.http.Predef._

class Requests extends Simulation {
  val headers = Map(
    "Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Encoding" -> "gzip, deflate, br",
    "Accept-Language" -> "ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3",
    "User-Agent" -> "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:76.0) Gecko/20100101 Firefox/76.0",
    "TE" -> "Trailers",
    "Content-Type" -> " application/x-www-form-urlencoded"
  )

  val baseUrl = "https://challengers.flood.io/"

  def openHomePage() =
    exec(http("Open Home Page")
    .get("")
    .check(css("input[name=authenticity_token]", "value").saveAs("authenticityToken"))
    .check(css("#challenger_step_id", "value").saveAs("challengerStepID"))
  ).pause(5)

  def step1Request() =
    exec(http("Start Test Step 1")
      .post("start")
      .formParamSeq(Seq(
        ("utf8", "✓"),
        ("authenticity_token", "${authenticityToken}"),
        ("challenger[step_id]", "${challengerStepID}"),
        ("challenger[step_number]","1"),
        ("commit", "Start")
      ))
      .check(css("#challenger_step_id", "value").saveAs("challengerStepID"))
      .check(css("#challenger_age > option:nth-child(n+2)", "value").findRandom.saveAs("challengerAge"))
  ).pause(5)

  def step2Request() =
    exec(http("Step 2")
      .post("start")
      .formParamSeq(Seq(
        ("utf8", "✓"),
        ("authenticity_token", "${authenticityToken}"),
        ("challenger[step_id]", "${challengerStepID}"),
        ("challenger[step_number]","2"),
        ("challenger[age]","${challengerAge}"),
        ("commit", "Next")
      ))
      .check(css("#challenger_step_id", "value").saveAs("challengerStepID"))
      .check(css(".collection_radio_buttons").findAll.saveAs("challengerLargestOrderAll"))
      .check(css("input[name=challenger\\[order_selected\\]]", "value").findAll
        .saveAs("challengerOrderSelectedAll"))
    )
    .exec( session => {
      val challengerLargestOrder = session("challengerLargestOrderAll").as[Seq[String]].maxBy(x => x.toInt)
      val challengerLargestOrderIndex = session("challengerLargestOrderAll").as[Seq[String]].indexOf(challengerLargestOrder)
      val challengerOrderSelected = session("challengerOrderSelectedAll").as[Seq[String]].apply(challengerLargestOrderIndex)
      session.setAll(("challengerLargestOrder", challengerLargestOrder), ("challengerOrderSelected",challengerOrderSelected))
    }).pause(5)

  def step3Request() =
    exec(http("Step 3")
      .post("start")
      .formParamSeq(Seq(
        ("utf8", "✓"),
        ("authenticity_token", "${authenticityToken}"),
        ("challenger[step_id]", "${challengerStepID}"),
        ("challenger[step_number]","3"),
        ("challenger[largest_order]","${challengerLargestOrder}"),
        ("challenger[order_selected]","${challengerOrderSelected}"),
        ("commit", "Next")
      ))
      .check(css("#challenger_step_id", "value").saveAs("challengerStepID"))
      .check(css("input[id*=challenger_order_]", "value").findAll.saveAs("challengerOrderValue"))
      .check(css("input[id*=challenger_order_]", "name").findAll.saveAs("challengerOrderNumber"))
    )
    .exec(session => {
      val challengerOrderValue = session("challengerOrderValue").as[Seq[String]]
      val challengerOrderNumber = session("challengerOrderNumber").as[Seq[String]]
      val challengerOrderSeq = challengerOrderNumber.zip(challengerOrderValue)

      session.set("challengerOrderSeq", challengerOrderSeq)
    }).pause(5)

  def step4Request() =
    exec(http("Step 4")
      .post("start")
      .formParamSeq(Seq(
        ("utf8", "✓"),
        ("authenticity_token", "${authenticityToken}"),
        ("challenger[step_id]", "${challengerStepID}"),
        ("challenger[step_number]","4"),
        ("commit", "Next")
      )).formParamSeq("${challengerOrderSeq}")
      .check(css("#challenger_step_id", "value").saveAs("challengerStepID"))
  )

  def step5Request() =
    exec(http("Step 5")
      .post("start")
      .formParamSeq(Seq(
        ("utf8", "✓"),
        ("authenticity_token", "${authenticityToken}"),
        ("challenger[step_id]", "${challengerStepID}"),
        ("challenger[step_number]","5"),
        ("challenger[one_time_token]", "${oneTimeToken}"),
        ("commit", "Next")
      )))

}
