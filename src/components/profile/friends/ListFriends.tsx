import styleListFriends from './ListFriends.module.css';

const ListFriends = () => {
  return (
    <>
      <div className={styleListFriends.gridFriends_container}>
        {FriendData.map ((item,id) => (
          <div key={id} className={styleListFriends.gridFriends_item}>
            <img src={item.img} alt={item.name}/>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

const FriendData = [
  {
    img: 'https://scontent.fccs3-2.fna.fbcdn.net/v/t1.6435-9/121486890_3499566146791612_7447384720159423732_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=be3454&_nc_ohc=McfwweE2qrYAX-MneYf&_nc_ht=scontent.fccs3-2.fna&cb_e2o_trans=t&oh=00_AfC20MwtkDZdoLYAIKiSEeengH8JSR5SMPG1FLJtMyPSkA&oe=659AC453',
    name: 'Alice Fernanda'
  },
  {
    img: 'https://scontent.fccs3-2.fna.fbcdn.net/v/t1.6435-9/121486890_3499566146791612_7447384720159423732_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=be3454&_nc_ohc=McfwweE2qrYAX-MneYf&_nc_ht=scontent.fccs3-2.fna&cb_e2o_trans=t&oh=00_AfC20MwtkDZdoLYAIKiSEeengH8JSR5SMPG1FLJtMyPSkA&oe=659AC453',
    name: 'Alice Fernanda'
  },
  {
    img: 'https://scontent.fccs3-2.fna.fbcdn.net/v/t1.6435-9/121486890_3499566146791612_7447384720159423732_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=be3454&_nc_ohc=McfwweE2qrYAX-MneYf&_nc_ht=scontent.fccs3-2.fna&cb_e2o_trans=t&oh=00_AfC20MwtkDZdoLYAIKiSEeengH8JSR5SMPG1FLJtMyPSkA&oe=659AC453',
    name: 'Alice Fernanda'
  },
  {
    img: 'https://scontent.fccs3-2.fna.fbcdn.net/v/t1.6435-9/121486890_3499566146791612_7447384720159423732_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=be3454&_nc_ohc=McfwweE2qrYAX-MneYf&_nc_ht=scontent.fccs3-2.fna&cb_e2o_trans=t&oh=00_AfC20MwtkDZdoLYAIKiSEeengH8JSR5SMPG1FLJtMyPSkA&oe=659AC453',
    name: 'Alice Fernanda'
  },
  {
    img: 'https://scontent.fccs3-2.fna.fbcdn.net/v/t1.6435-9/121486890_3499566146791612_7447384720159423732_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=be3454&_nc_ohc=McfwweE2qrYAX-MneYf&_nc_ht=scontent.fccs3-2.fna&cb_e2o_trans=t&oh=00_AfC20MwtkDZdoLYAIKiSEeengH8JSR5SMPG1FLJtMyPSkA&oe=659AC453',
    name: 'Alice Fernanda'
  },
  {
    img: 'https://scontent.fccs3-2.fna.fbcdn.net/v/t1.6435-9/121486890_3499566146791612_7447384720159423732_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=be3454&_nc_ohc=McfwweE2qrYAX-MneYf&_nc_ht=scontent.fccs3-2.fna&cb_e2o_trans=t&oh=00_AfC20MwtkDZdoLYAIKiSEeengH8JSR5SMPG1FLJtMyPSkA&oe=659AC453',
    name: 'Alice Fernanda'
  }
];

export default ListFriends;