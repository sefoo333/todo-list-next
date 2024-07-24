"use client"
import { useState, useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, clear, ischecked, remove, } from "./rtk/slices/todoSlice";
import image1 from "./images/bg-desktop-dark.jpg"
import image2 from "./images/bg-desktop-light.jpg"
import { MdOutlineWbSunny } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { MdDone } from "react-icons/md";
export default function Home() {

  // let n = useContext(darkmoe)


  useEffect(() => {
    localStorage.setItem("mode", "dark")

  }, [])

  const [name, setName] = useState("all")
  let select = useSelector((state) => state.todo);
  let dispatch = useDispatch()

  const todos = () => {
    if (name == "all") {
      return (
        select.map((e) => {
          return (
            <div key={e.id} className="todo flex items-center text-white justify-between px-5">
              <div className="texter flex items-center">
                <div style={localStorage.getItem("mode") === "dark" ? { backgroundColor: "hsl(235, 24%, 19%)", color: "black" } : { backgroundColor: "white", color: "white" }} className="ch_h">
                  <input style={localStorage.getItem("mode") === "dark" ? { backgroundColor: "hsl(235, 24%, 19%)" } : { backgroundColor: "white" }} type="checkbox" checked={e.check} onClick={() => dispatch(ischecked(e.id))}></input>
                  <div className="chh relative">
                    <MdDone className="text-2xl text-white" />
                  </div>
                </div>
                <h1 style={localStorage.getItem("mode") === "dark" ? { backgroundColor: "hsl(235, 24%, 19%)", color: "white" } : { backgroundColor: "white", color: "black" }}>{e.name} </h1>
              </div>
              <IoMdClose className="text-2xl  text-slate-500 cursor-pointer" onClick={() => dispatch(remove(e.id))} />
            </div>
          )
        })
      )
    } else if (name == "active") {
      return (
        select.filter((e) => e.check == false).map((e) => {
          return (
            <div key={e.id} className="todo flex items-center text-white justify-between px-5">
              <div className="texter flex items-center">
                <div style={localStorage.getItem("mode") === "dark" ? { backgroundColor: "hsl(235, 24%, 19%)", color: "black" } : { backgroundColor: "white", color: "white" }} className="ch_h">
                  <input style={localStorage.getItem("mode") === "dark" ? { backgroundColor: "hsl(235, 24%, 19%)" } : { backgroundColor: "white" }} type="checkbox" checked={e.check} onClick={() => dispatch(ischecked(e.id))}></input>
                  <div className="chh relative">
                    <MdDone className="text-2xl text-white" />
                  </div>
                </div>
                <h1 style={localStorage.getItem("mode") === "dark" ? { backgroundColor: "hsl(235, 24%, 19%)", color: "white" } : { backgroundColor: "white", color: "black" }}>{e.name} </h1>
              </div>
              <IoMdClose className="text-2xl  text-slate-500 cursor-pointer" onClick={() => dispatch(remove(e.id))} />
            </div>
          )
        })
      )
    } else {
      return (
        select.filter((e) => e.check == true).map((e) => {
          return (
            <div key={e.id} className="todo flex items-center text-white justify-between px-5">
              <div className="texter flex items-center">
                <div style={localStorage.getItem("mode") === "dark" ? { backgroundColor: "hsl(235, 24%, 19%)", color: "black" } : { backgroundColor: "white", color: "white" }} className="ch_h">
                  <input style={localStorage.getItem("mode") === "dark" ? { backgroundColor: "hsl(235, 24%, 19%)" } : { backgroundColor: "white" }} type="checkbox" checked={e.check} onClick={() => dispatch(ischecked(e.id))}></input>
                  <div className="chh relative">
                    <MdDone className="text-2xl text-white" />
                  </div>
                </div>

                <h1 style={localStorage.getItem("mode") === "dark" ? { backgroundColor: "hsl(235, 24%, 19%)", color: "white" } : { backgroundColor: "white", color: "black" }}>{e.name} </h1>
              </div>
              <IoMdClose className="text-2xl text-slate-500 cursor-pointer" onClick={() => dispatch(remove(e.id))} />
            </div>
          )
        })
      )
    }
  }


  let [dark, setDark] = useState("dark")



  // console.log(image1)
  return (
    <>
      <div className="main relative">
        <img className="w-full relative" src={localStorage.getItem("mode") === "dark" ? image1.src : image2.src} alt="image" />
        <div className="text">
          <h1 className="select-none">TODO</h1>
          {localStorage.getItem("mode") === "light" ? (
            <MdDarkMode onClick={() => {
              if (localStorage.getItem("mode") === "dark") {
                setDark("light")
                localStorage.setItem("mode", "light")
              } else {
                setDark("dark")
                localStorage.setItem("mode", "dark")
              }
              console.log(dark)
            }} />
          ) : (
            <MdOutlineWbSunny onClick={() => {
              if (localStorage.getItem("mode") === "dark") {
                setDark("light")
                localStorage.setItem("mode", "light")
              } else {
                setDark("dark")
                localStorage.setItem("mode", "dark")
              }
              console.log(dark)
            }} />
          )}
        </div>
      </div>
      <div className="window w-full h-screen" style={localStorage.getItem("mode") === "dark" ? { backgroundColor: " hsl(235, 21%, 11%)" } : { backgroundColor: "white" }}>
        <div className="container" >
          <div className="create w-full flex text-white" style={localStorage.getItem("mode") === "dark" ? { boxShadow: "1px 3px 7px 0px hsl(235, 24%, 19%)" } : { boxShadow: "1px 3px 7px 0px hsl(236, 33%, 92%)" }}>
            <div style={localStorage.getItem("mode") === "dark" ? { backgroundColor: "hsl(235, 24%, 19%)", color: "black" } : { backgroundColor: "white", color: "white" }} className="ch_h">
              <input style={localStorage.getItem("mode") === "dark" ? { backgroundColor: "hsl(235, 24%, 19%)" } : { backgroundColor: "white" }} type="checkbox"></input>
              <div className="chh relative">
                <MdDone className="text-2xl text-white" />
              </div>
            </div>
            <input style={localStorage.getItem("mode") === "dark" ? { backgroundColor: "hsl(235, 24%, 19%)", color: "white" } : { backgroundColor: "white", color: "black" }} type="text" onBlur={(e) => {
              dispatch(add(e.target.value))
              console.log(select)
              e.target.value = ""
            }}></input>
          </div>
          <div className="todos w-full" style={localStorage.getItem("mode") === "dark" ? { backgroundColor: "hsl(235, 24%, 19%)" } : { backgroundColor: "white", boxShadow: "1px 3px 7px 0px hsl(236, 33%, 92%)" }}>
            <div className="todolist">
              {todos()}
            </div>
            <div className="footer flex justify-between items-center text-white mt-3 px-3">
              <div className="count_items cursor-pointer" style={localStorage.getItem("mode") !== "dark" ? { color: "hsl(235, 24%, 19%)" } : { color: "white" }}>
                {select.filter((e) => e.check == false).length} items left
              </div>
              <div className="count flex " style={localStorage.getItem("mode") !== "dark" ? { color: "hsl(235, 24%, 19%)" } : { color: "white" }}>
                <div className="t px-2 active text-blue-600 cursor-pointer" onClick={(e) => {
                  setName("all")
                }}>All</div>
                <div onClick={(e) => {
                  setName("active")
                }} className="t px-2 cursor-pointer">
                  Active
                </div>
                <div onClick={(e) => {
                  setName("completed")
                  console.log(select)
                }} className="t px-2 cursor-pointer">
                  completed
                </div>
              </div>
              <div onClick={() => dispatch(clear())} className="clear cursor-pointer" style={localStorage.getItem("mode") !== "dark" ? { color: "hsl(235, 24%, 19%)" } : { color: "white" }}>
                clear completed
              </div>
            </div>
          </div>
          <div className="count_out flex " style={localStorage.getItem("mode") !== "dark" ? { color: "hsl(235, 24%, 19%)", backgroundColor: "white" } : { color: "white", backgroundColor: "#25273c" }}>
            <div className="t px-2 active text-blue-600 cursor-pointer" onClick={(e) => {
              setName("all")
            }}>All</div>
            <div onClick={(e) => {
              setName("active")
            }} className="t px-2 cursor-pointer">
              Active
            </div>
            <div onClick={(e) => {
              setName("completed")
              console.log(select)
            }} className="t px-2 cursor-pointer">
              completed
            </div>
          </div>
        </div>
      </div>

    </>
  );

}
