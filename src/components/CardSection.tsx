import React from 'react'
import AnimatedCounter from './AnimatedCounter'

export default function CardSection() {
  return (
    <div className="columns-1 sm:columns-3 px1  space-y-3  mt-12 sm:px-3 md:px-12">
    <div
      style={{
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className=" w-full border-4 border-[#6C6C6C] p-2 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="  overflow-hidden rounded-2xl bg-white text-black md:rounded-2xl ">
        <div className="flex flex-col justify-center items-center gap-9 p-3 md:p-9 ">
          <div className="flex justify-between items-center w-full ">
            <p className="text-sm font-extrabold">Project</p>
            <img src="https://api.iconify.design/ph:projector-screen-chart-fill.svg" alt="" className="w-6" />
          </div>
          <div>
            <p className="text-6xl font-bold mb-6"><AnimatedCounter from={0} to={35} />+</p>
          </div>
        </div>
      </div>
    </div>
    <div
      style={{
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className=" w-full border-4 border-[#6C6C6C] p-2 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="  overflow-hidden rounded-2xl bg-white text-black md:rounded-2xl ">
        <div className="flex flex-col justify-center items-center gap-9 p-3 md:p-9 ">
          <div className="flex justify-between items-center w-full ">
            <p className="text-sm font-extrabold">Clients</p>
            <img src="https://api.iconify.design/material-symbols:person-add.svg" alt="" className="w-6" />
          </div>
          <div>
            <p className="text-6xl font-bold mb-6"><AnimatedCounter from={0} to={10} />+</p>
          </div>
        </div>
      </div>
    </div>
    <div
      style={{
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className=" w-full border-4 border-[#6C6C6C] p-2 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="  overflow-hidden rounded-2xl bg-white text-black md:rounded-2xl ">
        <div className="flex flex-col justify-center items-center gap-9 p-3 md:p-9 ">
          <div className="flex justify-between items-center w-full ">
            <p className="text-sm font-extrabold">Experiences</p>
            <img src="https://api.iconify.design/tabler:menu-deep.svg" alt="" className="w-6" />
          </div>
          <div>
            <p className="text-6xl font-bold mb-6"><AnimatedCounter from={0} to={3} />+</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
