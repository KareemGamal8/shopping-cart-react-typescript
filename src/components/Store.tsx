import { StoreData } from "../Data/StoreData";
import StoreCard from "./StoreCard";

function Store() {
  return (
    <div className='pt-5'>
      <div className='d-flex align-items-center justify-content-center flex-wrap'>
        {StoreData.map((item) => {
          return <StoreCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default Store;
