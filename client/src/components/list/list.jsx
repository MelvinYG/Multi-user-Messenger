import Message from "./message/message";

const List = () => {
  const numberOfMessages = 10;

  return (
    <div className="flex flex-col inner-list">
      {Array.from({ length: numberOfMessages }).map((_, index) => (
        <Message key={index} />
      ))}
    </div>
  );
};

export default List;
