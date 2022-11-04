import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import LeftNav from "../LeftNav/LeftNav";
import RightGrid from "./RightGrid";
import { FaCartPlus } from "react-icons/fa";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://paradox-hero-paradox-bd.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div>
      <h1 className="text-3xl text-center my-3">
        Here are a few courses we are providing right now.
      </h1>
      <div>
        <div className="grid grid-flow-col grid-cols-12 justify-evenly ">
          <div class="col-span-4 sticky hidden lg:block">
            <div className="m-2">
              <div className="min-w-screen min-h-screen  flex items-center justify-center font-sans overflow-hidden overflow-x-auto w-full">
                <table className="table ">
                  <thead>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </td>
                      <th>Course Name</th>
                    </tr>
                  </thead>
                  <tbody className="hover">
                    {data.map((course) => (
                      <LeftNav course={course}></LeftNav>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className="text-end">
                        <label>Total courses {data.length}</label>
                      </td>

                      <td className="text-center">
                        <label>Selected: 0</label>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <br />
              <div className="flex justify-end">
                <button className="btn btn-outline btn-success">
                  Checkout <FaCartPlus></FaCartPlus>
                </button>
              </div>
            </div>
            <br />
            <br />
            <div className="flex h-96 justify-center">
              <div className=" w-60 carousel carousel-vertical rounded-box">
                {data.map((course) => (
                  <div className="carousel-item ">
                    <Link to={`/course/${course.id}`}>
                      <img src={course.img} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div class="lg:col-span-8 col-span-12 ">
            <div className="flex m-4 flex-wrap justify-evenly items-center">
              {data.map((course) => (
                <RightGrid course={course}></RightGrid>
              ))}
            </div>
          </div>
        </div>

        {/* drawer  */}

        <div className="drawer visible lg:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex justify-center">
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button"
            >
              Course list
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <div class="col-span-12  ">
              <div className="">
                <div className="   flex items-center justify-center font-sans overflow-hidden overflow-x-auto ">
                  <table className="table ">
                    <thead>
                      <tr>
                        <td>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </td>
                        <th>Course Name</th>
                      </tr>
                    </thead>
                    <tbody className="hover">
                      {data.map((course) => (
                        <LeftNav course={course}></LeftNav>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td className="text-end">
                          <label>Total courses {data.length}</label>
                        </td>

                        <td className="text-center">
                          <label>Selected: 0</label>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <br />
                <div className="flex justify-end">
                  <button className="btn btn-outline btn-success">
                    Checkout <FaCartPlus></FaCartPlus>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
