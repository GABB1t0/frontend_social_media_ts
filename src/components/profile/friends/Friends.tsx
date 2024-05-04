import ListFriends from './ListFriends';
import stylesFriends from './Friends.module.css';

const Friends = () =>{
  return(
    <>
      <section className={stylesFriends.friendsSection_container}>
        <ListFriends/>  
      </section>
            
    </>
  );
};

export default Friends;