import { useEffect } from "react";
import { List } from "../components/List";
import { useDispatch } from "react-redux";
// import comments actions here
import { setInitialState,fetchError, setIsLoading } from "../redux/reducers/commentsReducer";

export const Home = () => {
  const dispatch = useDispatch();
  const getComments = async () => {
    try {
      console.log("inside Get commnets");
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await response.json();

      // dispatch fetch success action here
      dispatch(setInitialState(data));
      dispatch(setIsLoading(false));

    } catch (e) {
      // dispatch fetch error action here
      dispatch(fetchError("failed to fetch comments"));
      dispatch(setIsLoading(false));
    }
  };

  useEffect(() => {
    // dispatch fetch start action here
    dispatch(setIsLoading(true));  
    // execute the getComments function here
    getComments();
    
  }, []);

  return (
    <div className="home">
      <h3>Internet Comments</h3>
      <List />
    </div>
  );
};
