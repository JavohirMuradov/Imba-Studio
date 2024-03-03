import React, { useEffect, useState } from "react";

const filmTypes = [
  {
    label: "Full film",
    duration: "(1-3 hours)",
  },
  {
    label: "Highlight",
    duration: "(5-7 minutes)",
  },
  {
    label: "Social film",
    duration: "(1-2 minutes)",
  },
  {
    label: "Feature film",
    duration: "(10-30 minutes)",
  },
];

const Section5 = () => {
  var [total, setTotal] = useState(0)
  var [typeFilm, setTypeFilm] = useState(" ")
  var [check, setCheck] = useState(false)
  var [camera, setCamera] = useState("one")
  var [eventType, setEventType] = useState("wedding")
  var [videoQuality, setVideQuality] = useState("select3")
  useEffect(() => {
    function chooseFilm(typeFilm, check) {
      if (check === true) {
        switch (typeFilm) {
          case "Full film": {
            switch (videoQuality) {
              case "select3": {
                switch (eventType) {
                  case "wedding": {
                    switch (camera) {
                      case "one": {
                        setTotal(total + 120)
                        break;
                      }
                      case "two": {
                        setTotal(total + 180)
                        break;
                      }
                      case "three": {
                        setTotal(total + 220)
                        break;
                      }
                      case "four": {
                        setTotal(total + 250)
                        break;
                      }
                    }
                    break;
                  }
                  case "barMitzvah": {
                    switch (camera) {
                      case "one": {
                        setTotal(total + 100)
                        break;
                      }
                      case "two": {
                        setTotal(total + 150)
                        break;
                      }
                      case "three": {
                        setTotal(total + 180)
                        break;
                      }
                      case "four": {
                        setTotal(total + 210)
                        break;
                      }
                    }
                    break;
                  }
                }
                break;
              }
              case "select4": {
                switch (eventType) {
                  case "wedding": {
                    switch (camera) {
                      case "one": {
                        setTotal(total + 140)
                        break;
                      }
                      case "two": {
                        setTotal(total + 220)
                        break;
                      }
                      case "three": {
                        setTotal(total + 260)
                        break;
                      }
                      case "four": {
                        setTotal(total + 300)
                        break;
                      }
                    }
                    break;
                  }
                  case "barMitzvah": {
                    switch (camera) {
                      case "one": {
                        setTotal(total + 120)
                        break;
                      }
                      case "two": {
                        setTotal(total + 180)
                        break;
                      }
                      case "three": {
                        setTotal(total + 220)
                        break;
                      }
                      case "four": {
                        setTotal(total + 250)
                        break;
                      }
                    }
                    break;
                  }
                }
                break;
              }
            }
            break;
          }
          case "Highlight": {
            switch (videoQuality) {
              case "select3": {
                switch (eventType) {
                  case "wedding": {
                    switch (camera) {
                      case "one": {
                        setTotal(total + 100)
                        break;
                      }
                      case "two": {
                        setTotal(total + 150)
                        break;
                      }
                      case "three": {
                        setTotal(total + 180)
                        break;
                      }
                      case "four": {
                        setTotal(total + 210)
                        break;
                      }
                    }
                    break;
                  }
                  case "barMitzvah": {
                    switch (camera) {
                      case "one": {
                        setTotal(total + 80)
                        break;
                      }
                      case "two": {
                        setTotal(total + 120)
                        break;
                      }
                      case "three": {
                        setTotal(total + 140)
                        break;
                      }
                      case "four": {
                        setTotal(total + 170)
                        break;
                      }
                    }
                    break;
                  }
                }
                break;
              }
              case "select4": {
                switch (eventType) {
                  case "wedding": {
                    switch (camera) {
                      case "one": {
                        setTotal(total + 120)
                        break;
                      }
                      case "two": {
                        setTotal(total + 180)
                        break;
                      }
                      case "three": {
                        setTotal(total + 220)
                        break;
                      }
                      case "four": {
                        setTotal(total + 250)
                        break;
                      }
                    }
                    break;
                  }
                  case "barMitzvah": {
                    switch (camera) {
                      case "one": {
                        setTotal(total + 100)
                        break;
                      }
                      case "two": {
                        setTotal(total + 150)
                        break;
                      }
                      case "three": {
                        setTotal(total + 180)
                        break;
                      }
                      case "four": {
                        setTotal(total + 210)
                        break;
                      }
                    }
                    break;
                  }
                }
                break;
              }
            }

            break;
          }
          case "Social film": {
            switch (videoQuality) {
              case "select3": {
                switch (eventType) {
                  case "wedding": {
                    switch (camera) {
                      case "one": {
                        setTotal(total + 80)
                        break;
                      }
                      case "two": {
                        setTotal(total + 120)
                        break;
                      }
                      case "three": {
                        setTotal(total + 140)
                        break;
                      }
                      case "four": {
                        setTotal(total + 170)
                        break;
                      }
                    }
                    break;
                  }
                  case "barMitzvah": {
                    switch (camera) {
                      case "one": {
                        setTotal(total + 60)
                        break;
                      }
                      case "two": {
                        setTotal(total + 90)
                        break;
                      }
                      case "three": {
                        setTotal(total + 110)
                        break;
                      }
                      case "four": {
                        setTotal(total + 130)
                        break;
                      }
                    }
                    break;
                  }
                }
                break;
              }
              case "select4": {
                switch (eventType) {
                  case "wedding": {
                    switch (camera) {
                      case "one": {
                        setTotal(total + 100)
                        break;
                      }
                      case "two": {
                        setTotal(total + 150)
                        break;
                      }
                      case "three": {
                        setTotal(total + 180)
                        break;
                      }
                      case "four": {
                        setTotal(total + 210)
                        break;
                      }
                    }
                    break;
                  }
                  case "barMitzvah": {
                    switch (camera) {
                      case "one": {
                        setTotal(total + 80)
                        break;
                      }
                      case "two": {
                        setTotal(total + 120)
                        break;
                      }
                      case "three": {
                        setTotal(total + 140)
                        break;
                      }
                      case "four": {
                        setTotal(total + 170)
                        break;
                      }
                    }
                    break;
                  }
                }
                break;
              }
            }
            break;
          }
          case "Feature film": {
            switch (videoQuality) {
              case "select3": {
                switch (eventType) {
                  case "wedding": {
                    switch (camera) {
                      case "one": {
                        setTotal(total + 100)
                        break;
                      }
                      case "two": {
                        setTotal(total + 150)
                        break;
                      }
                      case "three": {
                        setTotal(total + 180)
                        break;
                      }
                      case "four": {
                        setTotal(total + 210)
                        break;
                      }
                    }
                    break;
                  }
                  case "barMitzvah": {
                    switch (camera) {
                      case "one": {
                        setTotal(total + 80)
                        break;
                      }
                      case "two": {
                        setTotal(total + 120)
                        break;
                      }
                      case "three": {
                        setTotal(total + 140)
                        break;
                      }
                      case "four": {
                        setTotal(total + 170)
                        break;
                      }
                    }
                    break;
                  }
                }
                break;
              }
              case "select4": {
                switch (eventType) {
                  case "wedding": {
                    switch (camera) {
                      case "one": {
                        setTotal(total + 120)
                        break;
                      }
                      case "two": {
                        setTotal(total + 180)
                        break;
                      }
                      case "three": {
                        setTotal(total + 220)
                        break;
                      }
                      case "four": {
                        setTotal(total + 250)
                        break;
                      }
                    }
                    break;
                  }
                  case "barMitzvah": {
                    switch (camera) {
                      case "one": {
                        setTotal(total + 100)
                        break;
                      }
                      case "two": {
                        setTotal(total + 150)
                        break;
                      }
                      case "three": {
                        setTotal(total + 180)
                        break;
                      }
                      case "four": {
                        setTotal(total + 210)
                        break;
                      }
                    }
                    break;
                  }
                }
                break;
              }
            }
            break;
          }
        }
      } else {
        switch (typeFilm) {
          case "Full film": {
            switch (videoQuality) {
              case "select3": {
                switch (eventType) {
                  case "wedding": {
                    switch (camera) {
                      case "one": {
                        setTotal(total - 120)
                        break;
                      }
                      case "two": {
                        setTotal(total - 180)
                        break;
                      }
                      case "three": {
                        setTotal(total - 220)
                        break;
                      }
                      case "four": {
                        setTotal(total - 250)
                        break;
                      }
                    }
                    break;
                  }
                  case "barMitzvah": {
                    switch (camera) {
                      case "one": {
                        setTotal(total - 100)
                        break;
                      }
                      case "two": {
                        setTotal(total - 150)
                        break;
                      }
                      case "three": {
                        setTotal(total - 180)
                        break;
                      }
                      case "four": {
                        setTotal(total - 210)
                        break;
                      }
                    }
                    break;
                  }
                }
                break;
              }
              case "select4": {
                switch (eventType) {
                  case "wedding": {
                    switch (camera) {
                      case "one": {
                        setTotal(total - 140)
                        break;
                      }
                      case "two": {
                        setTotal(total - 220)
                        break;
                      }
                      case "three": {
                        setTotal(total - 260)
                        break;
                      }
                      case "four": {
                        setTotal(total - 300)
                        break;
                      }
                    }
                    break;
                  }
                  case "barMitzvah": {
                    switch (camera) {
                      case "one": {
                        setTotal(total - 120)
                        break;
                      }
                      case "two": {
                        setTotal(total - 180)
                        break;
                      }
                      case "three": {
                        setTotal(total - 220)
                        break;
                      }
                      case "four": {
                        setTotal(total - 250)
                        break;
                      }
                    }
                    break;
                  }
                }
                break;
              }
            }
            break;
          }
          case "Highlight": {
            switch (videoQuality) {
              case "select3": {
                switch (eventType) {
                  case "wedding": {
                    switch (camera) {
                      case "one": {
                        setTotal(total - 100)
                        break;
                      }
                      case "two": {
                        setTotal(total - 150)
                        break;
                      }
                      case "three": {
                        setTotal(total - 180)
                        break;
                      }
                      case "four": {
                        setTotal(total - 210)
                        break;
                      }
                    }
                    break;
                  }
                  case "barMitzvah": {
                    switch (camera) {
                      case "one": {
                        setTotal(total - 80)
                        break;
                      }
                      case "two": {
                        setTotal(total - 120)
                        break;
                      }
                      case "three": {
                        setTotal(total - 140)
                        break;
                      }
                      case "four": {
                        setTotal(total - 170)
                        break;
                      }
                    }
                    break;
                  }
                }
                break;
              }
              case "select4": {
                switch (eventType) {
                  case "wedding": {
                    switch (camera) {
                      case "one": {
                        setTotal(total - 120)
                        break;
                      }
                      case "two": {
                        setTotal(total - 180)
                        break;
                      }
                      case "three": {
                        setTotal(total - 220)
                        break;
                      }
                      case "four": {
                        setTotal(total - 250)
                        break;
                      }
                    }
                    break;
                  }
                  case "barMitzvah": {
                    switch (camera) {
                      case "one": {
                        setTotal(total - 100)
                        break;
                      }
                      case "two": {
                        setTotal(total - 150)
                        break;
                      }
                      case "three": {
                        setTotal(total - 180)
                        break;
                      }
                      case "four": {
                        setTotal(total - 210)
                        break;
                      }
                    }
                    break;
                  }
                }
                break;
              }
            }

            break;
          }
          case "Social film": {
            switch (videoQuality) {
              case "select3": {
                switch (eventType) {
                  case "wedding": {
                    switch (camera) {
                      case "one": {
                        setTotal(total - 80)
                        break;
                      }
                      case "two": {
                        setTotal(total - 120)
                        break;
                      }
                      case "three": {
                        setTotal(total - 140)
                        break;
                      }
                      case "four": {
                        setTotal(total - 170)
                        break;
                      }
                    }
                    break;
                  }
                  case "barMitzvah": {
                    switch (camera) {
                      case "one": {
                        setTotal(total - 60)
                        break;
                      }
                      case "two": {
                        setTotal(total - 90)
                        break;
                      }
                      case "three": {
                        setTotal(total - 110)
                        break;
                      }
                      case "four": {
                        setTotal(total - 130)
                        break;
                      }
                    }
                    break;
                  }
                }
                break;
              }
              case "select4": {
                switch (eventType) {
                  case "wedding": {
                    switch (camera) {
                      case "one": {
                        setTotal(total - 100)
                        break;
                      }
                      case "two": {
                        setTotal(total - 150)
                        break;
                      }
                      case "three": {
                        setTotal(total - 180)
                        break;
                      }
                      case "four": {
                        setTotal(total - 210)
                        break;
                      }
                    }
                    break;
                  }
                  case "barMitzvah": {
                    switch (camera) {
                      case "one": {
                        setTotal(total - 80)
                        break;
                      }
                      case "two": {
                        setTotal(total - 120)
                        break;
                      }
                      case "three": {
                        setTotal(total - 140)
                        break;
                      }
                      case "four": {
                        setTotal(total - 170)
                        break;
                      }
                    }
                    break;
                  }
                }
                break;
              }
            }
            break;
          }
          case "Feature film": {
            switch (videoQuality) {
              case "select3": {
                switch (eventType) {
                  case "wedding": {
                    switch (camera) {
                      case "one": {
                        setTotal(total - 100)
                        break;
                      }
                      case "two": {
                        setTotal(total - 150)
                        break;
                      }
                      case "three": {
                        setTotal(total - 180)
                        break;
                      }
                      case "four": {
                        setTotal(total - 210)
                        break;
                      }
                    }
                    break;
                  }
                  case "barMitzvah": {
                    switch (camera) {
                      case "one": {
                        setTotal(total - 80)
                        break;
                      }
                      case "two": {
                        setTotal(total - 120)
                        break;
                      }
                      case "three": {
                        setTotal(total - 140)
                        break;
                      }
                      case "four": {
                        setTotal(total - 170)
                        break;
                      }
                    }
                    break;
                  }
                }
                break;
              }
              case "select4": {
                switch (eventType) {
                  case "wedding": {
                    switch (camera) {
                      case "one": {
                        setTotal(total - 120)
                        break;
                      }
                      case "two": {
                        setTotal(total - 180)
                        break;
                      }
                      case "three": {
                        setTotal(total - 220)
                        break;
                      }
                      case "four": {
                        setTotal(total - 250)
                        break;
                      }
                    }
                    break;
                  }
                  case "barMitzvah": {
                    switch (camera) {
                      case "one": {
                        setTotal(total - 100)
                        break;
                      }
                      case "two": {
                        setTotal(total - 150)
                        break;
                      }
                      case "three": {
                        setTotal(total - 180)
                        break;
                      }
                      case "four": {
                        setTotal(total - 210)
                        break;
                      }
                    }
                    break;
                  }
                }
                break;
              }
            }
            break;
          }
        }
      }
    }
    chooseFilm(typeFilm, check)
  }, [typeFilm, check])
  return (
    <section className="px-5 sm:px-32 pb-20 sm:pb-10 pt-5 sm:pt-20 mx-auto bg-[#eee]" id="prices">
      <div className="mb-7">
        <a href="#price" aria-hidden="true" className="hidden">
          #
        </a>
        <h2 className="flex justify-center items-center text-center gap-3 mx-auto my-0 mt-10 text-2xl lg:text-4xl font-bold leading-10 text-black pb-4">
          Price <span className="font-thin">Calculator</span>
        </h2>
        <div className="w-[100px] h-[3px] bg-[#411b7e] mx-auto mb-10"></div>
      </div>
      <div
        className="bodyPart w-full border border-solid border-gray-300 p-4">
        <div className="w-full border border-solid border-gray-300 p-4">
          <p>Event type</p>
          <div className="flex sm:gap-5 sm:flex-row flex-col gap-2 items-start">
            <div className="flex justify-center flex-row-reverse border-solid bg-[#ddd] border-gray-300  h-10 w-32 mt-2 border rounded-lg focus:border-blue-700 transition-all hover:cursor-pointer items-center">
              <input
                className="relative h-5 w-5 rounded-full border flex focus:bg-blue-700 hover:cursor-pointer"
                type="radio"
                value="wedding"
                name="select"
                defaultChecked={true}
                onChange={(radio) => { setEventType(radio.target.value) }}
                id="select1"
              />
              <label htmlFor="select1" className="inline-block ">
                <p className="mr-2 text-sm">Wedding</p>
              </label>
            </div>
            <div className="flex justify-center flex-row-reverse border-solid bg-[#ddd] border-gray-300  h-10 w-32 mt-2 border rounded-lg focus:border-blue-700 transition-all hover:cursor-pointer items-center">
              <input
                className="relative h-5 w-5 rounded-full border flex focus:bg-blue-700 hover:cursor-pointer"
                type="radio"
                value="barMitzvah"
                name="select"
                onChange={(radio) => { setEventType(radio.target.value) }}
                id="select2"
              />
              <label htmlFor="select2">
                <p className="mr-2 text-sm">Bar Mitzvah</p>
              </label>
            </div>
          </div>
        </div>
        <ul className="mt-2 w-full text-sm font-medium text-gray-900 border border-gray-300 ">
          {filmTypes.map(({ label, duration }) => {
            return <li
              key={label}
              className="w-full border-b border-gray-300 dark:border-gray-600 hover:bg-stone-300">
              <div className="flex items-center pl-3">
                <input
                  id={label}
                  type="checkbox"
                  onChange={(checkbox) => { setTypeFilm(label); setCheck(checkbox.target.checked) }}
                  value={label}
                  className="w-4 h-4 mx-1 text-blue-500 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-400 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor={label}
                  className="w-full py-3 ml-3 text-lg font-medium text-gray-900 dark:text-gray-300 border-l border-solid border-gray-300 pl-2">
                  {label} <span className="text-xs">{duration}</span>
                </label>
              </div>
            </li>
          })}
        </ul>
        <div className="flex items-center gap-5 mt-4 w-full border border-solid border-gray-300 p-2">
          <p className="sm:text-xl text-base">How many cameras worked</p>
          <select
            name=""
            id="cameras"
            className="text-lg w-40 p-1.5 rounded-xl" onChange={(camera) => { setCamera(camera.target.value) }}>
            <option defaultValue="one">1 Camera</option>
            <option value="two">2 Camera</option>
            <option value="three">3 Camera</option>
            <option value="four">4 Camera</option>
          </select>
        </div>
        <div className="mt-4 w-full border border-solid border-gray-300 p-4">
          <p>Video resolution:</p>
          <div className="flex sm:gap-5 sm:flex-row flex-col gap-2 items-start">
            <div className="flex justify-center flex-row-reverse border-solid bg-[#ddd] border-gray-300  h-10 w-32 mt-2 border rounded-lg focus:border-blue-700 transition-all hover:cursor-pointer items-center">
              <input
                className="relative h-5 w-5 rounded-full border flex focus:bg-blue-700 hover:cursor-pointer"
                type="radio"
                name="select"
                onChange={(radio) => { setVideQuality(radio.target.id); }}
                id="select3"
                defaultChecked={true}
              />
              <label htmlFor="select3" className="inline-block ">
                <p className="mr-2 text-sm">
                  Full HD <span className="text-xs">(1080p)</span>
                </p>
              </label>
            </div>
            <div className="flex justify-center flex-row-reverse border-solid bg-[#ddd] border-gray-300  h-10 w-32 mt-2 border rounded-lg focus:border-blue-700 transition-all hover:cursor-pointer items-center">
              <input
                className="relative h-5 w-5 rounded-full border flex focus:bg-blue-700 hover:cursor-pointer"
                type="radio"
                name="select"
                onChange={(radio) => { setVideQuality(radio.target.id); }}
                id="select4"
              />
              <label htmlFor="select4">
                <p className="mr-2 text-sm">
                  4K <span className="text-xs">(2160p)</span>{" "}
                </p>
              </label>
            </div>
          </div>
        </div>


        <div className="mt-4 w-full py-4 px-2">
          <form className="flex sm:items-center sm:flex-row sm:justify-between flex-col gap-3 items-start">
            <h3 className="text-4xl text-blue-600 font-bold">Total: ${total}</h3>
            <button className="min-h-14 bg-[#411b7e] text-[#f5f5f5] hover:bg-[#e0ccff] hover:text-[#411b7e] font-semibold px-5 rounded-md duration-300">
              Order Now
            </button>
          </form>
        </div>
      </div >
    </section >
  );
};

export default Section5;