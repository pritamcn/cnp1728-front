"use client";
import React, { useState,useEffect } from "react";
import OverView from "../../../img/categoryplaceholder.png";
import Image from "next/image";
import { Remarkable } from 'remarkable';
import { imagePath } from "@/app/config";
const md = new Remarkable({
  html:         true,        // Enable HTML tags in source
  xhtmlOut:     true,        // Use '/' to close single tags (<br />)
  breaks:       true, 
});
function renderMarkdownToHTML(markdown) {
  const renderedHTML = md.render(markdown);
  return {__html: renderedHTML};
}
const Advice = ({value}) => {
  const [tab, settab] = useState("");
  const markup = renderMarkdownToHTML(value.AdviceDescription);
  const markupOverView = renderMarkdownToHTML(value.OverviewDescription);
  const markupCosts = renderMarkdownToHTML(value.CostsDescription);
  const markupBrand = renderMarkdownToHTML(value.BrandDescription);
  const markupReports = renderMarkdownToHTML(value.ReportsDescription);
  useEffect(() => {
    if(tab ===""){
     if(value?.OverviewDescription !==""){
      settab("overview")
     }
     else if(value?.CostsDescription !==""){
      settab("costs")
     }
     else if(value?.BrandDescription !==""){
      settab("manufacturer")
     }
     else if(value?.ReportsDescription !==""){
      settab("reports")
     }
    }
  }, [tab]);
  return (
    <>
      <h2 className="font-semibold uppercase">{value?.AdviceTitle} </h2>
      <p className="simple" dangerouslySetInnerHTML={markup}>
      </p>
      <div className="c-tab-roundedBtn mt-8">
        <ul
          className="nav nav-tabs c-tab-roundedBtn--nav flex flex-wrap items-start justify-start list-none border-b-0 pl-0"
          id="tabs-tabscroll"
          role="tablist"
        >
          {value?.OverviewDescription !=="" && 
           <li
           className="nav-item c-tab-roundedBtn--item text-center"
           role="presentation"
         >
           <div
           className={tab ==="overview"?"c-tab-round--link nav-link block min-w-min active":"c-tab-round--link nav-link block min-w-min"}
             // className="c-tab-round--link nav-link block min-w-min active"
             id="tabs-round-01-tabFill"
             data-bs-toggle="pill"
             data-bs-target="#tabs-round-01"
             role="tab"
             aria-controls="tabs-round-01"
             aria-selected="false"
             onClick={() => settab("overview")}
           >
             <span>Overview</span>
             <span className="icon-tb"></span>
           </div>
         </li>
          }
          {value?.CostsDescription !=="" && 
            <li
            className="nav-item c-tab-roundedBtn--item text-center"
            role="presentation"
          >
            <div
              className={tab ==="costs"?"c-tab-round--link nav-link block min-w-min active":"c-tab-round--link nav-link block min-w-min"}
              id="tabs-round-02-tabFill"
              data-bs-toggle="pill"
              data-bs-target="#tabs-round-02"
              role="tab"
              aria-controls="tabs-round-02"
              aria-selected="false"
              onClick={() => settab("costs")}
            >
              <span>Costs</span>
              <span className="icon-tb"></span>
            </div>
          </li>
          }
           {value?.BrandDescription !=="" && 
            <li
            className="nav-item c-tab-roundedBtn--item text-center"
            role="presentation"
          >
            <div
        className={tab ==="manufacturer"?"c-tab-round--link nav-link block min-w-min active":"c-tab-round--link nav-link block min-w-min"}
              id="tabs-round-03-tabFill"
              data-bs-toggle="pill"
              data-bs-target="#tabs-round-03"
              role="tab"
              aria-controls="tabs-round-03"
              aria-selected="false"
              onClick={() => settab("manufacturer")}
            >
              <span>Brand and Manufacturer</span>
              <span className="icon-tb"></span>
            </div>
          </li>
           }
         {value?.ReportsDescription !=="" && 
          <li
          className="nav-item c-tab-roundedBtn--item text-center"
          role="presentation"
        >
          <div
   className={tab ==="Reports"?"c-tab-round--link nav-link block min-w-min active":"c-tab-round--link nav-link block min-w-min"}
            id="tabs-round-04-tabFill"
            data-bs-toggle="pill"
            data-bs-target="#tabs-round-04"
            role="tab"
            aria-controls="tabs-round-04"
            aria-selected="false"
            onClick={() => settab("reports")}
          >
            <span>More Reports</span>
            <span className="icon-tb"></span>
          </div>
        </li>
         }
         
        </ul>
        <div
          className="tab-content c-tab-content bg-white py-6 px-0"
          id="tabs-tabContentFill border"
        >
          {tab === "overview" && (
            <div
              className="tab-pane fade show active"
              id="tabs-round-01"
              role="tabpanel"
              aria-labelledby="tabs-round-01-tabFill"
            >
              <div className="flex flex-col md:flex-row">
                {value?.OverviewDescription !=="" ? <div className="flex-1">
                <p dangerouslySetInnerHTML={markupOverView}></p>
                </div> :null}

                <div className="w-full md:w-2/5 md:ml-10">
                  <Image src={value?.OverviewImage !==""?imagePath+value?.OverviewImage:OverView} className="w-full mb-10" alt="overview" width={400} height={400}/>
                  <div className="flex  justify-center">
                    <h3 className=" text-light-blue2 font-semibold font-body">
                      {value?.OverviewImageTitle !=="" ?value?.OverviewImageTitle :null}
                    </h3>
                   
                  </div>
                </div>
              </div>
            </div>
          )}
          {tab === "costs" && (
            <div
              className="tab-pane fade"
              id="tabs-round-02"
              role="tabpanel"
              aria-labelledby="tabs-round-02-tabFill"
            >
               {value?.CostsDescription !=="" ? <div className="flex-1">
                <p dangerouslySetInnerHTML={markupCosts}></p>
                </div> :null}
            </div>
          )}
          {tab === "manufacturer" && (
            <div
              className="tab-pane fade"
              id="tabs-round-03"
              role="tabpanel"
              aria-labelledby="tabs-round-03-tabFill"
            >
                {value?.BrandDescription !=="" ? <div className="flex-1">
                <p dangerouslySetInnerHTML={markupBrand}></p>
                </div> :null}
            </div>
          )}
          {tab === "reports" && (
            <div
              className="tab-pane fade"
              id="tabs-round-04"
              role="tabpanel"
              aria-labelledby="tabs-round-04-tabFill"
            >
               {value?.ReportsDescription !=="" ? <div className="flex-1">
                <p dangerouslySetInnerHTML={markupReports}></p>
                </div> :null}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Advice;
