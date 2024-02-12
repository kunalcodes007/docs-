import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import {motion} from "framer-motion";
export default function Card({ data,reference }) {
  return (
    <div>
      <motion.div drag dragConstraints={reference} className="relative py-10 px-9 w-60 h-72 rounded-[30px]  bg-zinc-900/90 text-white overflow-hidden ">
        <FaRegFileAlt />
        <p className="text-sm mt-5 font-semibold">{data.desc}</p>
        <div className="footer absolute bottom-0  w-full  left-0 ">
          <div className="flex items-center justify-between  px-8 py-3">
            <h5>{data.filesize}</h5>
            <span className="w-7 h-7 bg-zinc-500 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoIosCloseCircleOutline size=".7em" color="#000" />
              ) : (
                <FiDownloadCloud size=".7em" color="#000" />
              )}
            </span>
          </div>
          {data.tag.isopen ? (
            <div className={`w-full py-4 bg-${data.tag.tagcolor}-700 flex items-center justify-center  tag`}>
              <h3 className="text-sm font-semibold">{data.tag.tagtitle}</h3>
            </div>
          ) : null}
        </div>
      </motion.div>
    </div>
  );
}
