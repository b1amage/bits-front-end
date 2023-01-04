import TextArea from "components/utilities/form/TextArea";

const CommentTextArea = ({ id, icon, onIconClick, onChange }) => {
  return (
    <div>
      <TextArea
        fluid
        id={id}
        icon={icon}
        onIconClick={onIconClick}
        placeholder="What do you think?"
        onChange={onChange}
      />
    </div>
  );
};

export default CommentTextArea;
