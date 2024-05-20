import React from 'react'

const ItemNotification = () => {
  return (
    <div className="flex gap-3">
      <img src="/src/assets/img/blank-profile-picture.jpg" alt="" className="size-9 rounded-full" />
      <div>
        <p className="font-bold text-sm w-[125px] whitespace-nowrap overflow-hidden text-ellipsis">notificacion</p>
        <p className="text-xs text-gray-400">6d</p>
      </div>
    </div>
  );
}

export default ItemNotification