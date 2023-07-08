import { useParams } from "react-router-dom";

export default function RestoDetail(){
  const { restoId } = useParams();
  console.log(restoId);
  return;
}