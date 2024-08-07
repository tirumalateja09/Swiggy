
import React from 'react'

const Shimmer = () => {
  return (
        <div className="pt-[80px]">

            <div className="max-w-[1080px] grid grid-cols-4 gap-7 mx-auto pt-[76px]">
                {
                    Array.from({ length: 8 }, (_, index) => (
                        <div key={index} className="h-[256px]">
                            <div className="bg-[#eef0f5] h-[250px]"></div>
                            <div className="bg-[#eef0f5] h-[10px] mt-5 w-2/3"></div>
                            <div className="bg-[#eef0f5] h-[10px] mt-5 w-1/4"></div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Shimmer