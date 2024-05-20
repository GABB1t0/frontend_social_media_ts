import { FeedWithoutCreate } from "../Posts/Feed";
import Header from "../header/Header";



export const TemplateSavePost: React.FC = () => {
  return (
    <>
    <Header navBlock={false}/>
    <div className="container flex flex-col mx-auto mt-20 w-4/5 gap-4">
      <h3 className="font-bold text-xl">Publicaciones Guardadas</h3>
      
      <FeedWithoutCreate/>
    </div>
    
    </>
  );
}