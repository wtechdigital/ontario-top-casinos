import React from 'react'

const WhereAndHowPersonalDataStore = ({data}:any) => {
  return (
    <div>
      <h1 className="text-[48px] font-bold leading-[52px] xsm:text-10">
        {data?.title}
      </h1>
      <ul className=" text-base">
        {data?.description?.map((point: any, index: number) => (
          <div key={index} className="flex items-start" >
            <span  className="pb-1 mr-1"> {index + 1}.</span>
            <span className="pb-1"  dangerouslySetInnerHTML={{ __html: point}}>
             
            </span>
          </div>
        ))}
      </ul>
      </div>
  )
}

export default WhereAndHowPersonalDataStore