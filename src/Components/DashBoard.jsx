import React from "react";
import car from "../Assets/Images/car.png";
import Source from "../Assets/Images/source.png";
import destination from "../Assets/Images/destination.png";
import GaugeChart from "react-gauge-chart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import alcoholic from "../Assets/Images/alcohol.png";
import NonAlcholic from "../Assets/Images/good.png";
import closeIcon from "../Assets/Images/cancel.png";
import mazak from "../Assets/Videos/mazak.mp4";
import "./dboard.css";
function DashBoard() {
  const data2 = [
    {
      title: "DMS-A",
      alerts: [
        {
          name: "case of harsh acceleration",
          value: 5,
        },
        {
          name: "case of harsh acceleration",
          value: 5,
        },
        {
          name: "case of harsh acceleration",
          value: 5,
        },
        {
          name: "case of harsh acceleration",
          value: 5,
        },
      ],
    },
    {
      title: "DMS-A",
      alerts: [
        {
          name: "case of harsh acceleration",
          value: 5,
        },
        {
          name: "case of harsh acceleration",
          value: 5,
        },
        {
          name: "case of harsh acceleration",
          value: 5,
        },
        {
          name: "case of harsh acceleration",
          value: 5,
        },
      ],
    },
  ];

  const [switchValue, setSwitchValue] = useState(0);
  const [alcholic, setAlcholic] = useState(true);
  const [buttonStatus, setButtonStatus] = useState(0);
  const data = {
    labels: ["CPU Temprature", "Memory Load", "CPU Usage"],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: "Values in Percentage",
        data: [55, 23, 96],
        // you can set indiviual colors for each bar
        backgroundColor: [
          "rgba(234,66,40, 0.6)",
          "rgba(245,205,25 , 0.6)",
          "rgba(91,225,44 , 0.6)",
        ],

        borderWidth: 1,
        borderColor: "white",
      },
    ],
  };

  const options = {
    scales: {
      xAxes: [
        {
          ticks: {
            min: 0,
            max: 1000,
            stepSize: 1000,
            display: true,
            beginAtZero: false,
            fontSize: 9,
            color: "#fff",
            callback: function (value, index, values) {
              var q = value / 100;
              return q + "k";
            },
          },
          gridLines: {
            color: "#fff", //give the needful color
            display: true,
          },
          stacked: true,
        },
      ],
      yAxes: [
        {
          gridLines: {
            color: "#fff", //give the needful color
          },
          display: true,
          stacked: true,
        },
      ],
    },
  };

  return (
    <div className="xl:position-fixed xl:top-0 xl:h-[100vh] xl:overflow-x-hidden xl:overflow-y-scroll bg-[#202028]">
      <div className="xl:p-10 md:p-[20px] p-[20px] font-poppins bg-[#202028] w-[100vw] h-[100vh] text-white overflow-y-scroll xl:flex xl:justify-evenly xl:flex-wrap xl:items-start">
        <div className=" xl:sticky xl:top-0 md:p-[10px] p-[10px] xl:w-[30%] md:w-full h-fit z-10 shadow-md bg-opacity-70 bg-gray-900 backdrop-blur-lg xl:p-5 rounded-lg xl:ml-[-20px] ">
          {/* heading of the page */}
          <h2>Completed Trips</h2>
          <div className="md:flex md:items-center md:justify-start md:w-full md:flex-wrap xl:my-[30px]">
            {/* Adding the trip id */}
            <div className="block px-[20px] my-[10px] md:w-[50%] md:border-r-[2px] md:border-gray-400">
              <p className="text-gray-400">Trip Id</p>
              <h4>457fggssjjf7489366</h4>
            </div>

            {/* Adding the completed-trip id */}
            <div className="block px-[20px] my-[10px]  md:w-[50%]">
              <p className="text-gray-400">Completed Trip</p>
              <h4>NCL_016</h4>
            </div>

            {/* Adding the registration no. */}
            <div className="block px-[20px] my-[10px]  md:w-[50%] md:border-r-[2px] md:border-gray-400">
              <p className="text-gray-400">Registration No.</p>
              <h4>MH 12 H 3016</h4>
            </div>

            {/* Adding the Driver Name */}
            <div className="block px-[20px] my-[10px] md:w-[50%]">
              <p className="text-gray-400">Driver Name</p>
              <h4>Salman Bhoi</h4>
            </div>
          </div>
          {/* adding the map just after it */}
          <div className="w-full mt-[20px] rounded-2xl">
            <div>
              <iframe
                className="w-full  rounded-2xl xl:aspect-[1.2] mt-[20px]"
                frameborder="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=lonavala&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="xl:w-[calc(70%-50px)] h-auto overflow-scroll hide-scrollbars m-[0px] p-[0px]">
          {/* writting code for map details */}
          <div className="backdrop-blur-lg w-auto h-auto z-10 shadow-md bg-gray-900 p-2 md:p-5 rounded-lg my-[20px]">
            <h2>Trip Analysis</h2>
            <div className="md:flex xl:items-center xl:justify-start xl:w-full xl:flex-wrap">
              <div className="md:flex md:items-center md:justify-start xl:w-[70%] md:flex-wrap">
                {/* total distance */}
                <div className="block p-0 px-[20px] my-[10px] md:w-[50%]">
                  <p className="text-gray-400">Total Distance</p>
                  <h4>376.87 Km</h4>
                </div>

                {/* travelled time */}
                <div className="block p-0 px-[20px] my-[10px] md:w-[50%]">
                  <p className="text-gray-400">Travelled Time</p>
                  <h4>4hrs 14mins 30 sec</h4>
                </div>

                {/* Average speed */}
                <div className="block p-0 px-[20px] my-[10px] md:w-[50%]">
                  <p className="text-gray-400">Average Speed</p>
                  <h4>54.67 KMPH</h4>
                </div>

                {/* Maximum speed */}
                <div className="block p-0 px-[20px] my-[10px] md:w-[50%]">
                  <p className="text-gray-400">Maximum Speed</p>
                  <h4>76.90 KMPH</h4>
                </div>
              </div>
              {/* creating another div to plot chart of speed with time */}
              <div className="xl:flex xl:flex-col xl:items-center xl:justify-evenly">
                <button
                  className="w-36 bg-red-500 hover:bg-red-600 my-[10px] mx-[5px] py-[5px] text-white backdrop-blur-lg font-poppins rounded-md text-lg"
                  onClick={() => setButtonStatus(1)}
                >
                  DMS
                </button>
                <button
                  className="w-36 bg-red-500 hover:bg-red-600 my-[10px] mx-[5px] py-[5px] text-white backdrop-blur-lg font-poppins rounded-md text-lg"
                  onClick={() => setButtonStatus(1)}
                >
                  CAS / CWS
                </button>
              </div>
            </div>
          </div>
          {/* ended the code fot map details */}

          {/* source and destination */}
          <div className="backdrop-blur-lg w-auto h-auto z-10 shadow-md bg-gray-900 p-2  rounded-lg my-[10px]">
            <div className="w-full text-center">
              <div className="w-full lg:flex items-center justify-start mx-[10px] my[20px]">
                <div className="lg:w-[50%] flex items-center lg:justify-start justify-center md:my-[10px]">
                  <img src={Source} className="w-[50px] mr-[5px]" />
                  <div className="block lg:w-[calc(50% - 70px)] text-left">
                    <p className="text-gray-400">Source</p>
                    <p className="text-cyan-400 whitespace-pre-wrap">
                      This is the address provided by the customer
                    </p>
                    <h4>02:04:34 24/07/2023</h4>
                  </div>
                </div>

                <div className="lg:w-[50%] flex items-center lg:justify-start justify-center md:my-[10px]">
                  <img src={destination} className="w-[50px] mr-[5px]" />
                  <div className="block lg:w-[calc(50% - 70px)] text-left">
                    <p className="text-gray-400">Destination</p>
                    <p className="text-cyan-400 whitespace-pre-wrap">
                      This is the address provided by the customer
                    </p>
                    <h4>02:04:34 24/07/2023</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* source and destination ended */}

          <div className="backdrop-blur-lg w-auto h-auto z-10 shadow-md bg-gray-900 p-2 rounded-lg">
            <div
              className="flex items-center justify-start w-full flex-wrap"
              style={{ alignItems: "flex-start" }}
            >
              <div className="block p-0 px-[20px] my-[10px] xl:w-[38%] md:w-[50%] text-center ">
                <p className="text-gray-400">Fuel Indicator</p>
                <GaugeChart
                  id="gauge-chart6"
                  animate={true}
                  colors={["#EA4228", "#F5CD19", "#5BE12C"]}
                  noOfLevels={15}
                  percent={0.5}
                  needleColor="#345243"
                  className="mx-auto"
                  style={{ width: "200px" }}
                />
              </div>

              {/* temptrature , memory load , cpu usage */}

              <div className="block p-0 px-[20px] my-[10px] xl:w-[38%] md:w-[50%] text-center  overflow-x-scroll  md:overflow-hidden">
                <p className="text-gray-400">CPU Data</p>
                <Bar data={data} options={options} className="mx-auto" />
              </div>

              <div className="block p-0 px-[20px] my-[10px] xl:w-[38%] md:w-[50%] text-center ">
                {alcholic ? (
                  <>
                    <p className="text-gray-400">Alchol Consumption</p>
                    <img src={alcoholic} className="mt-[10px] mx-auto" />
                    <h5 className="mt-[20px]">Detected</h5>
                  </>
                ) : (
                  <>
                    <p className="text-gray-400">Alchol Consumption</p>
                    <img src={NonAlcholic} className="mt-[10px] mx-auto" />
                    <h5 className="mt-[20px]">Not-Detected</h5>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {buttonStatus == 1 ? (
        <>
          {/* popup code form here */}
          <div className="lg:w-[50vw] md:w-[80%] w-[100%] h-screen fixed top-0 right-0 overflow-y-scroll overflow-x-hidden bg-white text-black border-l-[10px] border-black font-poppins animate-slider duration-1000">
            <img
              src={closeIcon}
              className="fixed top-[10px] right-[20px] z-40 animate-cancelnow duration-2000"
              onClick={() => setButtonStatus(0)}
            />
            <div>
              <h2 style={{ textAlign: "center" }}>DMS</h2>
              <div className="flex items-center justify-evenly">
                {switchValue == 0 ? (
                  <>
                    <h4
                      className="cursor-pointer m-[5px] p-0"
                      style={{ borderBottom: "4px solid blue" }}
                    >
                      Alerts
                    </h4>
                    <h4
                      className="cursor-pointer m-[5px] p-0"
                      onClick={() => setSwitchValue(1)}
                    >
                      Media
                    </h4>
                  </>
                ) : (
                  <>
                    <h4
                      className="cursor-pointer m-[5px] p-0"
                      onClick={() => setSwitchValue(0)}
                    >
                      Alerts
                    </h4>
                    <h4
                      className="cursor-pointer m-[5px] p-0"
                      style={{ borderBottom: "4px solid blue" }}
                    >
                      Media
                    </h4>
                  </>
                )}
              </div>
              <>
                <div className="md:flex items-center justify-center flex-wrap">
                  {data2.map((ele) => (
                    <div className="md:w-[calc(50%-40px)] m-[20px] mx-[10px] p-[20px] bg-gray-300 rounded-10">
                      {switchValue == 0 ? (
                        <>
                          <div className="w-[100%] my-[20px]">
                            <h4>{ele.title}</h4>
                            {ele.alerts.map((e) => (
                              <>
                                <div className="flex items-center justify-between">
                                  <div style={{ display: "flex" }}>
                                    {" "}
                                    <input
                                      type="checkbox"
                                      name="category"
                                    ></input>
                                    <p for="category">{e.name}</p>
                                  </div>
                                  <div>
                                    <h4 className="text-red-500 bg-white rounded-full h-[30px] w-[30px] text-center flex items-center justify-center mt-[10px]">
                                      {e.value}
                                    </h4>
                                  </div>
                                </div>
                              </>
                            ))}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-full my-[20px]">
                            <video
                              className="w-[100%]"
                              controls
                              controlsList="nodownload"
                            >
                              <source src={mazak} type="video/mp4" />
                            </video>
                            <h4>Alert : value</h4>
                            <h4>TimeStamp : 44:54:55 24/5/2023</h4>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default DashBoard;
