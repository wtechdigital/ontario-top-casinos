import React from 'react'

const CookiesTechnologies = ({data}:any) => {
  return (
    <div>
       <h1 className="text-[36px] font-bold leading-[52px] xsm:text-10  ">
        {data?.title}
        </h1>
        <ul className="grid !gap-y-[16px] text-base mt-2">
          {data?.description?.map((point: any, index: number) => (
            <div key={index} className="flex items-start ">
               <span
                className="text-[22px] pb-1 mr-1 leading-[52px]"
        
              >{index+1}.</span>
              <span
                className="text-[22px] pb-1 leading-[52px]"
                dangerouslySetInnerHTML={{ __html: point }}
              ></span>
            </div>
          ))}
        </ul>
    </div>
  )
}

export default CookiesTechnologies