import React from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { TbError404 } from "react-icons/tb";

function NotFound() {
  return (
    <div className="flex-colo gap-8 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6">
      <TbError404 size={94} />
      <h1 className="lg:text-4xl font-bold">Страница не найдена</h1>
      <p className="font-medium text-border italic leading-6">
        Страница, которую вы ищете, не существует. Возможно, вы неправильно
        написали URL-адрес
      </p>
      <Link
        to="/"
        className="bg-subMain transitions text-white flex-rows gap-4 font-medium py-3 hover:text-main px-6 rounded-md"
      >
        <BiHomeAlt /> Домой
      </Link>
    </div>
  );
}

export default NotFound;
