var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "256",
        "ok": "1079",
        "ko": "256"
    },
    "maxResponseTime": {
        "total": "1079",
        "ok": "1079",
        "ko": "256"
    },
    "meanResponseTime": {
        "total": "668",
        "ok": "1079",
        "ko": "256"
    },
    "standardDeviation": {
        "total": "412",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "668",
        "ok": "1079",
        "ko": "256"
    },
    "percentiles2": {
        "total": "873",
        "ok": "1079",
        "ko": "256"
    },
    "percentiles3": {
        "total": "1038",
        "ok": "1079",
        "ko": "256"
    },
    "percentiles4": {
        "total": "1071",
        "ok": "1079",
        "ko": "256"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 50
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 50
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.286",
        "ok": "0.143",
        "ko": "0.143"
    }
},
contents: {
"req_open-home-page-ba7f9": {
        type: "REQUEST",
        name: "Open Home Page",
path: "Open Home Page",
pathFormatted: "req_open-home-page-ba7f9",
stats: {
    "name": "Open Home Page",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1079",
        "ok": "1079",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1079",
        "ok": "1079",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1079",
        "ok": "1079",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1079",
        "ok": "1079",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1079",
        "ok": "1079",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1079",
        "ok": "1079",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1079",
        "ok": "1079",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 100
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.143",
        "ok": "0.143",
        "ko": "-"
    }
}
    },"req_start-test-6152d": {
        type: "REQUEST",
        name: "Start Test",
path: "Start Test",
pathFormatted: "req_start-test-6152d",
stats: {
    "name": "Start Test",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "256",
        "ok": "-",
        "ko": "256"
    },
    "maxResponseTime": {
        "total": "256",
        "ok": "-",
        "ko": "256"
    },
    "meanResponseTime": {
        "total": "256",
        "ok": "-",
        "ko": "256"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "256",
        "ok": "-",
        "ko": "256"
    },
    "percentiles2": {
        "total": "256",
        "ok": "-",
        "ko": "256"
    },
    "percentiles3": {
        "total": "256",
        "ok": "-",
        "ko": "256"
    },
    "percentiles4": {
        "total": "256",
        "ok": "-",
        "ko": "256"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.143",
        "ok": "-",
        "ko": "0.143"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
