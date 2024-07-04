"use client"
import { Icon } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { DashboardBarChart } from "@/components/ui/dashboard-bar-chart";
import { DashboardAreaChart } from "@/components/ui/dashboard-area-chart";
import { Table } from "@/components/layout/table";
import { Navbar } from "@/components/pages/landing-page/navbar";
import { NavOptions } from "@/components/pages/landing-page/nav-options";
import { UserDetail } from "@/components/pages/landing-page/user-detail";
import { DropdownOptions } from "@/components/pages/landing-page/DropdownOptions";
import { ContentAnalytics } from "@/components/pages/landing-page/content-analytics";

const contentOptions = [
  {
    color: "#00D775",
    header: "Views",
    detail: "1.55k"
  },
  {
    color: "#7C41FF",
    header: "Clicks",
    detail: "1.5k"
  },
  {
    color: "#FFCB03",
    header: "Subscribers",
    detail: "0"
  },
]

const activityOption = [
  {
    header: "Plays",
    detail: 4
  },
  {
    header: "Likes",
    detail: 4
  },
  {
    header: "Comments",
    detail: 4,
  },
  {
    header: "Shares",
    detail: 10
  },
  {
    header: "Saves",
    detail: 10
  }
]

const musicOptions = {
  title: "We Deserve Better",
  artist: "DJ HopeStar",
  streams: "405k",
  releaseDate: "July 29, 2022"
}

const linkOptions = [
  { header: "Total Schedule", detail: "6,390,975" },
  { header: "Contact me", detail: "1,484,160" },
  { header: "Buy me book", detail: "923,814" },
  { header: "Sign Up for a  class", detail: "893,525" },
]

export default function Home() {
  const [activeDropdown, setActiveDropdown] = useState("")
  return (
    <main className="flex relative min-h-screen bg-black flex-col px-[16px] md:px-[30px] pb-[121.86px]">
      <div className="absolute z-0 top-0 left-0 h-[55vh] w-screen bg-no-repeat bg-cover" style={{
        backgroundImage: `url("/images/nasty-c.jpg")`,
        backgroundPosition: "0% 30%",
      }}>
        <div className="relative w-full h-full bg-gradient-to-b from-black/70 to-black/100" />
      </div>
     <Navbar/>
      <div className="w-full relative flex mt-[35px] text-white justify-between">
        <NavOptions/>
        <div>
          <UserDetail/>
          <DropdownOptions {...{activeDropdown, setActiveDropdown}} />
          <div className="flex flex-col space-y-[35px]">
            <ContentAnalytics contentOptions={contentOptions} />
            <div className="flex flex-col-reverse md:flex-row justify-between items-center py-[14px] px-[26px] bg-[#FFFFFF0A] rounded-[37px] border border-[#D7DCE11A]">
              <div className="flex items-center">
                <Icon name="calendar" width={19} />
                <p className="text-sm ml-2.5">Apr 3rd, 2024 to Apr 9th, 2024</p>
              </div>
              <p className="text-[#FFFFFF99]">Select up to 28 days</p>
            </div>
            <div className="bg-[#090909] py-2.5 rounded-[20px] px-[32px] border border-[#D7DCE11A]">
              <span className="flex items-center space-x-1.5 pt-5">
                <h3 className="text-base">
                  Activity
                </h3>
                <Icon name="info" width={13} />
              </span>
              <div className="flex flex-wrap space-x-[5px] py-[40px] w-full">
                {activityOption.map((item, idx) => (
                  <div key={idx} className="bg-[#FFFFFF05] mb-2 flex-1 h-[100px] md:h-[123px] p-5 space-y-2.5 rounded-[10px]">
                    <p className="text-[10px]">{item.header}</p>
                    <p className="text-base">{item.detail}</p>
                  </div>
                ))}
              </div>
              <div>
                <div className="py-5 flex justify-between items-center">
                  <h3 className="text-[11px]">
                    Overview
                  </h3>
                  <DropdownMenu >
                    <DropdownMenuTrigger
                      className={`rounded-full px-5 py-2.5 space-x-[5px] items-center text-white flex bg-white/10`}>
                      <Icon name="line-graph" width={5} />
                      <p className="text-[10px]">Line Graph</p>
                      <Icon name="arrow-down" width={5} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Bar Chart</DropdownMenuItem>
                      <DropdownMenuItem>Pie Chart</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <DashboardAreaChart />
              </div>
            </div>
            <div className="bg-[#090909] py-2.5 rounded-[20px] px-5 md:px-[32px] overflow-hidden border border-[#D7DCE11A]">
              <div className="flex justify-between items-center">
                <span className="flex items-center space-x-1.5 py-5 pt-5">
                  <h3 className="text-base">
                    Top Post
                  </h3>
                  <Icon name="info" width={13} />
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className={`rounded-full px-[15px] py-2.5 space-x-[5px] items-center text-white flex bg-white/10`}>
                    <p className="text-[10px]">Last Month</p>
                    <div>
                      <Icon name="arrow-down-bold" width={8.31} />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Select Time Period</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Last 30 Days</DropdownMenuItem>
                    <DropdownMenuItem>Last Year</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="py-5 flex flex-col overflow-hidden">
                <Table />
                <Button className="mx-auto bg-[rgba(255, 255, 255, 0.02)] px-[25px] py-2.5 text-white gradient-box border-[1px] border-[#FFFFFF80]">View More</Button>
              </div>
            </div>
            <div className="bg-[#090909] py-5 rounded-[20px] border border-[#D7DCE11A]">
              <span className="flex items-center space-x-2.5 pt-5 px-[48px] py-5">
                <h3 className="text-base">
                  Top Performing Links
                </h3>
                <Icon name="info" width={13} />
              </span>
              <p className="text-right text-[#FFFFFF99] px-[50px]">Clicks</p>
              <div className="flex flex-col py-5 px-[50px] w-full">
                {linkOptions.map((item, idx) => (
                  <div key={idx} className="py-5 w-full flex justify-between">
                    <p className="text-sm">{item.header}</p>
                    <p className="text-base font-medium">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#090909] py-5 rounded-[20px] border border-[#D7DCE11A]">
              <span className="flex items-center space-x-2.5 pt-5 px-[48px] py-5 mb-[21px]">
                <h3 className="text-base">
                  Subscribers
                </h3>
                <Icon name="info" width={13} />
              </span>
              <DashboardBarChart />
            </div>
            <div className="bg-[#090909] py-5 rounded-[20px] border border-[#D7DCE11A]">
              <span className="flex items-center space-x-2.5 pt-5 px-[48px] py-5">
                <h3 className="text-base">
                  Top Devices
                </h3>
                <Icon name="info" width={13} />
              </span>
              <p className="text-right text-[#FFFFFF99] px-[50px]">Clicks</p>
              <div className="flex flex-col py-5 px-[50px] w-full">
                {linkOptions.map((item, idx) => (
                  <div key={idx} className="py-5 w-full flex justify-between">
                    <p className="text-sm">{item.header}</p>
                    <p className="text-base font-medium">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#090909] py-5 rounded-[20px] border border-[#D7DCE11A]">
              <span className="flex items-center space-x-2.5 pt-5 px-[48px] py-5">
                <h3 className="text-base">
                  Top Referrers
                </h3>
                <Icon name="info" width={13} />
              </span>
              <DashboardBarChart />
            </div>
          </div>
        </div>
        <div />
      </div>
    </main>
  );
}
