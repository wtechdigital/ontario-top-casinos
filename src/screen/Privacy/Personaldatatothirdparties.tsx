import React from 'react'

const Personaldatatothirdparties = ({data}:any) => {
  return (
    <div> <h1 className="text-[36px] font-bold  leading-[52px] xsm:text-10  ">
    {data?.title}
  </h1>
  <ul className="grid !gap-y-[16px] text-base mt-10  ">
        {data?.description?.map((point: any, index: number) => (
          <div key={index} className="flex items-start ">
            <span className="text-[22px] leading-[52px] pb-1">{point}</span>
          </div>
        ))}
      </ul>
      <p className="text-[20px]   leading-[52px] xsm:text-10  ">
        {data?.transfer}
      </p>
      <ul className="grid !gap-y-[16px] text-base mt-10  ">
        {data?.transferDetails?.map((point: any, index: number) => (
          <div key={index} className="flex items-start ">
            <span className="text-[22px] leading-[52px] pb-1">{point}</span>
          </div>
        ))}
      </ul>
      <ul className="grid !gap-y-[16px] text-base mt-10  ">
        {data?.restDetails?.map((point: any, index: number) => (
          <div key={index} className="flex items-start ">
            <span className="text-[22px] leading-[52px] pb-1">{point}</span>
          </div>
        ))}
      </ul>

  </div>
  )
}

export default Personaldatatothirdparties